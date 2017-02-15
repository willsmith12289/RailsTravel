class AddUserIdToMaps < ActiveRecord::Migration
  def change
    add_column :maps, :user_id, :interger
  end
end
