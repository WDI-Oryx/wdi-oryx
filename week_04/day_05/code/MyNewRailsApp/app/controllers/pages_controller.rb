class PagesController < ApplicationController
  def home
    # This is what actually runs:
    # render("pages/home")
  end

  def contact
    # render("pages/contact")
  end

  def about
    # render("pages/about")
  end

  def color
    @chosen_color = params[:color]
  end
end

# Add a new routes to config/routes.rb
# If you go to /contact, plain text should be sent to the browser. It should say "This is the contact page"
