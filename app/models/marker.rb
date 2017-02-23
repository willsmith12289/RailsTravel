class Marker < ActiveRecord::Base
  belongs_to :map
attr_accessor :raw_address


   geocoded_by :raw_address
  reverse_geocoded_by :latitude, :longitude

  after_validation -> {
    self.address = self.raw_address
    geocode
  }, if: ->(obj){ obj.raw_address.present? and obj.raw_address != obj.address }

  after_validation :reverse_geocode, unless: ->(obj) { obj.raw_address.present? },
                   if: ->(obj){ obj.latitude.present? and obj.latitude_changed? and obj.longitude.present? and obj.longitude_changed? }
  def self.marker_id(map_id)
    marker_id = Marker.where("map_id = ?", map_id).pluck(:id)
    marker_id
  end

  def self.place_id(map_id)
    place_id = Marker.where("map_id = ?", map_id).pluck(:place_id)
    place_id
  end
 
 
end
