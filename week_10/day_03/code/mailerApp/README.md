## Rails Mailers
Rails comes with the ability to configure something called mailers by default. 
Mailers allow you to communicate important information with your users quickly and efficiently.

Things like passwords resets, welcome emails and newsletters are all done with mailers. 
For a tiny bit of code, we get a lot of utility, so in this guide I'll quickly cover creation, setup and Heroku deployment using mailers.

____

Firstly, we'll start a new project: 
- `rails new mailerApp -d postgresql` (postgres because we'll be deploying to Heroku).


Next, we'll get a User CRUD system to play with:
- `rails g scaffold User name:string email:string`


Establish the database:
```
rails db:create
rails db:migrate
```

Generate a mailer (the name doesn't matter, but best practice would be ModelMailer): 
- `rails generate mailer UserMailer`

This will create some files for you, the ones we care about are `app/mailers/user_mailer.rb` and `app/views/user_mailer`. The first is effectively a controller, the second is to store views for the mailer -- basically HTML files.

____
#### Controllers

From here, start filling out the mailer controllers:

- Define a method and email in `usermailer.rb`:
```rb
class UserMailer < ApplicationMailer
  # Can be anything you want, bear in mind that if you want replies -- it needs to be an email you have access to.
  default from: 'ThatCoolDude@theInternet.com'
  
  # Much like controllers for views in our app (like def index), the method should match our view name -- in this case welcome.
  def welcome user
    # Turn the user passed to the method into an instance variable, so we can access it in our view
    @user = user 
    # Tell the mailer what addresses it is sending to. Can be also be used to cc/bcc etc. Docs here:
    mail( :to => @user.email, :subject => "Welcome to the jungle!" )
  end
end
```
____
#### Views
Now we'll make the corresponding views. Again, these want to match our method in the controller. 
We will need to make two versions, one will be an html file, which we can style with css and structure, the second will just be a plain txt file. 
This is a backup for email clients that will not show html.
  - `touch app/views/user_mailer/welcome.html.erb` and `touch app/views/user_mailer/welcome.txt`
  
From here, we'll start looking at the views, the things the user will see. Because in the `welcome` method we turned the user into an instance variable, we have access to the `@user` model here in our view templates. This lets us do some nice things like personalise messages to each user. Let's have a look:


```rb
# In app/views/usermailer/welcome.html.erb:
<div>
  <h2>Welcome to my website, <%= @user.name %>!</h2>
  <hr>
  <p>This is going to be great!</p>
</div>

# in app/views/usermailer/welcome.txt:
Welcome to my website, <%= @user.name %>!

This is going to be great!
```
#### Models
Now, one more big thing for rails, we need to tell the app to mail a user when something happens. In this case, a welcome email, so I'll put this in the `user#create` method:

```rb
  def create
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save
      
        # Just this lin -- all it says is, in UserMailer (the controller) call the welcome method immediately,
        # then pass it the newly made user.
        UserMailer.welcome(@user).deliver_now
        
        format.html { redirect_to @user, notice: 'User was successfully created.' }
        format.json { render :show, status: :created, location: @user }
      else
        format.html { render :new }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end
  ```

That's almost all of the functionality done! 

____
#### Service providers

Next we need to use a service to be sending our mail, in this case we're going to need to use [Sendgrid](https://signup.sendgrid.com/), so go ahead and sign up for a free account.

There are a couple of ways to go about using sendgrid, and a couple of different configurations we can use with it (for instance, you can restrict what certain apps can do), but for the purposes of this tutorial, I'll need you to remember your sendgrid `password` and `username`.

In your terminal, run the following line so we can modify `credentials.yml.enc`: 
- `EDITOR="code --wait" rails credentials:edit`

Below your `secret_key`, add in the `sendgrid` namespace, then your username and password:
```rb
sendgrid:
  username: 'username'
  password: 'password'
```
Save your changes, and we have one more step to get our mailer working.

All we need to do to get this sending mail is to set all the mailer options in our app when it starts. To do this  we're going to create an initializer, which will configure all our settings from when the server first starts.

____
#### Initializers

- `touch config/initializers/mail.rb`

Then we need to fill it out:

```rb
ActionMailer::Base.raise_delivery_errors = true

ActionMailer::Base.smtp_settings = {
  :user_name => Rails.application.credentials.dig( :sendgrid, :username ),
  :password => Rails.application.credentials.dig( :sendgrid, :password ),
  :domain => ENV["RAILS_ENV"] == "development" ? "localhost" : "heroku.com",
  :address => 'smtp.sendgrid.net',
  :port => 587,
  :authentication => :plain,
  :enable_starttls_auto => true
}

ActionMailer::Base.delivery_method = :smtp
ActionMailer::Base.default charset: "utf-8"
```

The only interesting bits of code there are:
- `username` and `password` (What we set in credentials)
- `domain`, from which we are usuing a ternary operatory to check `ENV["RAILS_ENV"]`. If it's development, it tells the mailer to send from localhost, if not, use Heroku. Without this line, the mailers will not work on Heroku.

With that saved, your mailers should now work locally! Try create an account. If you get an email, great! If not, you will need to re-visit the steps above.
____

#### Heroku:

Getting this working on Heroku from here is super straightforward;

If you haven't already:
```
git init
heroku create
``` 
then:
```
git add .
git commit -m "Deploying to Heroku."
heroku config:set RAILS_MASTER_KEY=`cat config/master.key`
git push heroku master
heroku run rails db:migrate
```

And done! You now have mailers working on Heroku