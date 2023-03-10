# Ruby Classes and Objects 3/10/2023

# base structure
# class Hbo
# end

# p Hbo.new
#<Hbo:0x00000001058300f8>
# the_last_of_us = Hbo.new
# p the_last_of_us

# set data, setter methods
# @ - instance varibale
# class Hbo
#   def set_show_data(title, run_time)
#     @title = title
#     @run_time = run_time
#   end
# end

# the_last_of_us = Hbo.new
# the_last_of_us.set_show_data('The Last of Us', '45 min')
# p the_last_of_us
#<Hbo:0x000000013d0e7a48 @title="The Last of Us">
#<Hbo:0x000000011f076a78 @title="The Last of Us", @run_time="45 min">


# get data, getter methods
# class Hbo
#   def set_show_data(title, run_time)
#     @title = title
#     @run_time = run_time
#   end

#   def get_title
#     @title
#   end

#   def get_run_time
#     @run_time
#   end

#   def get_show_data
#     "The show #{@title} is #{@run_time} long."
#   end
# end

# the_last_of_us = Hbo.new
# the_last_of_us.set_show_data('The Last of Us', '45 min')
# # p the_last_of_us
# # p the_last_of_us.get_title
# # p the_last_of_us.get_run_time
# p the_last_of_us.get_show_data

# martin = Hbo.new
# martin.set_show_data('Martin', '20 min')
# p martin.get_show_data

# house_of_dragons = Hbo.new
# house_of_dragons.set_show_data('House of Dragons', '70 min')
# p house_of_dragons.get_show_data


# initialize method will run when .new is called
# class Hbo
#   def initialize(title, run_time)
#     @title = title
#     @run_time = run_time
#   end

#   def get_title
#     @title
#   end

#   def get_run_time
#     @run_time
#   end

#   def get_show_data
#     "The show #{@title} is #{@run_time} long."
#   end
# end

# the_last_of_us = Hbo.new('The Last of Us', '45 min')
# p the_last_of_us
# p the_last_of_us.get_show_data

# martin = Hbo.new('Martin', '20 min')
# p martin.get_show_data

# house_of_dragons = Hbo.new('House of Dragons', '70 min')
# p house_of_dragons.get_show_data

# adding default values and setter methods that update instance variables
# class Hbo
#   def initialize(title, run_time)
#     @title = title
#     @run_time = run_time
#     @watched = false
#   end

#   def get_title
#     @title
#   end

#   def get_run_time
#     @run_time
#   end

#   def we_watched_the_show
#     @watched = true
#   end

#   def get_show_data
#     if @watched
#       "You have watched the show #{@title} is #{@run_time} long."
#     else
#       "You have not watched the show #{@title} is #{@run_time} long."
#     end
#   end
# end

# the_last_of_us = Hbo.new('The Last of Us', '45 min')
# p the_last_of_us
# p the_last_of_us.get_show_data
# the_last_of_us.we_watched_the_show
# p the_last_of_us.get_show_data

# martin = Hbo.new('Martin', '20 min')
# # p martin.get_show_data

# house_of_dragons = Hbo.new('House of Dragons', '70 min')
# p house_of_dragons.get_show_data

# attr_accessor is a helper method that takes a symbol of the instance variables and creates getter and setter methods
class Hbo
  attr_accessor :title, :run_time, :watched
  def initialize(title, run_time)
    @title = title
    @run_time = run_time
    @watched = false
  end

  def get_show_data
    if @watched
      "You have watched the show #{@title} is #{@run_time} long."
    else
      "You have not watched the show #{@title} is #{@run_time} long."
    end
  end
end

the_last_of_us = Hbo.new('The Last of Us', '45 min')
p the_last_of_us.title
the_last_of_us.watched = true
p the_last_of_us.get_show_data
# the_last_of_us.we_watched_the_show
# p the_last_of_us.get_show_data

martin = Hbo.new('Martin', '20 min')
# p martin.get_show_data

house_of_dragons = Hbo.new('House of Dragons', '70 min')
# p house_of_dragons.get_show_data