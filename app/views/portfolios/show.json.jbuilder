json.(@portfolio, :title, :description, :image_url, :githup_url, :dribbble_url)
json.technologies @portfolio.technologies, :name, :image_url