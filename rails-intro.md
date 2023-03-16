# Rails Intro

- Framework: dictates the flow of control
- Rails is a framework that uses Ruby
- Server side web application framework

## MVC
Model - The database layer

View - What the user sees

Controller - dictates what data is needed from model and sends to view

## Setup
`$ rails -v`

Create a new rails application:
`$ rails new rails-intro -d postgresql -T`

`$ cd rails-intro`

Create a database:
`$ rails db:create`

## Rails Tour
- Gemfile: consists of all the gems in a rails app
- MVC
  - app/controllers
  - app/models
  - app/views
- config/routes.rb: describes all the requests we will be using to get a view
- db: stands for database
- README

## Run Rails Server
`$ rails server`
OR 
`$ rails s`

To close server use CTRL + C

To drop development database:
`$ rails db:drop`

# Active Record Intro
- Active Record is an ORM (object relational mapping)
  - translating Ruby and SQL languages

- During development - databases only live on your machine
- Rails app - collection of folders and files that can be accessed on GitHub
- During production - Database will exist on a seperate server

## Model
The model class defines the structure of the database

To create a model:
- Generate will create files and folders the Rails way
- Model name must be in PascalCasing and singular
- Defined name columns and their datatype
`$ rails generate model Schedule day:string date:date event:string`

      create    db/migrate/20230316173853_create_schedules.rb
      create    app/models/schedule.rb

To implement the model, run:
`$ rails db:migrate`

### Schema
- Read only file
- Representation of our database

## Interacting with Data
To interact with data, we will use the rails console
`$ rails c`

```ruby
> Schedule.all
# Gets all instances from model

Schedule.create(day: 'Friday', date: '2023-03-17', event: 'Week 5 assessment')
 Schedule.create(day: 'Wednesday', date: '2023-03-22', event: 'Tech interviews'
)
Schedule.create(day: 'Wednesday', date: '2023-03-29', event: 'Office hours'
3.0.0 :005 >  )

```

## CRUD
Create: passing key value pairs
Read: 
  - .all returns all instance in the database as array
  - .first gives first instance in database
  - .second
  - .last
  - .find(1) returns an instance based on the primary key
  - .where(event: 'Office hours')
Update:
  - first create a variable and store the instance we want to change
```ruby
> office_hours = Schedule.find(3)
> office_hours.update(event: "AWESOME OFFICE HOURS!!")
```
Delete
```ruby
> assessment = Schedule.find(1)
> assement.destroy
```