class Portfolio < ApplicationRecord
	has_many :technologies, dependent: :destroy
end
