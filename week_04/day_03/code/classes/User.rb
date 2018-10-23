class User
  attr_accessor :username, :first_name, :last_name, :email

  def initialize(username, first, last, email)
    puts "A new user signed up"
    @username = username
    @first_name = first
    @last_name = last
    @email = email
  end

  def show_profile
    puts "<h1>#{@first_name} #{@last_name}: #{@email}</h1>"
  end

  def print_full_name
    puts "#{@first_name} #{@last_name}"
    # e.g. puts "Moath Althawad"
  end

  def send_email
    puts "Sending an email to #{@email}"
  end
end

moath = User.new("MoMo", "Moath", "Althawad", "moath@ga.co")
moath.send_email()
moath.print_full_name()
moath.show_profile()

trevor = User.new("T-Rex", "Trevor", "Preston", "trev@ga.co")
trevor.send_email()
trevor.print_full_name()
trevor.show_profile()
# p moath
