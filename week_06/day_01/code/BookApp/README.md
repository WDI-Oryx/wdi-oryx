# RESTful URLs Overview

| CRUD Action | Controller Method | HTTP Method | URL / Path        | Active Record                   |
| ----------- | ----------------- | ----------- | ----------------- | ------------------------------- |
| READ        | index             | GET         | /authors          | Author.all()                    |
|             | show              | GET         | /authors/:id      | Author.find_by(id: params[:id]) |
| CREATE      | new               | GET         | /authors/new      | Author.new()                    |
|             | create            | POST        | /authors          | Author.create(author_params)    |
| UPDATE      | edit              | GET         | /authors/:id/edit | Author.find_by(id: params[:id]) |
|             | update            | PUT / PATCH | /authors/:id      | author.update(author_params)    |
| DELETE      | destroy           | DELETE      | /authors/:id      | author.destroy()                |