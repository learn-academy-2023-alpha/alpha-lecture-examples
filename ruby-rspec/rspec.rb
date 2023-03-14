class Book
  attr_accessor :title, :author, :page

  def initialize author='anonymous'
    @title = title
    @author = author
    @page = 1
  end

  def read read_pages
    @page += read_pages
    # adding pages we have read
  end

end