require "pry"
require "geocoder"

my_address = "The Sydney Opera House"
result = Geocoder.search(my_address).first

binding.pry
