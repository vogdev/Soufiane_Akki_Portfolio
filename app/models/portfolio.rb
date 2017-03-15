class Portfolio < ApplicationRecord
	has_and_belongs_to_many :technologies, dependent: :destroy
end
