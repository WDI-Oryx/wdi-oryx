class PostsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @posts = Post.all
    respond_to do |format|
      format.html
      format.json { render json: @posts }
    end
  end

  def show
  end

  def new
  end

  def create
    post = Post.create(title: params[:title], content: params[:content])
    render json: post
  end

  def edit
  end
end
