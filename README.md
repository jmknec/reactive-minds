# Project Title

Reactive Minds

## Overview

Reactive Minds is a platform where parents can learn about emotion dysregulation, find strategies for learning and practicing more effective self-regulation, as well as track what does and doesn't work so they can gain insights that will help their reactive child thrive throughout their development.

## Implementation

### Tech Stack

- React
- MySQL
- Express
- Client libraries:
  - react
  - react-router
  - axios
- Server libraries:
  - knex
  - axios
  - uuid
  - express
  - bcrypt for password hashing

### APIs

- No external APIs will be used. An API will be created for this project.

### Sitemap

- Home page
- Register
- Login
- List (global) strategies for self-regulation
- View details for a specific strategy
- View + update user's tracked strategies

### Auth

- JWT auth
  - Before adding auth, all API requests will be using a fake user with id 1
  - Added after core features have first been implemented
  - Store JWT in localStorage, remove when a user logs out
  - Add states for logged in showing different UI in places listed in mockups

## Install Locally

- Clone the repository and install node
- From a terminal window, change into the server sub-directory and run npm run dev
- From a separate terminal window, change into the client sub-directory and run npm run dev to
  start a local instance
