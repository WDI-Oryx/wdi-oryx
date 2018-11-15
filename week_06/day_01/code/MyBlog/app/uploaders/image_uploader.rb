class ImageUploader < CarrierWave::Uploader::Base
  include Cloudinary::CarrierWave
end
