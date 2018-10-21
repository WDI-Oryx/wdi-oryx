def hello
  p "Hello"
end

hello()

def say_hello_to(name = "mate") # Default parameter
  p "Hello #{name}"
end

say_hello_to("Moath")
say_hello_to "Abdullah"
say_hello_to

def add(x = 0, y = 0)
  p "#{x} + #{y} = #{x + y}"
end

add(4, 5)
add(4)
add()

# Create a method called `add`
# It will receive two parameters
# X and Y
# The method will print out something like "3 plus 5 is 8"
# Make both parameters optional (by default they should be 0)
# 
# add(4, 5)
# add(4)
# add()

# Return Values in Ruby
# - Implicit return (the last line that runs, will be returned automatically)
# - As soon as Ruby sees a return statement, it will leave the method

def greeting(name)
  return "I'm feeling antisocial today."
  "Greetings, #{name}"
end

p greeting("Jane")

def multiply(x, y)
  return x * y
end

p multiply(6, 5)

# A multiply method that uses implicit returns

# p multiply(6, 5)
# => 30