Rails.application.routes.draw do
  get 'posts/index'
  root "pages#app"
  resources :posts
end
