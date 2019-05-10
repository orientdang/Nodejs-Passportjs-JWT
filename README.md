# Nodejs-Passportjs-JWT
The user signs up and then logs in, after the user logs in, a JSON web token would be given to the user.

The user is expected to store this token locally.

This token is to be sent by the user when trying to access certain secure routes, once the token has been verified, the user is then allowed to access the route.

## Signup with an email and password
Send over these details through the `Body` of your request at `{{ your_url }}/auth/signup`. For example with `http://localhost:3000/auth/signup`
```json
{
	"email": "dang3@gmail.com",
	"password": "dang"
}
```

## Login with the credentials and get your token
Visit the `{{ your_url }}/auth/login` route, passing the email and password you used previously and then initiate the request.
Now you have your token

## Accessing a secure route
You will pass your token in a query parameter called `secret_token`, The token will be collected, verified and we'll be given access to the route if it's valid.

Example:

Access `http://localhost:3000/user/profile/?secret_token={{your_token}}`

Result: 
```json
{
    "message": "You made it to the secure route",
    "user": {
        "_id": "5cd5422768a7ca0434e922fe",
        "email": "dang3@gmail.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVjZDU0MjI3NjhhN2NhMDQzNGU5MjJmZSIsImVtYWlsIjoiZGFuZzNAZ21haWwuY29tIn0sImlhdCI6MTU1NzQ3OTk4MH0.yIpvG7cF_1xClHiCRJ4eXRoVkeGXnIrKP3eudi1Tnew"
}
```
