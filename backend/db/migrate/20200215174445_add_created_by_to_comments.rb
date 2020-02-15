class AddCreatedByToComments < ActiveRecord::Migration[6.0]
  def change
    add_column :comments, :created_by, :string
  end
end
