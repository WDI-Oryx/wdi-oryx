require "sqlite3"
require "pry"

db = SQLite3::Database.new("database.db")

sql = "SELECT * FROM products"

products = db.execute(sql)

p products
