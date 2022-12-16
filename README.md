# Socket 14

Project: Event Emitters
Author: Zoe Gonzalez

This application utlizes the usage of having sockets rather than eventbased Emitters, it is very useful and modularizes the program. It is between

Production Deployment: https://api.render.com/deploy/srv-cebuj1arrk0506th8630?key=vAJlBvK2Nr8

Setup

env requirements
see .env.sample

PORT: 3001

DATABASE_URL=postgres://localhost:5432/Auth-Final

How to initalize application
'npm start'

'nodemon'

node ./driver/driverHandler.js

node ./vendor/vendor.js

'node server.js'

How to use your library
-nodemon for starting

-npm test for testing

Features / Routes
/ : automatically redirects you to the page.

/shoes all shoes

/shoes:id individual shoe association

/signin: allows user to sign into existing account

/signup: allows user to create an account

/users: lists users

/\* : If the page is not available then an error flag is thrown.

## Workflow

![WRRC](./WRRC-2.PNG)

![WRRC](./workflow.PNG)
