json.array! @portfolios_indexer do |portfolio|
	json.extract! portfolio, :id, :title, :image_url, :demo_url
end
