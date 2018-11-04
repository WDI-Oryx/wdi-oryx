class AuthorsController < ApplicationController
  def index
    @authors = Author.all
    # Instance variables can be used in the view
  end

  def show
    # params[:id] is the dynamic part of the URL
    @author = Author.find_by(id: params[:id])
  end

  def new
    @author = Author.new
  end

  def create
    raise "An error"
  end

  def edit
  end
end
