# Ruby Hashes

# Ruby Data Types
# - Integer
# - Floats
# - Strings
# - Boolean
# - Nil
# - Undefined
# - Symbol

# In Ruby a custom key:value pair is called a hash

# Key is a symbol
# Value is associated with the symbol and can be any data type in Ruby

my_pets = { cat1: "Tobey", cat2: "Nala", dog1: "Kodi", dog2: "Bruno" }
p my_pets # {:cat1=>"Tobey", :cat2=>"Nala", :dog1=>"Kodi", :dog2=>"Bruno"} 

people = Hash.new
p people # {}


#____________________________________
# CRUD - Create, Read, Update, Delete

# Read

  # return all of the data in the hash
  p my_pets

  # return a specific value in the hash
  p my_pets[:cat1] # "Tobey"


# Create

  # Creating a new hash for us to add information later into
  people = Hash.new
  p people # {}

# Update

  # We can add content into a hash
  my_pets[:hamster] = "Neo"
  p my_pets # {:cat1=>"Tobey", :cat2=>"Nala", :dog1=>"Kodi", :dog2=>"Bruno", :hamster=>"Neo"}

  # We can modify the value 
  my_pets[:dog1] = "Kodee"
  p my_pets # {:cat1=>"Tobey", :cat2=>"Nala", :dog1=>"Kodee", :dog2=>"Bruno", :hamster=>"Neo"}

  # We can modify the key name
  my_pets[:rodent]= my_pets.delete(:hamster)
  p my_pets # {:cat1=>"Tobey", :cat2=>"Nala", :dog1=>"Kodee", :dog2=>"Bruno", :rodent=>"Neo"}


# Delete

  # We can delete content
  my_pets.delete(:rodent)
  p my_pets # {:cat1=>"Tobey", :cat2=>"Nala", :dog1=>"Kodee", :dog2=>"Bruno"}


# my_pets = { cat: {cat1: "Tobey", cat2: "Nala"}, dog1: "Kodi", dog2: "Bruno" }
# p my_pets[:cat][:cat1] # "Tobey"


# ________________________
# Enumerables and Duck Typing

# - Enumerables are anything you can iterate over (one of the main modules)
# - Duck Typing - if it walks like a duck, and quacks like a duck, then you can call it a duck
# - Modules are a way of grouping things that have similar properties


# ________________________
# Each

bbq = {entree: 'duck', appetizer: 'deviled duck eggs', side1: 'duck wings', side2: 'duck fried legs', dessert: 'bread pudding'}

bbq.each do |key, value|
  p "#{value} is a #{key}."
end

# "duck is a entree."
# "deviled duck eggs is a appetizer."
# "duck wings is a side1."
# "duck fried legs is a side2."
# "bread pudding is a dessert."


# Map

def bbq_menu hash
  hash.map do |key, value|
    "#{value} is a #{key}."
  end
end

p bbq_menu(bbq) # ["duck is a entree.", "deviled duck eggs is a appetizer.", "duck wings is a side1.", "duck fried legs is a side2.", "bread pudding is a dessert."]
