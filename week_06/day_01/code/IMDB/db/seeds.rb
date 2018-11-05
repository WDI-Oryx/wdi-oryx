Movie.destroy_all

groundhog_day = Movie.create(title: "Groundhog Day", year: "1993", description: "A pretty awesome movie, a pretty awesome movie, a pretty awesome movie")

Actor.destroy_all

bill = Actor.create(name: "Bill Murray", dob: "1950-09-21", bio: "Just the best")
hugh = Actor.create(name: "Hugh Jackman", dob: "1950-09-21", bio: "Just the best")
leonardo = Actor.create(name: "Leonardo DiCaprio", dob: "1950-09-21", bio: "Just the best")

bill.movies << groundhog_day
