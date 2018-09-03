# react-translations-demo
Demonstrates how [react-translations](https://www.npmjs.com/package/react-translations) and [babel-plugin-extract-text](https://www.npmjs.com/package/babel-plugin-extract-text) can be used to provide a complete and simple gettext style translation solution for React that works both on the client and the server.

<img width="544" alt="French Demo" src="https://user-images.githubusercontent.com/3498278/28496240-84144b26-6f34-11e7-9640-77e160469437.png">


## Demonstrations
*(react-translations)*
* The use of different APIs
* Server loading of translations for server rendering on boot
* Client rehydration of translations for client rendering
* Basic locale detection middleware
* Middleware that determines which translations to pass to client for rehydration

*(babel-plugin-extract-text)*
* Gulp task for extraction of strings to a `PO`
* Gulp task for converting a `PO` into `JSON` to be used with react-translations

## Quick Setup
```
yarn install & yarn run import & yarn run build
```

## Start Server
```
yarn start
```

## Extract
```
yarn run export
```

