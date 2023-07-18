class CreateShuls < ActiveRecord::Migration[6.1]
  def change
    create_table :shuls do |t|
      t.string :name
      t.string :movement

      t.timestamps
    end
  end
end
