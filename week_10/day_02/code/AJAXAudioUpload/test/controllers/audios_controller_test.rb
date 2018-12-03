require 'test_helper'

class AudiosControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get audios_home_url
    assert_response :success
  end

end
