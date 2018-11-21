Rails.application.routes.draw do
  resources :posts
  get "/posts/:id/comments", to: "posts#all_comments"
  post "/posts/:id/comments", to: "posts#comment"
end
