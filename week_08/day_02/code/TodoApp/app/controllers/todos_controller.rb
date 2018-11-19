class TodosController < ApplicationController
  skip_before_action :verify_authenticity_token
  # 422 Unprocessable Entity - add this line ^

  # GET /todos => [{}, {}, {}]
  def index
    @todos = Todo.all
    render json: @todos
  end

  # GET /todos/:id => {}
  def show
    @todo = Todo.find_by(id: params[:id])
    render json: @todo
    # Can you please turn @todo into JSON
    # Can you send the JSON form to the browser
    #   In those little packets...
  end

  def new
  end

  def create
    # input (JS) ->
    # const params (JS) ->
    # JSON.stringify (JS) ->
    # "Content-Type" (JS) ->
    # the body will be added to params in Ruby (Ruby)
    # params["content"] (Ruby)
    todo = Todo.create(content: params["content"])
    render json: todo
  end

  def edit
  end

  def toggle
    todo = Todo.find_by id: params[:id]
    todo.completed = !todo.completed
    todo.save
    render json: todo
  end
end
