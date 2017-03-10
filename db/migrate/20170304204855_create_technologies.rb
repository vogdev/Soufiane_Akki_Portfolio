class CreateTechnologies < ActiveRecord::Migration[5.0]
  def change
    create_table :technologies do |t|
      t.references :portfolio, foreign_key: true
      t.string :name
      t.string :image_url

      t.timestamps
    end
  end
end
