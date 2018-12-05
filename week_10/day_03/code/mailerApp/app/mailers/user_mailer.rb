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