class CreateParsedItems < ActiveRecord::Migration[5.0]
  def change
    create_table :parsed_items do |t|
      t.string  :tag_type
      t.text    :body
      t.integer :link_id

      t.timestamps(:null => false)
    end
  end
end
