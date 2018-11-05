# Setting up a Login System

We are going to be using [Devise](https://github.com/plataformatec/devise) to create a login system. It is an awesome RubyGem that helps us add authentication (login) to our system. Some of the stuff it gives us (or can give us) are:

- **Database Authenticatable**: deals with the encryption of the password (for login and sign up)
- **Omniauthable**: deals with the omniauth protocol (helps us add login for things like GitHub, Facebook and Google)
- **Confirmable**: deals with confirmation instructions for sign up
- **Recoverable**: deals with resetting user passwords (and sending reset instructions)
- **Registerable**: deals with signing up, editing and deleting accounts
- **Rememberable**: helps us remember a user based on a cookie
- **Trackable**: tracks the last signed in date (and where it was), as well as IP addresses
- **Timeoutable**: logs out users if they haven't been active in a long time
- **Validatable**: provides validations for emails and passwords
- **Lockable**: handles locking an account after a number of failed login attempts

## Steps

Run `rails new MyBlog`. You may need to add additional flags (things like `--skip-git`), and you can change the name of the application too. Once you have created your app, move into your app (e.g. `cd MyBlog`).

We now need to download devise into our project. The first step is to add `gem "devise"` to your Gemfile, save and then run `bundle`.

Now we need to install Devise, and to create all of the views (note that the views are hidden initially). To do this, run `rails generate devise:install`.

Eventually, we may want Devise to send emails for us. In order for this to work, we need to go and configure how it can actually send emails. To do this, add `config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }` to config/environments/development.rb. Once we get into deploying our applications, we will need to add some more configurations, too.

When we login with Devise, it will redirect us automatically to the root page (e.g. localhost:3000 - no path). We need to make sure we have that root path already set up. If you already have got it, there is no need to do this. But if you don't, you may want to:

- Run `rails g controller Pages home`
- Add `root "pages#home"` into your config/routes.rb file

When we try and login (or sign up etc.), it can either go well or it can fail. The way that Devise works, is it adds the successful messages into something called `notice`, and it adds the failure messages into something called `alert`. If you want to see these messages, make sure you have the following lines of code in your pages. This is commonly done in your app/layouts/application.html.erb.

```html
<p class="notice"><%= notice %></p>
<p class="alert"><%= alert %></p>
```

Sometimes we may want to customize the devise forms (e.g. add classes, add new fields etc.). By default, the views for Devise are hidden, so we need to tell Devise to give us access to them so we can make changes. To do this, we run `rails g devise:views`. This will create a folder called app/views/devise, and in the files we can actually make changes.

We now need to tell Devise to organise our authentication system (and what it should add login too - e.g. the `User` model). We run `rails g devise User` to make this happen. This will create a migration, add a User model, plus a whole heap of other stuff. Because there is a migration file, we need to run `rails db:migrate`.

At this point, Devise has defined a whole heap of stuff for you (plus, we have a full authentication system). It has defined two main things that you can use in Controllers and Views:

```ruby
user_signed_in?
current_user
```

A really common practice is to use these things for conditional rendering:

```html
<% if user_signed_in? %>
  <p>Stuff for logged in users</p>
<% else %>
  <p>Stuff for logged out users</p>
<% end %>
```

It has also defined a lot of routes for you too. Here are some of the main ones that you will use for logged out users:

```html
<%= link_to 'Log In', new_user_session_path %>

<%= link_to "Sign Up", new_user_registration_path %>
```

Here are some of the main ones that you will use for logged in users:

```html
<%= link_to "Edit Logged In User", edit_user_registration_path %>

<%= link_to 'Log Out', destroy_user_session_path, method: :delete %>

<%= link_to 'Delete Account', user_registration_path, method: :delete %>
```

## Extra Stuff

### Adding extra fields to the User database

By default, Devise only keeps track of Emails and Passwords (plus, a whole heap of other stuff). If you want to add more fields, follow the following steps. I am only doing it for two extra fields (but you can do this for as many fields as you like).

Run `rails g migration AddFieldsToUsers name:string username:string`

In app/controllers/application_controller.rb, add the following:

```ruby
class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :name])
    devise_parameter_sanitizer.permit(:account_update, keys: [:username, :name])
  end
end
```

Within app/views/devise/registrations/new.html.erb and app/views/devise/registrations/edit.html.erb, add the following code (within the `form_for`):

```html
<div class="field">
  <%= f.label :name %><br />
  <%= f.text_field :name, autocomplete: "name" %>
</div>

<div class="field">
  <%= f.label :username %><br />
  <%= f.text_field :username, autocomplete: "username" %>
</div>
```

### Protecting pages (making them only for logged in users)

Let's pretend that you were trying to create a blog. You may have two models: `User` and `Post`. The way that you might want to continue, is that only logged in users will be able to create, edit and destroy posts. In order to get this sorted, firstly set up your CRUD system for posts.

After you have done that, add this into your `PostsController`:

```ruby
before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]
```

A `before_action` is something that runs before methods in a controller. Here we are saying that requests that come in - ones that are directed to the PostsController and are meant to run new, create, edit, update or destroy - will run a method called `authenticate_user!` first (before the action). `authenticate_user!` was given to us by Devise.

In order to create a post that is associated with the logged in user, your `create` method may end up looking something like this:

```ruby
def create
  post = current_user.posts.create(post_params)
  redirect_to post_path(post)
end
```
