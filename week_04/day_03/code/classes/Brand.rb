class Brand
  attr_accessor :name, :products, :email

  def initialize(name, email)
    puts "The store now has a new brand"
    @name = name
    @email = email
    @products = []
  end

  def show_company_details
    p "Name: #{@name}. Email: #{@email}."
  end

  def add_product(name)
    @products.push(name)
  end

  def list_products
    puts "Here are all of our products:"
    @products.each do |product|
      puts product
    end
  end
end

mishaer = Brand.new("Mishaer", "mishaer@ga.co")
mishaer.show_company_details()
mishaer.add_product("Thobe")
mishaer.add_product("Bisht")
mishaer.list_products()
