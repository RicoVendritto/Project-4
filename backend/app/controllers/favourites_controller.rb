class FavouritesController < ApplicationController
  skip_before_action :authorize_request, only: [:show, :create, :update, :destroy]
  before_action :set_fav, only: [:show, :update, :destroy]
  # before_action :find_fav, only: [:update]

  # GET /favourites
  def show
    json_response(@fav)
  end

  # POST /favourites
  def create
    @fav = Favourite.create!(fav_params)
    json_response(@fav, :created)
  end

  # PUT /favourites/:id
  def update
    @fav.update(fav_params)
    json_response(@fav)
  end

  # DELETE /favourites/:id
  def destroy
    @fav.destroy
    json_response(status: 'SUCCESS', message: 'deleted the post')
  end

  private

  def fav_params
    # whitelist params
    params.permit(:created_by, :favourites)
  end

  # def find_fav
  #   @fav = Favourite.find_by!(id: params[:id])
  # end

  def set_fav
    @fav = Favourite.find_by!(created_by: params[:id])
  end
end
