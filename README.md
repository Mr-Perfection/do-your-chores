# Chore Generator
### the world's first cutting edge technology to divide up the chores with your apartment mates.

Disclaimer: Such claim is debatable.

### Getting started

Use [FB boilerplate](https://github.com/facebookincubator/create-react-app)

**You can follow this [link](https://groundberry.github.io/development/2017/06/11/create-react-app-linting-all-the-things.html) or continue to set up**

Copy & paste this to your console at your `PROJECT DIRECTORY`
Copy & paste `.eslintrc` at your `PROJECT DIRECTORY`

```bash
export PKG=eslint-config-airbnb;
npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"

$ node_modules/.bin/eslint --fix .
```


### Specifications
Now, let's think about what this application should do:
1. Set up authentication for your apartment mates so no one else can have access data.
2. Randomize chores (clean bathroom, clean kitchen, empty trash, etc) and assign these to apartment mates.
3. Send emails in the begining of the week and towards end of the week to remind them (optional)

### Tech stack
React: front-end library
Redux: middleware
Firebase: backend (noSQL) document based
Sparkpost or Sendgrid

### Implementation
Authentication will be handled by [Firebase Auth](https://firebase.google.com/docs/auth/). Save ton of time.

Database looks something like this:
chore/:id
  name: string
  weight: integer, by using this value, we can determine how hard or difficult this chore is.
  datetime: string

user/:id
  name: string
  missedChores: integer
  datetime: string
  chores: array of chores

How to get a random chore for each?
There are two ways.

1. Client side with Firebase (Baas):
  Retrieve a list of chores and shuffle them
  Push chore into each user.chores

2. Firebase Functions (Faas):
  Do the same thing as above but its business logic will be contained in stateless functions.

~~Second method would be ideal as a better, scalable microservice solution because Firebase Functions provides 
logging services that we can keep track of. Plus, you can integrate any other Google Cloud's services such as Cloud Pub/Sub into your
app with ease.~~

~~However, because only small amount of users will be using this website (in my case, 3 people), I decided to go with **first method: Client side with Firebase**.~~ 

I decided to go with second method since I will be triggering to send out randomized chores weekly using PubSub API from Google Appengine.



  



### Resources
https://devops.com/go-serverless-pros-cons/ tells you pros and cons about serverless