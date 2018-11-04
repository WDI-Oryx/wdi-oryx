Author.destroy_all

doug = Author.create(name: "Douglas Hofstadter", dob: "1945-02-15", location: "New York", description: "Just awesome", image: "")

james = Author.create(name: "James Joyce", dob: "1941-01-13", location: "Zurich", description: "Jimmyyyyy", image: "")

Book.destroy_all

geb = Book.create(title: "Godel, Escher and Bach", image: "", blurb: "The best", author_id: doug.id)

strange_loop = Book.create(title: "I am a strange loop", image: "", blurb: "The best", author_id: doug.id)

ulysses = Book.create(title: "Ulysses", image: "", blurb: "Pretty great", author_id: james.id)

Comment.destroy_all

ulysses.comments.create(name: "Rando", body: "This was fantastic! I didn't get arrested at the airport!")

geb.comments.create(name: "Someone else", body: "This blew my mind")
