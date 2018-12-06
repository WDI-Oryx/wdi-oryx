# Geocoder

#### What is it?
[Geocoder](https://github.com/alexreisner/geocoder) is a gem which allows you to easily search, format and manipulate location data.
Given either a street address, IP address or latitude and longitude, it can search for and process the data returned, giving you access to all the other components of that address (i.e, A formatted street address and latitude and longitude can be extracted from an IP address).

#### Getting started

Open pry (or a Ruby file), and `require('geocoder')`.
This gives us access to the Geocoder API, and the `search` method. The search method accepts any input that would work on Google maps -- for instance, "Bennelong Point, Sydney NSW 2000, Australia", "-33.8554354197085, 151.2166456802915" or even landmarks that Google can easily locate, like "The Eiffel Tower" will also return a valid result.

```rb
Geocoder.search('alfaisal university')
[#<Geocoder::Result::Nominatim:0x007f90e2581978 @data={"place_id"=>"242174901",
 "licence"=>"Data © OpenStreetMap contributors,
 ODbL 1.0. https://osm.org/copyright",
 "osm_type"=>"way",
 "osm_id"=>"636683185",
 "boundingbox"=>["24.6628385",
 "24.6659633",
 "46.6739568",
 "46.6788867"],
 "lat"=>"24.66442775",
 "lon"=>"46.6763859999469",
 "display_name"=>"Alfaisal university, Al Zahrani, Al Madhar ash Shamali District, Shmeisi Municipality, Al Madhar ash Shamali, Riyadh Region, 11533, Saudi Arabia",
 "class"=>"amenity",
 "type"=>"university",
 "importance"=>0.201,
 "icon"=>"https://nominatim.openstreetmap.org/images/mapicons/education_university.p.20.png",
 "address"=>
  { 
    "university"=>"Alfaisal university",
    "road"=>"Al Zahrani",
    "suburb"=>"Al Madhar ash Shamali District",
    "city_district"=>"Shmeisi Municipality",
    "hamlet"=>"Al Madhar ash Shamali",
    "region"=>"Riyadh Region",
    "postcode"=>"11533",
    "country"=>"Saudi Arabia",
    "country_code"=>"sa"}},
 @cache_hit=nil>
 >]
```
As you can see, what we get back is an array (because Geocoder can reasonably expect to find multiple responses for something like "123 Smith st", so you will end up with an array of results.

To crack into the response, we need to access an index of the array, or assign that value to a variable from the start, like this: `opera_house = Geocoder.search('Sydney opera house')[0]`. I then have access to all the methods within that object, and can extract the bits of information I want from it, for instance the actual address of the Opera house: 
```rb
opera_house = Geocoder.search("The Sydney Opera House").first

opera_house.address
=> "Sydney Opera House, 2, Macquarie Street, Sydney, Council of the City of Sydney, New South Wales, 2000, Australia"
```

You also get access to calculation methods in the Geocoder, to see this in action, define another location: `eiffel_tower = Geocoder.search('The Eiffel tower').first`.

Next, to calculate the points between the 2, we can use `Geocoder::Calculations`:
```rb
Geocoder::Calculations.distance_between( [opera_house.latitude, opera_house.longitude], [eiffel_tower.latitude, eiffel_tower.longitude] )
  => 10540.816635955905 

#The default response is in miles. To change this, add the 'units' flag -- like this:
# ( [opera_house.latitude, opera_house.longitude], [eiffel_tower.latitude, eiffel_tower.longitude], units: :km )
  => 16963.864632076555
```

That's the basics for actually using the gem, if you want to see some more methods, try the [documentation](http://www.rubydoc.info/gems/rails-geocoder/0.9.11#Distance_and_Bearing).

#### Using Geocoder on rails

Firstly, you'll need to include the geocoder gem in your gemfile and run `bundle` to install it.
Now you have access to the Geocoder gem within your rails project.

This becomes extremely useful in cases where you want to get the latitude and longitude on something like a `Venue` model (google maps likes latitudes and longitudes over all else), but you only have something like a street address. They get even more powerful when you combine them with [ActiveRecord callbacks](https://apidock.com/rails/ActiveRecord/Callbacks).

To see this in action, within a rails app:

Database:
```rb
class CreateVenues < ActiveRecord::Migration[5.0]
  def change
    create_table :venues do |t|
      t.text :name
      t.text :address
      t.float :latitude
      t.float :longitude
      t.timestamps
    end
  end
end
```

A seed:
```rb
Venue.create({
  name: "Roslyn Packer Theatre",
  address: "22 Hickson rd, NSW"
})
```

If I create this model with just those values, I get something like this:
```rb
<Venue id: 1,
name: "Roslyn Packer Theatre",
address: "22 Hickson rd, NSW",
latitude: nil,
longitude: nil
>
```
Which is slightly annoying, if I want to get those latitudes and longitudes, I have to laboriously go out and search for them myself.

There must be a better way!


![Not the better way](http://i.imgur.com/3StofkT.gif)

Knowing we can easily search for an address within Geocoder, and we have that within our model already, ideally, once we create the model, pass that address to the Geocoder gem, and place those values back into the model.

That brings us to the [after validation](https://apidock.com/rails/ActiveRecord/Callbacks/after_validation) callback, which can be used to call the geocoder gem as soon as the model is saved to the database.

Changing the model file to call geocoder by the `address type`, it will automatically place the latitude and longitude values of that address into the model (if those table columns are present).
```rb
class Venue < ApplicationRecord
  geocoded_by :address
  after_validation :geocode
end
```
Running that same seed again, you will get a very different result:
```rb
<Venue id: 1,
name: "Roslyn Packer Theatre",
address: "22 Hickson rd, NSW",
latitude: -33.8572923,
longitude: 151.2046525
>
```

You can find more examples and documentation for the use of Geocoder on [their github repo](https://github.com/alexreisner/geocoder).