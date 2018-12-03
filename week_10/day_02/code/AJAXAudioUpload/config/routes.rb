Rails.application.routes.draw do
  root "audios#home"
  resources :audios
end
