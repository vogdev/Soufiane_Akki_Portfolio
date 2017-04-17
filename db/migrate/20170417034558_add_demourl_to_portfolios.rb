class AddDemourlToPortfolios < ActiveRecord::Migration[5.0]
  def change
    add_column :portfolios, :demo_url, :string
  end
end
