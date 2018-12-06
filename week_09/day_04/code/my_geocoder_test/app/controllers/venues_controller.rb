class VenuesController < ApplicationController
  def index
    @venue = Venue.all
  end
end
