class PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def show
    @post = Post.find_by(id: params[:id])
  end

  def new
    @post = Post.new
  end

  def create
    # The current user (logged in user) has posts associated with them, add new post in there using params from the form
    # post = Post.create({
    #   title: params[:post][:title],
    #   body: params[:post][:body],
    #   user_id: current_user.id
    # })
    post = current_user.posts.create(post_params)
    redirect_to post_path(post)
  end

  def edit
  end

  private

  def post_params
    params.require(:post).permit(:title, :body)
  end
end
