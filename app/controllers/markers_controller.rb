class MarkersController < ApplicationController
  before_action :set_marker, only: [:show, :edit, :update, :destroy]
  #before_action :set_map
  # GET /markers
  # GET /markers.json
  def index
    @map = Map.find(params[:map_id])
    @markers = Marker.all
    @markers = Marker.where(map_id: @map)
   # @map = params[:map_id]
  end

  # GET /markers/1
  # GET /markers/1.json
  def show
    @map = Map.find(@marker.map_id)
  end

  # GET /markers/new
  def new
    #@map = Map.find(params[:map_id])
    @marker = Marker.new
   # @map = params[:map_id]
  end

  # GET /markers/1/edit
  def edit
    @map = Map.find(@marker.map_id)
  end

  # POST /markers
  # POST /markers.json
  def create
    
    @marker = Marker.new(marker_params)
    @map = Map.find(@marker.map_id)
    @markers = Marker.where(map_id: @map)
    gon.place_id = params[:place_id]
    respond_to do |format|
      if @marker.save
        format.html { redirect_to map_url }
        format.js
        format.json { render action: 'show', status: :created, location: @markers }
      else
        format.html { render action: 'new' }
        format.json { render json: @marker.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /markers/1
  # PATCH/PUT /markers/1.json
  def update
    @map = Map.find(@marker.map_id)
    @markers = Marker.where(map_id: @map)
    respond_to do |format|
      if @marker.update_attributes(marker_params)
        format.html { redirect_to map_url(@map), notice: 'Marker was successfully updated.' }
        format.js
        format.json { render :show, status: :ok, location: @markers }
      else
        format.html { render :edit }
        format.json { render json: @marker.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /markers/1
  # DELETE /markers/1.json
  def destroy
    @map = Map.find(@marker.map_id)
    respond_to do |format|
      if @marker.destroy
        format.html { redirect_to map_path(@map), notice: 'Marker was successfully destroyed.' }
      else
        format.html { redirect_to map_url, notice: 'Marker was Not successfully destroyed.' }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_marker
      @marker = Marker.find(params[:id])
    end

    # def set_map
    #   @map = params[:map]
    # end

    # Never trust parameters from the scary internet, only allow the white list through.
    def marker_params
      params.require(:marker).permit(:title, :raw_address, :latitude, :longitude, :info, :map_id, :place_id)
    end
end
