Rails.application.routes.draw do
  devise_for :users
  root "pages#home"
  # If you go to localhost:3000, load the pages controller's home view
end
