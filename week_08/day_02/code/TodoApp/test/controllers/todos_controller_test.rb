require 'test_helper'

class TodosControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get todos_index_url
    assert_response :success
  end

  test "should get show" do
    get todos_show_url
    assert_response :success
  end

  test "should get new" do
    get todos_new_url
    assert_response :success
  end

  test "should get edit" do
    get todos_edit_url
    assert_response :success
  end

end
