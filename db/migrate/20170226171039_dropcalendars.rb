class Dropcalendars < ActiveRecord::Migration
  def change
    drop_table :calendars
  end
end
