Rails.application.routes.draw do
  resources :authors, :books
  # Create a full set of RESTful URLs for the authors table (e.g. /authors, /authors/:id)

  resources :genres, only: [:index, :show]
  # Create CRUD urls for Genres, just for index and show
end
