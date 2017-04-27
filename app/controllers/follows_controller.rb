class FollowsController < ApplicationController

  def create
    @follow = Follow.new(follow_params)
    @follow.user = current_user

    if @follow.save
      render :show
    else
      render json: ["Oops! Something went wrong"], status: 422
    end
  end

  def destroy
    @follow = current_user.follows.find_by(followable_id: params[:id])
    @follow.destroy
    render :show
  end

  private

  def follow_params
    params.require(:follow).permit(:followable_id, :followable_type)
  end
end
