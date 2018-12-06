ActionMailer::Base.raise_delivery_errors = true

ActionMailer::Base.smtp_settings = {
  # DEFINE THESE IN credentials.yml.enc
    # EDITOR="code --wait" rails credentials:edit
  :user_name => Rails.application.credentials.dig( :sendgrid, :username ),
  :password => Rails.application.credentials.dig( :sendgrid, :password ),

  # A ternary operation to work out which domain to send from
  :domain => ENV["RAILS_ENV"] == "development" ? "localhost" : "heroku.com",
  :address => 'smtp.sendgrid.net',
  :port => 587,
  :authentication => :plain,
  :enable_starttls_auto => true
}

ActionMailer::Base.delivery_method = :smtp
ActionMailer::Base.default charset: "utf-8"