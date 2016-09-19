class CreateMarkers < ActiveRecord::Migration
  def change
    create_table :markers do |t|
      t.string :title
      t.string :address
      t.float :latitude
      t.float :longitude
      t.text :info
      t.references :map, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
