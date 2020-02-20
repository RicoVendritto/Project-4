class Favourite < ApplicationRecord
  validates_presence_of :created_by
  validates_presence_of :favourites
end
