class Admin::PortfoliosController < Admin::BaseController
	before_action :set_portfolio, only: [:show, :edit, :update, :destroy]
	before_filter :set_default_response_format, only: [:show, :portfolios_indexer]
  def index
  	@portfolios  = Portfolio.all
  end

  def show
  end

  def new 
    @portfolio = Portfolio.new
  end

  def create
    @portfolio = Portfolio.create(portfolio_params)
    if @portfolio.save
         technologyParams = params[:portfolio][:technologies]
      if technologyParams
         technologyParams.shift
         technologyParams.each { |id|
          @technology = Technology.find_by_id(id)
          @portfolio.technologies << @technology
        }
      end
        redirect_to  admin_portfolios_path
      else
        render 'new'
    end
  end
  
  def edit
  end

  def update
    if @portfolio.update(portfolio_params)
      portfolioTech = params[:portfolio][:technologies]
      portfolioTech.shift
        if @portfolio.technologies != portfolioTech.map(&:to_i)
          pt = @portfolio.technologies #pt = portfolio technologies
          @portfolio.technologies.delete pt
          portfolioTech.each {|id|
            @technology = Technology.find_by_id(id)
            @portfolio.technologies << @technology
          }
        end
      redirect_to admin_root_path
      else
    end
  end

  def destroy
    if @portfolio.destroy
      redirect_to admin_portfolios_path
      else
        redirect_to admin_root_path
    end
  end

private

  def set_portfolio
    @portfolio = Portfolio.find(params[:id])
  end
  
  def portfolio_params
    params.require(:portfolio).permit(:id, :title, :description, :image_url, :githup_url, :dribbble_url, portfolio:[:technologies])
  end

  # def set_default_response_format
  #     request.format = :json
  # end

end
