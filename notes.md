# setup
* express app
    * see other notes
* create routes for
    * login
    * sign up
    * profile
    * home
* create users db
    * table
    * model with data validation
* sessions
* login authentication
* model validations
* flash messages for errors
* hash password
* setup passport

# routes
* method path ( purpose )
---
* get / (home)
* get /login (form for logging in)
* post /login (authenticate user)
* get /auth/signup (form for creating user, prevent duplicate)
* get /auth/logout (end session)
* get /profile (show user's personal page, any logged in user)
