class AudiosController < ApplicationController
  skip_before_action :verify_authenticity_token

  def home
  end

  def index
    @audios = Audio.all
  end

  def create
    audio = Audio.create audio_params
    respond_to do |f|
      f.html
      f.json { render json: audio }
    end
  end

  private

  def audio_params
    params.permit(:file)
  end
end
