Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :posts do
    resources :comments
  end

  resources :favourites

  # post 'login', to: 'users#login'
  post 'auth/login', to: 'authentication#authenticate'
  post 'signup', to: 'users#create'

  post 'password/forgot', to: 'passwords#forgot'
  post 'password/reset', to: 'passwords#reset'
end