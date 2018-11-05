class MoviesController < ApplicationController
  def index
  end

  def new
    @movie = Movie.new
  end

  def create
    movie = Movie.create(movie_params)
    redirect_to movie_path(movie)
  end

  def show
  end

  def edit
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :description, :year, actor_ids: [])
  end
end
