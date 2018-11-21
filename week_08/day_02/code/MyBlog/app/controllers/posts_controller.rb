class PostsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @posts = Post.all
  end

  def all_comments
    post = Post.find_by(id: params[:id])
    comments = post.comments
    render json: comments
  end

  def show
    @post = Post.find_by(id: params[:id])
  end

  def comment
    post = Post.find_by(id: params[:id])
    c = post.comments.create(body: params[:body])
    render json: c
  end

  def new
  end

  def edit
  end
end
