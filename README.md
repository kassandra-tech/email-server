# Kassandra Email Server

Email router to send email messages for Kassandra.

## Setup

### Build
```
npm install
```

### Environment
An environment is needed for the application to work.

#### Local
Create a .env file at the project root

```
#.env
User="my_account@gmail.com"
Password="your_gmail_app_id"
FromAddress="my_account@gmail.com"

Port=4500
```
#### Cloud
Setup the environment variables in your cloud build environment.

### Run Server
```
npm start
```

## Usage
Clients can send emails using this server by submitting a post request.

Build the POST request with a body

```
        "from": "from@email.com",
        "name": "sender name",
        "subject": "email subject",
        "text": "email message",
        "html": "formatted html message"
```

Note: Since the purpose of this server is to respond to emails,
The email will be sent from the ```FromAddress``` from the environment, and the ```from``` address from the body will be used as the send address.

Note: If both ```text``` and ```html``` are sent in the body, the ```html``` will be used.

## Acknowledgements
[NodeMailer](https://nodemailer.com/about/) was used to do the heavy lifting to send emails.

[Tomer Ben Rachel](https://www.freecodecamp.org/news/use-nodemailer-to-send-emails-from-your-node-js-server/)'s post helped provide a good example for some of the code setup and the email auth with Gmail.