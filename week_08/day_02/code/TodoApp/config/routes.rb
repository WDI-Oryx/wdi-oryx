Rails.application.routes.draw do
  root "pages#app"
  resources :todos
  put "/todos/:id/toggle", to: "todos#toggle"
end
