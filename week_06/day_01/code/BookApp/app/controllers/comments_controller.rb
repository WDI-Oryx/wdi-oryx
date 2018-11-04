class CommentsController < ApplicationController
  def index
    @comments = Comment.all
  end

  def show
    @comment = Comment.find_by(id: params[:id])
  end

  def new
    @comment = Comment.new
  end

  def create
    comment = Comment.create(comment_params)
    redirect_to book_path(comment.book)
  end

  def edit
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :name, :book_id)
  end
end
