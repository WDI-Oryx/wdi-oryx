# Data Types

# Strings

p "Hello"
p 'This is single quoted'
p 'He said \'Hi\''

result = 2 + 2
p "The result is #{result}"

first_name = "Jacques"
last_name = "Cousteau"
full_name = "#{first_name} #{last_name}"

p full_name

# Two options for creating strings
# - Concatenation (adding them together)
# - Interpolation (dynamic parts - substitution)

# String methods
# "".methods.sort

p "hello".upcase()
p "hello".downcase
p "hello".capitalize

# Figure out how to get an array of the characters in the string
p "hello".chars

# Figure out how to find out if a string is empty
p "hello".empty?

lowercase_string = "hello"

p lowercase_string.upcase
# p lowercase_string.upcase!

p lowercase_string

name = "Jacques"
first_letter = name[0]
p first_letter

# Numbers

p 0.1
p 42
p 124971240712
p 1_234_567
# Underscores are ignored in Ruby numbers!

# Arithmetic Operators

puts 4 + 4
puts 4 - 2
puts 4 * 8
puts 8 / 2
puts 9 % 2
puts 2 ** 3 # To the power of (exponent)

p 10 < 12
p 10 == 10 # Always use double equals in Ruby!
