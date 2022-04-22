/**
 * 1. Create a node server with 5 steps.
 * 1.1. create folder
 * 1.2. npm init
 * 1.3. npm i express cors mongodb
 * 1.4. script-dev: nodemon index.js
 * 1.6. use 5 steps to create a node server
 *
 * -------------
 * Create Atlas Account
 * -------------
 * 1. sign up, google
 * 2. create cluster
 * 3. create yser dbUser and password
 * 4. Network access --> ip address: allow all
 * 5. database > connect > code copy pase in index.js
 *
 * ------------
 * CRUD operation
 * ------------
 * 1. node mongodb CRUD > Fundamentals
 * 2. create async run function
 * ----------------------
 * Integrate sending data from client to server
 * -----------------------
 *1. Client side: create form
 2. on submit get form data and create user object
 3. on server: create user POST method to receive data on the backend 
 4. on client side: set fetch with POST, body
 5. Make sure you return a json from the POST API
 ----------------------------
 Load data to the client side
 ----------------------------
    1. create get API on the server
    2. create a query object
    3. collection.find(query)
    4. cursor.toArray()
    5.return the result
    6. from client useEffect and display like you have done before
------------------------------------
DELETE
------------------------------------

 */
