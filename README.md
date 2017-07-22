# react-translations-demo
Demonstrates how [react-translations](https://www.npmjs.com/package/react-translations) can be used in combination with [babel-extract-gettext](https://www.npmjs.com/package/babel-extract-gettext) to allow simple gettext style translations in React that work on client and the server (Express.JS)

## Demonstrations
* Gulp task for extraction of strings to a `PO`
* Gulp task for converting new/updated `PO` into `JSON` to be served to web clients
* Basic locale detection
* Client and server loading of strings
* The use of different APIs from `react-translations`

## Setup
```
npm run import-strings
npm run build
```

## Run
```
DEBUG=react-translations npm run start
```

## View
```
localhost:3000
```
