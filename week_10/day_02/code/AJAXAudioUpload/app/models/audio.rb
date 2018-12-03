class Audio < ApplicationRecord
  mount_uploader :file, AudioUploader
end
