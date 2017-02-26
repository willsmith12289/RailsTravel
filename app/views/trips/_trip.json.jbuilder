json.extract! trip, :id, :name, :start_time, :end_time, :created_at, :updated_at
json.url trip_url(trip, format: :json)