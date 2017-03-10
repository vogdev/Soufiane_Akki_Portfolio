class PortfoliosController < ApplicationController
	before_action :set_portfolio, only: [:show]
	before_filter :set_default_response_format, only: [:show, :portfolios_indexer]
  def index
  	@portfolios  = Portfolio.all
  end

  def show
  end
  
  def portfolios_indexer
    @portfolios_indexer  = Portfolio.page(params[:page] || 1).per(params[:per_page] || 1)
  end

private

	def set_portfolio
		@portfolio = Portfolio.find(params[:id])
	end

	def set_default_response_format
         request.format = :json
     end

end
