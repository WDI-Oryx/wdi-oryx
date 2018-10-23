class User
  def everyone_can_do_this
    puts "Everyone!"
  end
end

class Admin < User
  def only_admins
    puts "This is just for Admins"
  end
end

a = Admin.new
a.only_admins()
a.everyone_can_do_this()

# Create an Author class
# It should have a method called `only_authors`
# - It should print out "This is just for Authors"
# It should also be able to call `everyone_can_do_this()`

class Author < User
  def only_authors
    puts "This is just for Authors"
  end
end

a = Author.new
a.only_authors()
a.everyone_can_do_this()
