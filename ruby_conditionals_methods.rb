# Ruby Conditional and Methods

# Ruby has methods the way that JavaScript has functions
# Every def needs an end
# def is the keyword in Ruby to initialize a method
# end is the keyword in Ruby to let us know where it ends

def greeter
    'Hello World'
end
# p greeter - "Hello World"

def greeter name
    "Hello #{name}"
end
# p greeter wrong number of arguments (given 0, expected 1) (ArgumentError)
# p greeter "Nicole" -> "Hello Nicole"

def multiplier (num1, num2)
    num1 * num2
end

# p multiplier(10, 5) -> 50
# p multiplier(4,5) -> 20
# p multiplier(7, 12) -> 84

def greater (num1, num2) 
    if num1 > num2
        "#{num1} is greater"
    elsif num2 > num1
        "#{num2} is greater"
    else
        "#{num1} and #{num2} are equal!"
    end
end

# p greater(8, 12)
# p greater(16, 24)
# p greater(11, 11)
# p greater(6.14, 3.28)
# "12 is greater"
# "24 is greater"
# "11 and 11 are equal!"
# "6.14 is greater"

# collecting user inputs from terminal — gets method
# can be stored and reused

# gets
# gets by itself will still listen for user input but will not be able to do anything with it afterwards IF NOT stored in a variable


my_pet_name = gets
# here is where it is storing our users input
# here it is listening
p my_pet_name 
# here is where it invocaked that storage of pet_name
# here it is returning

# p "What is your siblings name?"
your_siblings_name = gets.chomp
p "Thank you for being AWESOME #{your_siblings_name} !"
# "What is your name?"
# Cornelio
# "Thank you for being AWESOME Cornelio !"

p "Please enter your name:"
# # Let's us know what to input
my_name = gets.chomp
# # Store our users input
if my_name == 'Elyse'
    p "EVERYTHING IS AWESOME #{my_name}!"
else
    p "Welcome to the party #{my_name}"
end
## conditional logic based on that stored users input

p 'Please enter your name:'
user_name = gets.chomp
p 'Please also enter your age:'
user_age = gets.chomp.to_i
# .to_i takes the given string user input and converts it to an integer

def vote_or_no_vote (name, age)
    if age >= 18
        "#{name}, why yes indeed at the age of #{age} you can vote!"
        # string interpolates the given name and given age
    else
        "So sorry #{name}, but #{age} is NOT old enough to vote. Womp womp womp"
    end
end

p vote_or_no_vote(user_name, user_age)
