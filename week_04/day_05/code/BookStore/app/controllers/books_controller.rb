# app/controllers/books_controller.rb

class BooksController < ApplicationController
  def index
    @books = [
      "In Search of Lost Time",
      "War and Peace",
      "Hamlet",
      "Anna Karenina",
      "Madame Bovary",
      "Don Quixote",
      "Ulysses",
      "The Odyssey",
    ]
  end

  def show
    @title = params[:title]
  end
end
