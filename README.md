# How to run

You need to run two parts of the system to get a working dev environment.

This angular app with `npm start` will serve the app on port 4200.
then run `npm run be:serve` to start the backend server.

The server will store files to the local directory; 

WARNING... you should not be running Lethean Desktop while developing this... BAD things might happen, if you clone this repo... don't use default data locations for the live app...





```shell
npm install --legacy-peer-deps
npm run dev:setup
npm run dev
```

## Production Build

```shell
npm install --legacy-peer-deps
npm run build
```

## Documentation

```shell
npm install --legacy-peer-deps
npm run doc
npm run doc:serve
```
