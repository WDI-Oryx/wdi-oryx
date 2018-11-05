Rails.application.routes.draw do
  resources :authors, :books
  # Create a full set of RESTful URLs for the authors table (e.g. /authors, /authors/:id)
end
