# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Venue.destroy_all

v1 = Venue.new( { name: "The Sydney Opera House", address: "The Sydney Opera House" } )
puts "----------------------------------------------------"
puts "Venue address, latitude and longitude before saving:"
puts "Venue count: #{ Venue.count }"
puts "Address: #{ v1.address }"
puts "Lat: #{ v1.latitude }, Lon: #{ v1.longitude }"

v1.save
puts "----------------------------------------------------"
puts "Venue address, latitude and longitude **AFTER** saving:"
puts "Venue count: #{ Venue.count }"
puts "Address: #{ v1.address }"
puts "Lat: #{ v1.latitude }, Lon: #{ v1.longitude }"
puts "----------------------------------------------------"

v2 = Venue.create( { name: "Roslyn Packer Theatre", address: "22 Hickson Road, Sydney" } )
v3 = Venue.create( { name: "Sydney Theatre Company" , address: "Pier 4/5 Walsh Bay" } )
puts ">>> Seeds finished."
puts "Venue count: #{ Venue.count }."
puts "----------------------------------------------------"
