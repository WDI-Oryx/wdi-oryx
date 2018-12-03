class AudioUploader < CarrierWave::Uploader::Base
  include Cloudinary::CarrierWave
end
