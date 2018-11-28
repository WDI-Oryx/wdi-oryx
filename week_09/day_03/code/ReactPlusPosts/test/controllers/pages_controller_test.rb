require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get app" do
    get pages_app_url
    assert_response :success
  end

end
