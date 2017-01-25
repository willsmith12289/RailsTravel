class MapsController < ApplicationController
  def index
    @maps = Map.order('created_at DESC')
  end

  def new
    @map = Map.new
  end

  def show
    @map = Map.find(params[:id])
   # @marker = @map.markers.find_by map_id: @map
    @lat = @map.latitude
    @lng = @map.longitude
    @markers = Marker.where(map_id: @map)
    @marker = Marker.find_by map_id: @map
    @mark_lat = @marker.latitude
    @mark_lng = @marker.longitude
  end

  def create
    @map = Map.new(map_params)
    if @map.save
      flash[:success] = "Map Added"
      redirect_to root_path
    else
      render 'new'
    end
  end

  def update
    @map = Map.find(params[:id])
    @marker = @map.markers.find_by map_id: @map
    if @map.update(map_params)
      redirect_to map_marker_path(params[:id])
    end
  end

  def destroy
    @map = Map.find(params[:id])
    @map.destroy
    redirect_to root_path
  end

  private

  def map_params
    params.require(:map).permit(:title, :raw_address, :latitude, :longitude)
  end
end
