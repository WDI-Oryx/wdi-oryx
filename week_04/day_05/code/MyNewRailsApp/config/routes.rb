Rails.application.routes.draw do
  get "/home", to: "pages#home"
  get "/contact", to: "pages#contact"
  get "/about", to: "pages#about"
  get "/colors/:color", to: "pages#color"

  # Literal Route
  get "/users", to: "users#index"
  # Dynamic Route
  get "/users/:username", to: "users#show"

  get "/posts", to: "posts#index"
  get "/posts/:title", to: "posts#show"
end

# 1. Add route
# 2. Add controller
# 3. Add method
# 4. Add folder for the views
# 5. Add your .html.erb file
