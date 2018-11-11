# Image Uploading with Cloudinary and Carrierwave

We are going to be adding the ability to upload images to a Rails app (built with [Devise](https://github.com/plataformatec/devise)). The things we will be using are [Cloudinary](https://cloudinary.com/console) and [CarrierWave](https://github.com/carrierwaveuploader/carrierwave).

The approach we will be taking, after signing up for the necessary services, is:

- Include relevant Gems
- Authorise this Rails Application with Cloudinary (using rails credentials)
- Update the forms
- Make sure Devise allows image in params, for both signing up and editing a profile
- When image is being added to the users table, make sure it uses an **uploader**
- Show the image in a view
- Get it working on [Heroku](https://www.heroku.com/)

## Set up your Cloudinary Account

- Sign up for your account [here](https://cloudinary.com/users/register/free)
- Log in [here](https://cloudinary.com/users/login)
- Open up the [Management Console](https://cloudinary.com/console)

## Install necessary Gems

Add the following lines into the Gemfile:

```ruby
gem 'cloudinary'
gem 'rest-client', '~> 2.0'
gem 'carrierwave'
```

Then, run `bundle`.

## Set up your Rails Credentials

- Download your [cloudinary.yml file](https://cloudinary.com/console/lui/cloudinary.yml), and add it into the config directory of your Rails application (`config/cloudinary.yml`)

  - On the dashboard next to "Account Details", there is a link with the text "YML"

- Now, we need to add your API authentication details into your Rails Credentials
  - First, run `EDITOR="code --wait" rails credentials:edit`

In this file, add the following code to the end (making sure to **fill in your own details**):

```yml
cloudinary:
  cloud_name: YOUR_CLOUD_NAME_HERE
  api_key: YOUR_API_KEY_HERE
  api_secret: YOUR_API_SECRET_HERE
```

Make sure that once you finish writing this in, you **save the file** and then **close the file**.

Now, `Rails.application.credentials.dig(:cloudinary)` should be available in your `rails console`. We are going to use this to configure your `config/cloudinary.yml` file.

Open up your `config/cloudinary.yml`, and replace the contents with the following:

```yml
development:
  cloud_name: <%= Rails.application.credentials.dig(:cloudinary, :cloud_name) %>
  api_key: <%= Rails.application.credentials.dig(:cloudinary, :api_key) %>
  api_secret: <%= Rails.application.credentials.dig(:cloudinary, :api_secret) %>
  enhance_image_tag: true
  static_image_support: false
production:
  cloud_name: <%= Rails.application.credentials.dig(:cloudinary, :cloud_name) %>
  api_key: <%= Rails.application.credentials.dig(:cloudinary, :api_key) %>
  api_secret: <%= Rails.application.credentials.dig(:cloudinary, :api_secret) %>
  enhance_image_tag: true
  static_image_support: true
test:
  cloud_name: <%= Rails.application.credentials.dig(:cloudinary, :cloud_name) %>
  api_key: <%= Rails.application.credentials.dig(:cloudinary, :api_key) %>
  api_secret: <%= Rails.application.credentials.dig(:cloudinary, :api_secret) %>
  enhance_image_tag: true
  static_image_support: false
```

This makes sure that your API details are hidden from GitHub. The only other step that you will need to be sure of, is that in your `.gitignore` file (you may need to create this in the root of your Rails application) there is a line saying `config/master.key`.

At this point, you'll need to restart both your Rails consoles and servers.

## Prepare your model

We are going to be adding profile pictures to the `User` model that is generated for us by Devise, but this will also be the rough process for non-Devise generated models.

Firstly, let's add an `image` field to the User model. We can do this by running `rails g migration AddImageToUsers image:string`, followed by `rails db:migrate`.

## Update your forms

In your `app/views/devise/registrations/new.html.erb` and `app/views/devise/registrations/edit.html.erb`, add the following lines:

```erb
<div>
  <%= f.label "Image" %>
  <%= f.file_field :image %>
</div>
```

Make sure that these go within the `form_for`!

## Prepare Devise for the new fields

In your `app/controllers/application_controller.rb`, add the following code:

```ruby
before_action :configure_permitted_parameters, if: :devise_controller?

protected

def configure_permitted_parameters
  devise_parameter_sanitizer.permit(:sign_up, keys: [:image])
  devise_parameter_sanitizer.permit(:account_update, keys: [:image])
end
```

Note, you may already have lines like this in this file. If you do, add `:image` as parameters for both `:sign_up` and `:account_update`.

## Create an Uploader

Now, we need to generate an uploader for our Rails application. To do this, we are going to run `rails g uploader Image` (this `uploader` generator is given to us by the CarrierWave gem). If this step doesn't work, make sure you go back up to the top of this tutorial, include the relevant gems and run `bundle`.

Once you have run this, open up the `app/uploaders/image_uploader.rb` file and replace it with the following code:

```ruby
class ImageUploader < CarrierWave::Uploader::Base
  include Cloudinary::CarrierWave
end
```

## Link the Model and the Uploader

We now have both a `User` model and an `ImageUploader`. The final step before getting images to upload, is to make sure that when someone tries to save `image` into the users table, it will rely on the `ImageUploader` to make it happen. Here is what you will need to add in your User model:

```ruby
mount_uploader :image, ImageUploader
```

Make sure that this goes within the `class`!

## Display the Image

Hopefully, this has all worked successfully. If the upload has correctly gone through, we can show the image on the page.

```html
<%= cl_image_tag @user.image %>
```

## Customise your `config/application.rb`

Finally, there is a problem when we load the Rails console (in that there is an error about an `undefined constant`). To solve, add the following code into the end of your `config/application.rb` file:

```ruby
require "carrierwave/orm/activerecord"
```

You'll have to restart your `rails server`s and your `rails console`s.

## Make it work with Heroku

We now need to tell Heroku how to decrypt our Rails credentials. To do this, we copy the code in your `config/master.key` file into the following command:

```bash
heroku config:set RAILS_MASTER_KEY=YOUR_MASTER_KEY_HERE
```
