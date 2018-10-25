Rails.application.routes.draw do
  get "/home", to: "pages#home"

  # Literal Routes
  get "/books", to: "books#index"
  # Dynamic Routes
  get "/books/:title", to: "books#show"
end
