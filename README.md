# reactPortfolioBackend

Has the full CRUD

API feature:
-n- Create a form and store the submitted values using an external API: The Review page.

This backend is for the comment section of the reactPortfolio app.

Each functinality:
1. The user is able to create a comment on the comment section, using the input box (C)

The .post is when the user input their first comment. The comment should be stored, saved and visible to the user. 
 
2. When the user is making a comment change, the user will need to write the comment in the input box and then select the comment they want to add the changes to. (RU)

The .get function will grab a string/array from the database of the users _id, name, email, text, and date. (Not fully functional. The email and date is not set up yet but it's a work in progress)

The .put function will update the users comment, if the user rewrites their comment.

3.If the user wishes to no longer leave up the comment, the user is able to delete it. (D)

The .delete is to completely remove the comment. It should no longer be visible to the user neither stored.

The backend is grabbing from the MongoDB; mflix database



Express Backend Set-up
To Install

    Fork and clone https://git.generalassemb.ly/Interapt/project3-backend-starter
    cd into the app and npm install
    From the command line run createdb project3-backend-dev
    Run npm start.

Starter End Points

You have two starter endpoints:

    GET api/users

    POST api/users

    Your config/config/json is set-up to access the Heroku Postgres production database instance.

{
  "development": {
    "database": "project3-backend-dev",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres"
  }
}