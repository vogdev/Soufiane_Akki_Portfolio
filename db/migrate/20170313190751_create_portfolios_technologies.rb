class CreatePortfoliosTechnologies < ActiveRecord::Migration[5.0]
  def change
    create_table :portfolios_technologies, :id => false do |t|
    	t.integer :portfolio_id
    	t.integer :technology_id
    end
    add_index :portfolios_technologies, :portfolio_id
    add_index :portfolios_technologies, :technology_id
  end
end
