class MapsController < ApplicationController
  #prepend_before_action
  before_action :authenticate_user!

  def index
    @maps = current_user.maps.order('created_at DESC')
    @email = current_user.email
  end

  def new
    @map = current_user.maps.build
  end

  def show
    @map = Map.find(params[:id])
    gon.lat = @map.latitude
    gon.lng = @map.longitude
    @marker = Marker.new
    @markers = Marker.where(map_id: @map)
    gon.info = Map.info(@map)
    #@mark = Map.marker_id(@map)
    #@mark = Marker.where(latitude:  && @map.longitude == Marker.longitude)
  end

  def create
    @map = current_user.maps.build(map_params)
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
