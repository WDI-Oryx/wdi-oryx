class PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
  end
end
