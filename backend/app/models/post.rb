class Post < ApplicationRecord
  has_many :comments, dependent: :destroy

  validates_presence_of :title, :video_url, :artist, :description, :created_by
end
