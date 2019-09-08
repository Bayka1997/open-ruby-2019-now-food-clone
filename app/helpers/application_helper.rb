module ApplicationHelper
  def get_index_page page = :page, key
    params[page].to_i * Settings.page.num_in_page + key + Settings.page.start
  end

  def get_index key
    key + Settings.page.start
  end

  def get_stores
    current_user.stores.pluck :address, :id
  end

  def get_thumnail imageable
    imageable.images.thumbnail.present? ? "#{imageable.images.thumbnail.first.url}" : "#{Settings.upload.default}"
  end

  def get_images imageable, thumbnail
    return imageable.images.thumbnail if :thumbnail.eql? thumbnail

    imageable.images.image
  end

  def count_get_images imageable, thumbnail
    return imageable.images.thumbnail.count if :thumbnail.eql? thumbnail

    imageable.images.image.count
  end

  def number_to_vnd number
    "#{number_to_currency(number,unit: "",separator: ",",delimiter: ".")} #{Settings.unit}"
  end
end
