class Venue < ApplicationRecord
  # Tells geocoder to look for an 'address' field in the model
  geocoded_by :address

  # After validation is a special method that says, once the model is validated (saved or updated):
    # Run geocoder (using address, set above). When it runs it will return a 'latitude' and 'longitude' to the model (if the columns are present in the database model table).
  after_validation :geocode
end
