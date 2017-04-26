class CreateFollows < ActiveRecord::Migration
  def change
    create_table :follows do |t|
      t.integer :user_id, null: false
      t.references :followable, polymorphic: true, index: true

      t.timestamps
    end

    add_index :follows, [:user_id, :followable_id, :followable_type], unique: true
    add_index :follows, [:followable_id, :followable_type]
  end
end
