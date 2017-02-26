class CreateCalendars < ActiveRecord::Migration
  def change
    create_table :calendars do |t|
      t.string :title
      t.string :calendar_id
      t.references :map, index: true, foreign_key: true
      t.timestamps null: false
    end
  end
end
