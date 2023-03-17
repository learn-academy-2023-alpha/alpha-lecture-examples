# Active Record Associations

## Concepts
- has_many belongs_to relationship
- foreign key connects the two tables together or forms the association
- foreign key lives on the belongs_to table
- foreign key data is primary key of the table you are connecting to

## Setup

- rails new associations -d postgresql -T
- cd associations
- rails db:create
- rails g model Cohort name:string year:string
- rails db:migrate
- rails g model Student name:string cohort_id:integer
- rails db:migrate


## Create the Association in Rails
app/models/cohort.rb
```ruby
class Cohort < ApplicationRecord
  has_many :students
end

```

app/models/student.rb
```ruby
class Student < ApplicationRecord
  belongs_to :cohort
end

```

## Create some data
- Create some Cohort instances:

```ruby
Cohort.create(name:'Alpha', year:'2021')
Cohort.create(name:'Alpha', year:'2023')
Cohort.create(name:'Delta', year:'2022')
```

- Create some Student instances

```ruby
alpha21 = Cohort.find(1)
alpha21.students  # []
alpha21.students.create(name: 'Elyse')

Cohort.where(name: 'Delta')
delta = Cohort.find(3)
delta.students.create(name: 'Nicole')
delta.students.create(name: 'Gene')

alpha23 = Cohort.find(2)
alpha23.students.create(name: 'Aaron')
alpha23.students.create(name: 'Brandon')
alpha23.students.create(name: 'Dennis')
```