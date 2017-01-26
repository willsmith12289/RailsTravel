class Map < ActiveRecord::Base
  attr_accessor :raw_address
  has_many :markers

  geocoded_by :raw_address
  reverse_geocoded_by :latitude, :longitude

  after_validation -> {
    self.address = self.raw_address
    geocode
  }, if: ->(obj){ obj.raw_address.present? and obj.raw_address != obj.address }

  after_validation :reverse_geocode, unless: ->(obj) { obj.raw_address.present? },
                   if: ->(obj){ obj.latitude.present? and obj.latitude_changed? and obj.longitude.present? and obj.longitude_changed? }
  def self.coordinates(map_id)
    latitude = Marker.where("map_id = ?", map_id).pluck(:latitude)
    longitude = Marker.where("map_id = ?", map_id).pluck(:longitude)
    coordinates = latitude.zip(longitude)
    coordinates
  end

  def self.info(map_id)
    infos = Array.new
    info = Marker.where("map_id = ?", map_id).pluck(:info)
    infos.push(info)
  end

end