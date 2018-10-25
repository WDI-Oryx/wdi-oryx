class PostsController < ApplicationController
  def index
  end

  def show
    @title = params[:title]
    # Access params, pass the title of the post into the .html.erb
    # Instance variables can be accessed in views
    @is_admin = false
    @fav_number = 42
  end
end
