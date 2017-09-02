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

