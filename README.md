## React Native / Redux / API Boilerplate

<div align="center">
<img align="center" src="https://raw.githubusercontent.com/sodascope/react-native-redux-api-boilerplate/master/screenshots/screen_one.png" width="350"/>
<img align="center" src="https://raw.githubusercontent.com/sodascope/react-native-redux-api-boilerplate/master/screenshots/screen_two.png" width="350"/>
</div>

This is a react-native boilerplate for a simple app with a TabBar, a Redux data store and external Api call via redux-api-middleware

#### Features
- Platform independent TabBar implementation
- React-native-router-flux as router implementation (using Scene instead of Route)
- redux-api-middleware for external api call
- now using fetch-everywhere for cross platform global fetch
- Using redux-logger for logging
- ES6 syntax throughout
- Code organized in simple directory structure

#### Installation
See React-Native [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) to install required tools.

```bash
$ yarn global add react-native-cli
$ yarn install
$ react-native run-ios
or
$ react-native run-android
```

#### Release Notes  
0.3.0:
- Android now tested
- No more adjustments on redux-api-middleware necessary

0.2.0:
- Android now tested (yet)
- Small adjustments to redux-api-middleware and isomorphic-fetch necessary
