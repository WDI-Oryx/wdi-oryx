require 'pry'

if true
  puts "Yep, that makes sense"
end

if 42 > 13
  p "Maths seems to work"
end

name = "Gummo"

if name == "Groucho"
  p "Groucho is logged in"
elsif name == "Harpo"
  p "Harpo is logged in"
elsif name == "Gummo"
  p "Gummo is logged in"
else
  p "Someone else is logged in"
end

# Inline conditionals

p "42 is bigger" if 42 > 15

is_logged_in = true

if is_logged_in == true
  p "Here is your profile page"
else 
  p "You need to log in first"
end

p "You are logged in" if is_logged_in

explorer_name = "Jacques"

if explorer_name != "Jacques"
  p "That is a shame"
else
  p "Woohoo"
end

unless explorer_name == "Jacques"
  p "That is a shame. You aren't Jacques"
else
  p "Woohoo! You are Jacques!"
end

x = 5
y = 8

if x < y
  p "Y (#{y}) is a bigger number than X (#{x})"
else 
  p "X is bigger"
end

unless x > y
  p "Y (#{y}) is a bigger number than X (#{x})"
else 
  p "X is bigger"
end

# Case Statements

num_of_wheels = 1

case num_of_wheels
when 1
  p "Unicycle"
when 2
  p "Bike"
when 4
  p "Car"
else
  p "We aren't sure"
end

current_name = "Moath"

case current_name
when "Treva" then p "Lead Instructor"
when "Moath" then p "TA"
else
  p "Student"
end

hour = 8

case hour
when 0..12
  p "Good morning"
when 12..18
  p "Good afternoon"
else
  p "Good night"
end

# Have a variable called letter
# Use a case statement
# If the letter is in the range of a to e
  # Print out, it is early in the alphabet
# Else
  # Print out, it is later in the alphabet
binding.pry
letter = "a"
case letter
when "a".."e"
  p "It is early in the alphabet"
else 
  p "It is later in the alphabet"
end
