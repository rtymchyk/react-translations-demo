# react-translations-demo
Demonstrates how [react-translations](https://www.npmjs.com/package/react-translations) and [babel-extract-gettext](https://www.npmjs.com/package/babel-extract-gettext) can be used to provide a complete and simple gettext style translation solution for React that works both on the client and the server.

<img width="544" alt="French Demo" src="https://user-images.githubusercontent.com/3498278/28496240-84144b26-6f34-11e7-9640-77e160469437.png">


## Demonstrations
* Gulp task for extraction of strings to a `PO`
* Gulp task for converting updated `PO` into `JSON` to be served to web clients
* Basic locale detection middleware
* Middleware that determines what language of messages the client requires
* Server loading of translations for server rendering
* Client rehydration of translations for client rendering
* The use of different APIs from `react-translations`

## Setup
```
npm install & npm run import-strings & npm run build
```

## Run
```
DEBUG=react-translations npm start
```

## View
```
localhost:3000
```
