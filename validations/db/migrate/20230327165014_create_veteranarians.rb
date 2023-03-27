class CreateVeteranarians < ActiveRecord::Migration[7.0]
  def change
    create_table :veteranarians do |t|
      t.string :name
      t.integer :patients

      t.timestamps
    end
  end
end
