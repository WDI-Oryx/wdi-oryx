class GenresController < ApplicationController
  def index
    @genres = Genre.all
    # Go to the view, create a list of all genres
  end

  def show
    @genre = Genre.find_by(id: params[:id])
  end
end
