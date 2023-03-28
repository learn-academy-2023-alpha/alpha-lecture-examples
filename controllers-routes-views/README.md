# Controllers, Routes, and Views

- Views: What a user can see
- Controllers: Coordinate the interaction between the user, the views and the model
- Routes: How the user gets somewhere where they can see something
- URL: Uniform Resource Locater

Route calls the controller method, that then pulls the correct data from our model. and displays the right view


## Controllers
- generate a controller with $ rails g controller Home

## Routes
- HTTP verb (get) / location / hash rocket / controller (Home) / method

## ERB Ruby syntax 
- <%= with equal sign is for what we want diplayed %>
- <% without with preform ruby logic to not be diplayed %>

## Views
- In alpha_cohort.html.erb :
  - we called the instance variable of @alpha holding the string "The amazing people of Alpha 2023" (wrapped in a header 2 tag for visual ease)
  - we also called on the instance variable of @students that holds our array of students which we then iterated through and returned each student in a list <li>