require "pry"
require "geocoder"

# An address to work with, a plain string in this instance.
  # We can also use lat/lng, cities, landmarks, street addresses and IP addresses
# my_address = "The Sydney Opera House"

# Grabbing the first result (since I get several)
# result = Geocoder.search(my_address).first

# puts "-----------------------------------------"
# puts "Searching for 'The Sydney Opera House'."
# puts "Result details:"
# # binding.pry

### puts "House number: #{ result.house_number }, street: #{ result.street }, suburb: #{ result.suburb }, city: #{ street.city }."
# puts result.address
# puts "-----------------------------------------"


### Advanced:

addresses = ["22 Hickson Rd, Sydney", "The Sydney Opera House", "37.216.205.33"]

def geocode_address address
  result = Geocoder.search( address ).first
  puts "-----------------------------------------"
  puts "Searching for '#{ address }'."
  puts "Result details:"
  puts "Address: #{ result.address }"
  puts "Lat/lng: #{ result.latitude }, #{ result.longitude }"
  puts "-----------------------------------------"
end

addresses.each do |address|
  geocode_address address
end