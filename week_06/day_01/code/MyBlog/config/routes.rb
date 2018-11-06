Rails.application.routes.draw do
  devise_for :users

  resources :posts
  root "pages#home"
  # If you go to localhost:3000, load the pages controller's home view
  resources :users, only: [:show]
end
