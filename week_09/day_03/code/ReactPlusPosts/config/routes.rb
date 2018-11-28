Rails.application.routes.draw do
  resources :posts
  root "pages#app"
end
