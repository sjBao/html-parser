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
      @link.parsed_items.create(@link.parse_content)
      render :show
    else
      render :error
    end
  end

  def update
    @link = Link.find_by(params[:id])
    if @link.update(link_params)
      @link.parsed_items = @link.parse_content.map do |content|
        @link.parsed_items.find_or_create_by(content)
      end
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