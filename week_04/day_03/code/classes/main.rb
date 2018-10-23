require "pry"

# Creating Blueprints
class Person
  def initialize
    puts "A new person was born"
  end

  def change_name(new_name)
    @first_name = new_name
  end

  # Adding instance methods
  def speak(message)
    puts message
  end

  def eat
    puts "I am eating lunch"
  end
end

# Creating an Instance
p1 = Person.new

# Call instance methods
p1.speak("Hello there")
p1.eat()

# binding.pry

# When I create an instance:
# - I inherit all of the instance methods
# - The initialize method is run automatically

class BlogPost
  def initialize
    puts "A blog post was written"
  end

  def edit
    puts "This should edit the post"
  end

  def delete
    puts "This should delete the post"
  end
end

post = BlogPost.new

# post.edit()
# post.delete()

# binding.pry

# Create a new type of data called Blog Post
#
# Each instance should be able to be:
# - Edited (an edit method)
# - Deleted (a delete method)

# Any time a new Blog Post is created, print out "A new blog was written"

class User
  # Create a getter and a setter for @first_name
  # Create a getter and a setter for @last_name
  # Create a getter and a setter for @email
  attr_accessor :first_name, :last_name, :email

  def initialize
    puts "A user signed up"
  end
end

user = User.new # Inherits instance methods, runs initialize

# Keep track of the last name as well

user.first_name = "Jacques"
user.last_name = "Cousteau"
user.email = "jacques@ga.co"

hunter = User.new
hunter.first_name = "Hunter"
hunter.last_name = "Avenoir"
hunter.email = "hunter@ga.co"

# Book
# - title
# - author
# - read() -> Print out "You just read this book"

class Book
  attr_accessor :title, :author

  def initialize(title, author)
    @title = title
    @author = author
  end

  def read()
    puts "You just read #{@title}, by #{@author}"
  end
end

geb = Book.new("GEB", "Douglas Hofstadter")
# geb.title = "Godel, Escher and Bach"
# geb.author = "Douglas Hofstadter"
geb.read() # => "You just read this book"
