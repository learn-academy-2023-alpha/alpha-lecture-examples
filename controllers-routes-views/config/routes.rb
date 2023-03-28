Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # HTTP verb (get) / location / hash rocket / controller (Home) / method
  get '/greeter' => 'home#greeter'
  get '/joke' => 'home#joke'
  get '/alpha' => 'home#alpha_cohort'
  get '/landing' => 'home#landing'
  root to: 'home#landing'
end
