class AddPlaceIdToMarkers < ActiveRecord::Migration
  def change
    add_column :markers, :place_id, :string
  end
end
