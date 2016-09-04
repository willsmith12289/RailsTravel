class CreateMarkers < ActiveRecord::Migration
  def change
    create_table :markers do |t|
      t.string :title
      t.text :address
      t.float :latitude
      t.float :longitude
      t.text :notes

      t.timestamps null: false
    end
  end
end
