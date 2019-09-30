# Simple NodeJS app with TypeScript and Okta.

This project is a simple backend blog app build with NodeJS and TypeScript, and [Okta](https://developer.okta.com/) for the authentication, authorization and user account management.

[Blog related to the project](https://developer.okta.com/blog/2019/09/19/nodejs-typescript#bootstrap-the-nestjs-server)

### What you can do

This application demonstrates simple authentication, authorization, user account management and basic create/read actions. You can:

- Register a new user.
- Log in with a user.
- Get the information of a user.
- Fetch all the blog posts.
- Create a blog post (but only after successful login).
- Get the author (user) of a blog post.

### Dependencies for the NodeJS Typescript sample app

- NestJS to bootstrap the server
- Swagger to define the server docs
- Okta for user management and authentication
- NodeJS
- validate-class npm library for input validation
- nodemon to auto-restart the server on every change

Before you can run the project, make sure you create a `.env` file at the root of your project with the following:

```
OKTA_CLIENT_ID={yourClientId}
OKTA_CLIENT_SECRET={yourClientSecret}
OKTA_APP_TOKEN={yourAppToken}
OKTA_DOMAIN=https://{yourOktaDomain}
```

To achieve this, follow the [guidelines in the blog](https://developer.okta.com/blog/2019/09/19/nodejs-typescript#create-a-forever-free-okta-account-and-application), or just:

1. Create an [Okta Developer](https://developer.okta.com/signup/) account if you do not have one.
2. Go to Okta Dashboard > Applications > Add Application > Service > Next.
3. Name the application (eg: `the-blog-backend`), create it and copy the `client ID` and `client secret` into the `.env` file.
4. Create an API token for your application to communicate with Okta. Okta Dashboard > API > Tokens > Create Token. Copy the token value into the `.env` file.
5. Copy your Okta domain without the `-admin` part into the `.env` file. Your domain should look something like `dev-xxxxxx.okta.com`.

###### Install the dependencies

`npm install` or `yarn install`

###### Run the application:

By running `npm start` or `node server.js` your server should start on port 3000
To allow automatic restart, run it using `nodemon`
`npx nodemon server.js --ext ts`

After running the server, direct your browser to `http://localhost:3000`. An API console should open with the `Swagger` documentation console and all the operations available.

Have fun.
