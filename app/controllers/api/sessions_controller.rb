class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      log_in(@user)
      render :show
    else
      render json: ["Invalid username or password"], status: 422
    end
  end

  def destroy
    @user = current_user

    if @user
      log_out
      render :show
    else
      render json: {}, status: 404
    end
  end
end
