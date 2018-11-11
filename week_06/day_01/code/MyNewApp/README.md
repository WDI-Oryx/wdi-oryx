# Image Upload, with AWS and ActiveStorage

## Steps

### Getting your Amazon AWS Account

- Sign up [here](https://portal.aws.amazon.com/billing/signup)
  - Note, you will have to add Credit Card details though we won't be spending any money in this tutorial. This is just for authorisation
- Sign in to the Admin Console

### Setting up an S3 Bucket (that your Application will use)

- Go to the [S3 Console](https://s3.console.aws.amazon.com/s3/home)
  - Click "Create Bucket"
  - Name your application
  - Select the region closest to you
  - Keep all the default settings
  - Click "Create Bucket"

### Setting up a User (your Application)

- Go to the [IAM Portal](https://console.aws.amazon.com/iam/home)
  - Click [Users](https://console.aws.amazon.com/iam/home#/users)
  - Click Add User
    - Add a User Name (typically named after the App that you are creating)
    - Select Programmatic Access
    - Click Next
  - Click "Attach existing policies directly"
    - Search for, and select, "AmazonS3FullAccess"
    - Select that and click Next
  - Review, then click "Create User"
  - Copy and paste your Access key ID and Secret access key! Make sure you write down which one is which

### Set up ActiveStorage in your application

- Open up the [ActiveStorage documentation](https://edgeguides.rubyonrails.org/active_storage_overview.html)
- Run `rails active_storage:install`
- Run `rails db:migrate`

### Set up your app's credentials

- `EDITOR="code --wait" rails credentials:edit`

At the top of the file, set up your Amazon credentials:

```yml
aws:
  access_key_id: YOUR ACCESS KEY ID HERE
  secret_access_key: YOUR SECRET ACCESS KEY HERE
```

- Save the file, then close it!
- Open up `config/master.key`, and copy the text
- Then run: `heroku config:set RAILS_MASTER_KEY=YOURMASTERKEYGOESHERE`
  - **Only** if you have Heroku set up

### Set up your app's storage

- In `config/storage.yml`, have code that looks like the following:

```yml
test:
  service: Disk
  root: <%= Rails.root.join("tmp/storage") %>

local:
  service: Disk
  root: <%= Rails.root.join("storage") %>

amazon:
  service: S3
  access_key_id: <%= Rails.application.credentials.dig(:aws, :access_key_id) %>
  secret_access_key: <%= Rails.application.credentials.dig(:aws, :secret_access_key) %>
  region: YOURREGIONGOESHERE
  bucket: YOURBUCKETNAMEGOESHERE
```

- In your Gemfile, add `gem "aws-sdk-s3", require: false`
- Run `bundle`

### Add it to the model

Suppose you have a `Product` model...

In `app/models/Product.rb`, add the following code:

```ruby
has_one_attached :photo
```

In the sign up form, receive a Photo:

```erb
<%= f.file_field :photo %>
```

Make sure you allow this in `params`!

From then on, you will be able to run code like the following:

```ruby
product.photo.attached?
```

```html
<%= image_tag @product.photo %>
```

For more information, [see here](https://edgeguides.rubyonrails.org/active_storage_overview.html)

This is a [good blog post](https://medium.com/alturasoluciones/setting-up-rails-5-active-storage-with-amazon-s3-3d158cf021ff) that goes through this stuff too.
