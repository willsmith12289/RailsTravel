class CreateMapMarkers < ActiveRecord::Migration
  def up
    create_table :map_markers do |t|
      t.integer "map_id"
      t.integer "marker_id"

    end
    add_index("map_markers", ['map_id', 'marker_id'])
  end
  def down
    drop_table :map_markers
  end
end
