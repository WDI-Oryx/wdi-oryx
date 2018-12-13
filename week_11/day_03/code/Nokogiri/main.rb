require 'pry'
require 'nokogiri'
require 'open-uri'


base_url="https://www.orangepippin.com/varieties/apples/"

alphabet = ("A".."Z").to_a

index = Nokogiri::HTML( open( base_url ) )


puts "--------------------------------"
puts index.css('h1').first.text
puts "--------------------------------"


alphabet.each do | letter |

  index = Nokogiri::HTML( open( base_url + letter ) )

  apples = index.css('li .card .card-body')

  apples.each do |apple|
    puts apple.css('h2').first.text
  
    if ( !apple.css('img').empty? )
      image_path = apple.css('img').first["src"].sub('..', '')
      puts "https://www.orangepippin.com" + image_path
    end
    puts "--------------------------------"
  
  end

end





