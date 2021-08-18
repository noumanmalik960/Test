Since there were no actuall API endpoint for 'login' so I used a fake one
to authenticate a user and to generate a valid JWT token. I used following two libraries for this:
1. [json-server](https://www.npmjs.com/package/json-server)
2. [json-server-auth](https://www.npmjs.com/package/json-server-auth)

To run the project, follow the following steps

 1. run ``` npm install ```
 2. move to /server directory in the root directory and run the following command to run the Mock server:
   ```
   json-server db.json -m ./node_modules/json-server-auth
   ```
 3. Run the project in android emulator
 4. That's it!