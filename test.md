# Test task

Your task is to create a login page that moves onto a Dashboard Admin area, which cannot be accessed without being logged in.

## Code style

You should use the following in your code:
- Typescript (strict mode)
- React
- Redux

Other tools and libraries are free to choose.

## Page 1 - Sign In

![Sign In](https://i.imgur.com/DnBUcPE.jpg)

On this page you should have a form which on submit signs the user in. You can use a Social OAuth provider like Google or Github if you want, or use Firebase or any other way of authenticating you'd prefer.

Preferably the authentication should be handled with Json Web Tokens.

You can use any way to build the forms you'd like and style is free. The above is just a reference screenshot to "what the screen should include".

## Page 2 - Dashboard

![Dashboard](https://i.imgur.com/D9HhmmB.png)

The dashboard page should be secret and only accessible after authenticating. If user tries to enter the secret content, they should be redirected to authentication instead.

As a logged in user, we should be able to display his name, preferably read from the JWT.

You can style the page how you want, that is not important. The above is just a reference screenshot to "what the screen should include". 

This page should have some data that is fetched onto it from an external API.

## Page 3 - Settings

![Settings](https://i.imgur.com/fEY2De7.png)

The settings page should be secret and only accessible after authenticating. This is just a content page for routing done inside authenticated paths.

You can style the page how you want, that is not important. The above is just a reference screenshot to "what the screen should include". 

This page should have some data that is fetched onto it from an external API.

### Fetch data on load

To simulate a basic CRUD application, the dashboard should fetch some data after signing in / upon loading the page and display that data. You can use an open api like Github or something similar to fetch the data.
