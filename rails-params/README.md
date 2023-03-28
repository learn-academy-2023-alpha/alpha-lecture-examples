# Rails Params 3/28/2023

### Request-response cycle: http

- request: action and location
  - action: http verbs - get, put, patch, delete, post
  - location: url
- response: status code and payload
  - status code: 100, 200, 300, 400, 500
  - payload: html

### Params

- short for parameter
- hash that adds information to a url
- hash - Ruby data structure that is a collection of key value pairs

### Generating a Controller

- $ `rails g controller GitHubUserAccount`
- class names should be PascalCase and singular

```ruby
# hash
params = {username: 'Sarah'}
# extracting a key
params[:username]
```

url with a query string (params not required in the route): `http://localhost:3000/github_user?username=Chris`

In the terminal: `Parameters: {"username"=>"Chris"}`

### Requiring Params

By requiring the param in the route:
`get 'github_user/:username' => 'git_hub_user_account#github_user'`

I can just pass in the param value without the query:
`http://localhost:3000/github_user/Sarah`

### Multiple Params

Can pass as many params as needed.

In terminal: `Parameters: {"username"=>"Aaron", "logged_in"=>"false"}`

Params will always be strings!
