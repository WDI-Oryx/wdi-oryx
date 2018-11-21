Post.destroy_all

p1 = Post.create(title: "My First Post", body: "Here is my data")
p2 = Post.create(title: "My Second Post", body: "Here is my data")
p3 = Post.create(title: "My Third Post", body: "Here is my data")

Comment.destroy_all

p1.comments.create(body: "This is my first comment")
p2.comments.create(body: "This is my second comment")
p3.comments.create(body: "This is my third comment")
