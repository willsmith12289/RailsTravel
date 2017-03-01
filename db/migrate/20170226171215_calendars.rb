class Calendars < ActiveRecord::Migration
  def change
    create_table :calendars do |t|
      t.string :title
      t.date :start_time
      t.date :end_time
    end
  end
end
