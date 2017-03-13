Rails.application.routes.draw do
 	devise_for :users
	root to: 'portfolios#index'

	resources :portfolios, only: [:index, :show] do
		  collection do
		    get 'portfolios_indexer'
		  end
	end
	
	namespace :admin do
			root 'portfolios#index'
		resources :portfolios, only: [:index, :new, :create, :edit, :update] do
		end
	end

end
