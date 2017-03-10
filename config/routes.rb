Rails.application.routes.draw do
	root to: 'portfolios#index'
	resources :portfolios, only: [:index, :show] do
		  collection do
		    get 'portfolios_indexer'
		  end
	end
end
