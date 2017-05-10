class Api::V1::LinksController < ApplicationController
  def index
    @links = Link.all
  end

  def show
    @link = Link.find_by(params[:id])
  end

  def create
    @link = Link.new(link_params)
    if @link.save
      render :show
    else
      render :error
    end
  end

  def destroy
    @link = Link.new(link_params)
    @link.destroy
  end

  private

  def link_params
    params.require(:link).permit(:url)
  end
end