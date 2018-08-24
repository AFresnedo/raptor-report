# Auth Boilerplate: How to Use

## What Is It?

A template for each full stack app using express and auth to build the
scaffolding for authenticating and authorizing users. It is the pieces of code
that are common between all applications using these techonologies. Using it
means saving time when implementing these features because code is already
written and bug free.

## What It Includes

* sequelize model and migration for user model
* settings for postgresql
* passport and passport-local for authentication
* express sessions to keep user logged in from page to page
* connect-flash for error/success messages
* Bcrypt for hashing passwords

## Configuration

### User Model

| Column Name | SQL Type | Notes |
| ----------- | -------- | ------------------------------------ |
| id | Integer | serial primary key |
| createdAt | Date | automatically generated |
| updatedAt | Date | automatically generated |
| firstname | String | - |
| lastname |  String | - |
| email | String | usernameField for login |
| password | String | hashed with bcrypt |
| dob | Date | date of birth |
| admin | Boolean | privilege level flag |

> NOTE: Change these fields in both the model and migration files BEFORE
> running sequelize db:migrate (if you don't want them exactly as they are)

### Default Routes Supplied

| Method | Path | Purpose |
| ------ | -------------------- | ---------------------------------- |
| GET | / | Home Page |
| GET | /profile | Profile page (must be a logged in user) |
| GET | /auth/login | Login form page |
| POST | /auth/login | Login submission + Redirect to Profile|
| GET | /auth/signup | Signup Form Page |
| POST | /auth/signup | Signup Submission + Redirect to Profile |
| GET | /auth/logout | Logout + Redirect to Home |

### Controllers
#### Auth
* authentication and authorization
#### Profile
* show user info
#### index.js
* remaining routes
