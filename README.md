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

ini mini miny mo...

### Glossary & My own Q&A
**[Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement.html):**  is like a live reload (monitors changes in the file system and reloads without annoying page refresh). 
Instead of full-page reload when you update your module (basically your code changes in components), the module is replaced LIVE.
Pros: No more annoying page refresh whenever there are changes in UI
Cons: Know what you are doing... There could be unexpected bugs.

**[WithRouter](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/withRouter.md)** will pass updated match, location, and history props to the wrapped component whenever it renders.




**Why use React-router-redux? Wht not use Redux and React-router?**

Answer from the dev team
> You're a smart person. You use Redux to manage your application state. You use React Router to do routing. All is good. But the two libraries don't coordinate. You want to do time travel with your application state, but React Router doesn't navigate between pages when you replay actions. It controls an important part of application state: the URL. This library helps you keep that bit of state in sync with your Redux store. We keep a copy of the current location hidden in state. When you rewind your application state with a tool like Redux DevTools, that state change is propagated to React Router so it can adjust the component tree accordingly. You can jump around in state, rewinding, replaying, and resetting as much as you'd like, and this library will ensure the two stay in sync at all times.


### References
https://devops.com/go-serverless-pros-cons/ tells you pros and cons about serverless
https://medium.com/@rajaraodv/step-by-step-guide-to-building-react-redux-apps-using-mocks-48ca0f47f9a
https://github.com/r-park/todo-react-redux
http://redux.js.org/docs/api/Store.html
https://github.com/reactjs/react-router-redux
https://www.youtube.com/watch?v=XCQ0ZSr-a2o Reselect tutorial
https://facebook.github.io/immutable-js/docs/#/Record Record in Immutable.js

