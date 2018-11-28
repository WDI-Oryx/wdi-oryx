class PostsController < ApplicationController
  def index
    @posts = Post.all
    respond_to do |f|
      f.html
      f.json { render json: @posts }
    end
  end
end
