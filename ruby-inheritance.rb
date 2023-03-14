# Ruby Inheritance

# Object-oriented programming (OOP): Everything in Ruby is an object
# Everything is an instance of a class

# class HboMax
#   attr_accessor :title, :run_time, :watched
#   def initialize(title, run_time)
#     @title = title 
#     @run_time = run_time 
#     @watched = false
#   end

#   def get_show_data
#     if @watched
#       "You have watched the show #{@title} which is #{@run_time} long."
#     else
#       "You have not watched the show #{@title} which is #{@run_time} long."
#     end
#   end
# end

# last_of_us = HboMax.new('The Last of Us', '50 min')
# p last_of_us
# #<HboMax:0x0000000120076bf8 @title="The Last of Us", @run_time="50 min", @watched=false>
# p last_of_us.get_show_data
# "You have not watched the show The Last of Us which is 50 min long."


# INHERITANCE: allows classes to have relationships with each other
# Superclass (parent class): common behaviors in a shared class
  # - has attributes that are common to all possible children
  # Super class passes info to the subclass

# Subclass (child class): has attributes specific to the child and NOT other children


# class StreamingApp
#   attr_accessor :title, :run_time, :consumed
#   def initialize(title, run_time)
#     @title = title 
#     @run_time = run_time 
#     @consumed = false
#   end

#   def get_media_data
#     if @consumed
#       "You have consumed the media #{@title} which is #{@run_time} long."
#     else
#       "You have not consumed the media #{@title} which is #{@run_time} long."
#     end
#   end

#   def consumed_media
#     @consumed = true
#   end
# end

# < StreamingApp is marking that we are inheriting from the parent class
# class YouTube < StreamingApp
#   # setting up parameters for BOTH parent class AND child class
#   # initialize invokes super() method
#   def initialize(title_parameter, run_time_parameter, creator_parameter)
#     # super() calls on the parent class' initialize method and borrows the params in the initialize method in parent class
#     super(title_parameter, run_time_parameter)
#     @creator = creator_parameter
#   end
# end

# ted_talks = YouTube.new('The New Developer', '30 minutes', 'Ted')
# p ted_talks
# #<YouTube:0x000000012a08e398 @title="The New Developer", @run_time="30 minutes", @consumed=false, @creator="Ted">
# p ted_talks.title
# # "The New Developer"
# p ted_talks.get_media_data
# # "You have not consumed the media The New Developer which is 30 minutes long."
# ted_talks.consumed_media
# p ted_talks.get_media_data
# # "You have consumed the media The New Developer which is 30 minutes long."

class StreamingApp
  attr_accessor :title, :run_time, :consumed
  def initialize(title, run_time)
    @title = title 
    @run_time = run_time 
    @consumed = false
  end

  def get_media_data
    if @consumed
      "You have consumed the media #{@title} which is #{@run_time} long."
    else
      "You have not consumed the media #{@title} which is #{@run_time} long."
    end
  end

  def consumed_media
    @consumed = true
  end
end


class Spotify < StreamingApp
  def initialize(title_parameter, run_time_parameter, artist_parameter, genre_parameter, album_parameter)
    super(title_parameter, run_time_parameter)
    @artist = artist_parameter
    @genre = genre_parameter
    @album = album_parameter
  end

  def get_spotify_info
    get_media_data + "This song is #{@genre} genre and was created by #{@artist} which is a part of the #{@album} album."
  end
end

double_up = Spotify.new('Double Up', '6 min and 1 second', 'Nipsey Hussel', 'Hip Hop', 'Victory Lap')
p double_up
#<Spotify:0x000000013a873d00 @title="Double Up", @run_time="6 min and 1 second", @consumed=false, @artist="Nipsey Hussel", @genre="Hip Hop", @album="Victory Lap">
p double_up.get_spotify_info 
# "You have not consumed the media Double Up which is 6 min and 1 second long.This song is Hip Hop genre and was created by Nipsey Hussel which is a part of the Victory Lap album."

# tangled = StreamingApp.new('Tangled', '1 hour 40 minutes')
# p tangled
# #<StreamingApp:0x000000012d8d95e0 @title="Tangled", @run_time="1 hour 40 minutes", @consumed=false>