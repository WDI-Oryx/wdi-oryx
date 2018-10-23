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
  def initialize
    puts "A user signed up"
  end

  def first_name=(name) # Setters
    @first_name = name
  end

  def first_name # Getters
    @first_name
  end

  def last_name=(name)
    @last_name = name
  end

  def last_name
    @last_name
  end

  def email=(new_email)
    @email = new_email
  end

  def email
    @email # Implicit return
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

binding.pry
