# Chore Generator
### the world's first cutting edge technology to divide up the chores with your apartmentmates.

Disclaimer: Such claim is debatable.

### Getting started

Get [FB boilerplate](https://github.com/facebookincubator/create-react-app)

Just copy & paste this to your console at your `PROJECT DIRECTORY`

```bash
export PKG=eslint-config-airbnb;
npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
```

