# react-translations-demo
Demonstrates how [react-translations](https://www.npmjs.com/package/react-translations) can be used in combination with [babel-extract-gettext](https://www.npmjs.com/package/babel-extract-gettext) to allow simple gettext style translations in React that work on client and the server (Express.JS)

<img width="418" alt="French Demo" src="https://user-images.githubusercontent.com/3498278/28494423-3aa2278e-6efc-11e7-9e4a-b4309566bb3a.png">


## Demonstrations
* Gulp task for extraction of strings to a `PO`
* Gulp task for converting updated `PO` into `JSON` to be served to web clients
* Basic locale detection
* Server loading of translations for serverside rendering
* Client rehydration of translations for clientside rendering
* The use of different APIs from `react-translations`

## Setup
```
npm install & npm run import-strings & npm run build
```

## Run
```
DEBUG=react-translations npm run start
```

## View
```
localhost:3000
```
