Rails.application.routes.draw do
  resources :users do
    resources :reviews, only: %i[destroy update]
  end
  resources :reviews, only: %i[create show destroy update]
  resources :users, only: %i[create show destroy update]
  resources :shuls, only: %i[index create destroy update]

  get '/auth', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
end
