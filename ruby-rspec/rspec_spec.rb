require 'rspec'
# requiring the rspec tools
require_relative 'rspec.rb'
# requiring the file that has our code

describe 'Book' do
  it 'has to be real' do
    # to_not raise_error rspec checking if it exists
    expect {Book.new}.to_not raise_error
  end
  it 'has a title' do
    # testing title
    my_book = Book.new
    # creating a new instance to test
    my_book.title = 'The Outsiders'
    # example title
    expect(my_book.title).to be_a String
    # has to be string for this one
    expect(my_book.title).to eq 'The Outsiders'
    # to equal the title given on 15
  end

  it 'has an author' do
    my_book = Book.new
    expect(my_book.author).to eq 'anonymous'
    # initialized with an anonymous author
    expect(my_book.author).to be_a String
    outsiders = Book.new 'S.E Hinto'
    # updating our book to have an author
    expect(outsiders.author).to eq 'S.E Hinto'
  end

  it 'can relay the current page' do
    my_book = Book.new
    expect(my_book.page).to eq 1
    # expecting pages to start at 1
    expect(my_book.page).to be_a Integer
    # the pages will be an integer
  end

  it 'can read our books pages' do
    my_book = Book.new
    expect{my_book.read 10}.to change {my_book.page}.from(1).to(11)
    # expecting that the pages read were 10 and thus changing our page from 1 to 11
  end

end

# AAA's of TDD Rspec:
# Arrange : inputs / targets
# Act: actions / behaviors
# Assert: good-ness or bad-ness of the responses
# some tests won't use all of these

# Title : The Outsiders, Author : S. E. Hinto, and Pages
