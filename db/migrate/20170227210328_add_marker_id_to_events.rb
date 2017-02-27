class AddMarkerIdToEvents < ActiveRecord::Migration
  def change
     add_reference :events, :marker, index: true, foreign_key: true
  end
end
