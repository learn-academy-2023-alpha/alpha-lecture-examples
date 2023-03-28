class HomeController < ApplicationController

  def greeter
    render html: 'Yo Alpha!'
  end

  def joke
    render html: 'Two SQL tables are sitting at a bar. A query walks in and asks, may I join you?'
  end

  def alpha_cohort
    @alpha = "The amazing people of Alpha 2023"
    @students = ["Xavier", "Joey", "Marilyn", "Brandon", "Eagle-Eye Mike", "Manny"]
  end

  def landing

  end

end
