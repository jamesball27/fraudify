class Api::ArtistsController < ApplicationController
  before_action :redirect_unless_logged_in

  def index
    @artists = current_user.followed_artists
    render :index
  end

  def show
    @artist = Artist.find(params[:id])
    render :show
  end

end
