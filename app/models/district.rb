class District < ApplicationRecord
  belongs_to :province

  scope :get_district_by_province_id, ->(province_id){where province_id: province_id}
end
