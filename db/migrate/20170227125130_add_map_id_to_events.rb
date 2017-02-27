class AddMapIdToEvents < ActiveRecord::Migration
  def change
    add_reference :events, :map, index: true, foreign_key: true
  end
end
