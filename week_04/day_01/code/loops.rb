# # i = 1

# # while i <= 5
# #   p "I: #{i}"
# #   i += 1
# # end

# # # Create a loop that goes from 5 down to 1
# # count = 5

# # while count > 0
# #   p "Count: #{count}"
# #   count -= 1
# # end

# # index = 1

# # until index == 6
# #   p "Index: #{index}"
# #   index += 1
# # end

# # for idx in 0..5
# #  p "Idx: #{idx}"
# # end

# # Iterators

# # 5.times do |i|
# #   puts "This ran for #{i}"
# # end

# # 5.downto(2) do |index|
# #   puts "In the downto loop, running for #{index}"
# # end

# # Write an iterative loop
# # That counts from 6 to 10
# # Base it on the downto loop

# # 6.upto(10) do |i|
# #   p i
# # end

# desired_letter = "c"

# puts "What letter do you choose?"
# user_choice = gets.chomp

# # `gets` waits for user input, and can store the value in a variable
# # The `gets` method will include the user hitting the enter key
# # The chomp method removes the new line in that string 

# p user_choice

# puts "What is your first name?"
# first_name = gets.chomp

# puts "What is your last name?"
# last_name = gets.chomp

# p "Your full name is: #{first_name} #{last_name}"


# # Prompt the user to type in their first name
# # Save what they type in as first_name
# # Prompt the user to type in their last name
# # Save what they type in as last_name
# # Print "Your full name is ______ ______"

# # while user_choice != desired_letter

# # end

# # While desired_letter is not equal to C
# # Keep getting the user to guess

desired_number = Random.rand(1..10)

puts "What number do you choose?"
guessed_number = gets.chomp.to_i

while guessed_number != desired_number
  puts "That's not it. What number do you choose?"
  guessed_number = gets.chomp.to_i
end

puts "You got it right!"