json.(@portfolio,:id, :title, :description, :image_url, :githup_url, :dribbble_url)
json.technologies @portfolio.technologies,:id, :name, :image_url