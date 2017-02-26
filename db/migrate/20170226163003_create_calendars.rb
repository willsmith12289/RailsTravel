class CreateCalendars < ActiveRecord::Migration
  def change
    def change
    add_column :calendars, :start_time, :date
    add_column :calendars, :end_time, :date
  end
  end
end
