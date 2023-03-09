# Ruby Blocks

# What is iteration?
# Process of repeating a code action until a condition is met
# look like loops — how does this look in Ruby?

# Iteration in Ruby looks like this! 
# while : 
    # - starting point
    # - an end point
    # - condition that starts true but eventually will be false

# EXAMPLE:

num = 1
while num <= 10
    p num
    num += 1
end

# Methods
# methods can take an anonymous function, which in Ruby are called BLOCKS
#  methods will be seen defined 2 ways: DO / END or { }
# if there is a 1 liner - curlies otherwise DO /END

5.times do
    # this will tell it how many 'times' to execute
    p 'Hello Alpha'
    # what will be returned
end

8.times { p 'Hello World'}
# example of curlies

num = 10
num.times do
    p 'Gene is awesome!'
end

# EACH
# iterator that takes an array — uses that as a start and end point
# pipes are for passing parameters | |

numbers = [3, 4, 5, 6, 7]
numbers.each do |value|
    p value
end

numbers = [3, 4, 5, 6, 7]
numbers.each do |value|
    p value * 5
end

# RANGES
# has a starting point
# is separated by 2 dots
# has an end point

1..10 
# # This is a range

first_range = 1..20
first_range.each do |value|
    p value
end

alphabet_range = 'a'..'h'
alphabet_range.each do |value|
    p value
end

p alphabet_range.to_a
# ["a", "b", "c", "d", "e", "f", "g", "h"]
# .to_a will convert to an array

# MAP
# another iterator that returns the array of the same length
# returns array

nums = 1..10
mapped = nums.map do |value|
    value * 2
end
p mapped
# [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

nums = 1..10
mapped = nums.map do |value|
    if value % 2 == 0
        'even'
    else
        value
    end
end
p mapped
# [1, "even", 3, "even", 5, "even", 7, "even", 9, "even"]

nums = 1..10
mapped = nums.map do |value|
    if value.even?
        'even'
    else
        value
    end
end
p mapped
# [1, "even", 3, "even", 5, "even", 7, "even", 9, "even"]

def even_or_odd array
    array.map do |value|
        if value.even?
            'even'
        else
            'odd'
        end
    end
end
p even_or_odd 1..10
# ["odd", "even", "odd", "even", "odd", "even", "odd", "even", "odd", "even"]

# SELECT
# iterator
# returns array
# CAN iterate on a range to return the array

def only_evens array
    array.select do |value|
        value.even?
    end
end
p only_evens(1..10)
# [2, 4, 6, 8, 10]

def only_evens array
    array.select.with_index do |value, index|
        # .with_index to return index of |passing index|
        value.even?
        index.even?
        # returning the index 
    end
end
p only_evens(1..10)
# [1, 3, 5, 7, 9]