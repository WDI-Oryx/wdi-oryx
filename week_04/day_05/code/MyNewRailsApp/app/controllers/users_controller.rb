class UsersController < ApplicationController
  def index
  end

  def show
    @username = params[:username]
    @user = {
      first_name: "Jacques",
      last_name: "Cousteau",
      email: "jacques@ga.co",
    }
    # Print out all of these values in the .html.erb file!
  end
end
