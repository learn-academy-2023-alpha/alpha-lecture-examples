# Ruby Intro

## Vocab
- Dynamic: You can create a variable and reassign the data type
- Interpreted: Read line by line and ran through a translator
- Open-source: Free and available to be modified by all developers
- Scripting: Makes evaluations and executes logical operations
- Object-oriented: Everything is an object
    The form is the ideal (class)
    The actual thing, implmentation of the form (object)

## Interactive Ruby
A sandbox place to run Ruby code
`$ irb`
To exit IRB
`$ exit`
Clear irb
`> ctrl + l`

## Ruby Data Types

### Integers
- Ruby numbers are integers - whole numbers
- Can perform mathmatical operations +, -, *, /, **, %

4+5 
=> 9 
5-3
=> 2 
6*4
=> 24 
6/2
=> 3 
3**2
=> 9 
4 % 2
=> 0

### Floats
- Partial numbers
- Floats must be introduced as a float to your program

4/3
 => 1 
4.0/3
 => 1.3333333333333333 
4/3.0
 => 1.3333333333333333

### Strings
- Collection of characters wrapped in quotes
- Use single quotes unless except when needing a single quote for punctuation

'Hey Alpha'
 => "Hey Alpha" 
"Hey y'all"
 => "Hey y'all" 

### Boolean
True
False

#### Relational Operators
7 < 9
 => true 
7 > 9
 => false 
5.0 <= 5
 => true 
6 >= 9
 => false 

#### Equality Operators
- Ruby does NOT support type coercion

3 == 3
 => true 
3 == '3'
 => false 

#### Negation
5 != 8
 => true

#### Logical Operators
'hi' == 'hi' && 6 > 4
 => true 
'hi' == 'hi' || 6 < 4
 => true 

### Nil
Ruby version of null

### Symbol
Unique key to a value

### Undefined

### Data Types have Classes
All data types have their own class

## Variables
- No declaration needed with var, let or const
- Casing convention for Ruby variables is snake_case

my_name = 'Elyse'
 => "Elyse" 
my_name
 => "Elyse" 
my_name = 7
 => 7 

## String Interpolation
- Double quotes and the # symbol

"Hey there, #{my_name}!"
 => "Hey there, Elyse!"

## Built-in Methods
- Ruby has a riduculous amount of built in methods!
- Chained to expressions using dot notation

    'Hey Alpha!'.length
    => 10 
    my_name.length
    => 5 
    my_name.upcase
    => "ELYSE" 
    my_name.capitalize
    => "Elyse" 
    my_name.reverse
    => "esylE"

- Some methods take arguments, best practice is to use parethesis for readiiblity
    my_name.delete'y'
    => "Else" 
    my_name.delete('y')
    => "Else" 

- Some Ruby methods take a ? as an argument.  Include must have a string as an argument
    my_name.include?('s')
    => true 
    my_name.include?('e' && 's' && 'y')
    => true 


- Check the Class of the data type
    3.class
    => Integer 
    4.0.class
    => Float 
    my_name.class
    => String 

- Modyfying the data type
    4.to_s
    => "4" 
    '9'.to_i
    => 9 

- Permanently modifying a variable
    num = 4
    => 4 
    num.to_s
    => "4" 
    num
    => 4 
    num = num.to_s
    => "4" 
    num
    => "4" 

** Almost all Ruby methods are not permanent, they are accessors **

- Turning an accessor into a mutator you can add the bang operator
    my_name.upcase
    => "ELYSE" 
    my_name
    => "Elyse" 
    my_name.upcase!
    => "ELYSE" 
    my_name
    => "ELYSE" 

## Arrays
my_nums = [2, 3, 4, 5, 6]
=> [2, 3, 4, 5, 6] 
my_nums.length
=> 5 
my_nums[2]
=> 4 
my_nums[-1]
=> 6 
my_nums.first
=> 2 
my_nums.last
=> 6 
my_nums.reverse
=> [6, 5, 4, 3, 2] 
my_nums
=> [2, 3, 4, 5, 6] 

- Can be chained together, but will execute in order
    my_nums.reverse.first
    => 6 

- Can mutate the variable using the bang operator
    my_nums.reverse!
    => [6, 5, 4, 3, 2] 
    my_nums
    => [6, 5, 4, 3, 2] 

- Mutators
    my_nums[4] = 9
    => 9 
    my_nums
    => [6, 5, 4, 3, 9] 

- Shovel Operator is a mutator that acts like push
    my_nums << 99
    => [6, 5, 4, 3, 9, 99] 
    my_nums << 99 << 30
    => [6, 5, 4, 3, 9, 99, 99, 30] 

# Running Ruby Files
Ruby files use .rb extension
To run a ruby file, type ruby filename