# Intro to Databases

```ruby
class Student
  def initialize(name, cohort, year)
    @name = name
    @cohort = cohort
    @year = year
  end
end

Student.new('Elyse', 'Alpha', 2021)
Student.new('Nicole', 'Delta', 2022)
Student.new('Joel', 'Alpha', 2023)
```

- Databases is a place where we can store data
- Model: the class or structure of the data (defines the data)
- Columns define the rules of the table
- Rows define the instances in the table
- PRIMARY KEY: unique identifier for each instance in a table

# SQL
- General purpose languages: Javascript, Ruby
- Domain specific languages: Rpec, HTML, Postgres
POSTGRES: 
- domain specific language who's job is to talk to databases
- open source, object relational databased management system
- flavor of sql that is very OOP


`$ psql --version` - tells us what version psql we are using
`$ psql`
`$ \l` - lists all the databases on your local machine
To exit press q and exit


# Queries
Query: can either be a result for data results from your database or for action on the data, or for both

## SELECT
takes an argument of what column headers we want to return

## FROM
tells us what database to query from


```sql
SELECT *
FROM country
-- Selects all entries from country database

SELECT name, region, continent
FROM country
-- selects only name, region and continent columns

SELECT name, region, continent
FROM country
LIMIT 10
-- Limits the amount of instances returned

SELECT name, continent, population
FROM country
WHERE continent = 'North America'
-- Shows only instances that match the continent to North America

SELECT name, continent, population
FROM country
WHERE continent != 'North America'
-- Shows only instances that do not have the continent North America

SELECT name, continent, population
FROM country
WHERE population < 1000000
-- Shows only instances with population less that 1 million

SELECT name, continent, population
FROM country
WHERE population < 1e6
AND continent = 'North America'

SELECT name, continent, population
FROM country
WHERE population < 1e6
OR continent = 'North America'
```

## LIKE
- String match that looks for a variation of a string
- Wildcard operator (%) is used in conjunction with LIKE

```sql
SELECT name, continent, population
FROM country
WHERE continent LIKE '%America'
```

## ORDER BY

```sql
SELECT name, region, indepyear
FROM country
ORDER BY indepyear
LIMIT 10

SELECT name, region, indepyear
FROM country
ORDER BY indepyear DESC
LIMIT 10

SELECT name, region, indepyear
FROM country
WHERE indepyear IS NOT null
ORDER BY indepyear DESC
LIMIT 10
```

## AS
Creates an alias or temporary column header

```sql
SELECT name, surfacearea, population,
population / surfacearea AS population_density
FROM country
WHERE population != 0
```