Active Record Migrations

- Migrations will allow us to change things
- Deals with moving parts 
- Migration files are like the receipts of the transactions we make to our schema
- Pascal OR snake_case (pick one — consistency is KEY)

- $ rails generate migration {conventional and specific naming of what we are doing}
- $ rails g (shorthand for generate)

- keep that migration change strictly to what you are trying to modify (aka do not try to modify more than one thing in a migration file)
- add our changes inside of our new migration file
- we will then update our database 

- $ rails db:migrate

- DO NOT modify your migration files (they are sealed)
- DO NOT delete your migration files (after $ rails db:migrate they are now in our untouchable schema until another migration)

- "Birds migrate south for the winter, as we migrate things to update into our schema" - Nicole
- "Also keep your receipts ... aka migration files" - Nicole