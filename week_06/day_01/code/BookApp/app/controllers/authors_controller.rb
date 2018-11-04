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
    author = Author.create(author_params)
    redirect_to authors_path # -> Index method
    # redirect_to author_path(author) # -> Show method
  end

  # 1. Add a link to edit on the show page of every author (using link_to - find the page using /rails/info/routes)
  # 2. Render the partial on the edit page
  # 3. ...

  def edit
    @author = Author.find_by(id: params[:id])
  end

  def update
    author = Author.find_by(id: params[:id])
    author.update(author_params)
    redirect_to author_path(author) # -> Show method
    # redirect_to authors_path # -> Index method
  end

  # DELETE /authors/:id
  def destroy
    author = Author.find_by(id: params[:id])
    author.destroy
    redirect_to authors_path # Make a new get request to /authors
  end

  private

  def author_params
    params.require(:author).permit(:name, :location, :dob, :image, :description)
  end
end
