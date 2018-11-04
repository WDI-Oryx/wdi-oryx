Rails.application.routes.draw do
  resources :authors, :books, :comments
  # Create a full set of RESTful URLs for the authors table (e.g. /authors, /authors/:id)
end
