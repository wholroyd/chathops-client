# ChatHops Client
---

This is the client interface that users will experience on the web, desktop, or devices.

| Branch | Status |
| ------ | ------ |
| Master | ![Travis CI master branch build status](https://travis-ci.org/chathops/chathops-client.svg?branch=master) |
| Develop | ![Travis CI develop branch build status](https://travis-ci.org/chathops/chathops-client.svg?branch=develop) |


## Architecture

The client app will utilize Angular2 - which is not production ready just yet, but is really close. While Express is 
being used to serve up the app, it's only for the entry file (index.html), and it's only for server-side hosting. There 
is no guarantee that we would be able to get Express to reliably run locally on all desktops or phones. Keeping to 
client-only technology is explicitly required, unless it's being hosted elsewhere and being remotely accessed.

Given that there won't be a local server running for desktop or phone installations, it causes a problem for OAuth 
scenarios as we need a redirect URL when the app is registered for the various platforms. As a result, the 
[client-api](https://github.com/chathops/chathops-api) project will be used as our global endpoint to handle the 
handshake and pass back tokens to the client using SSL to the desktop or phone clients.

The extent of the server side components is limited to what was just mentioned. None of the user's credentials are 
stored off of their desktops or devices. We don't want to become a 'honeypot' and are not prepared to face those 
challenges at this time. Maybe in the future if there is enough demand for it, we can revisit this issue. All 
credentials are stored locally, that we generate from the desktop/device it's stored on (for local install scenarios) 
or from header/visitor extracted information (for hosted scenarios).

We intend to make this available in a few forms: hosted, desktop clients via Electron, and device clients via Cordova.

We intend to focus on all modern browsers like Chrome, Firefox, Opera, Edge, and IE (9+).

## Getting Started

The directory layout should be self-explanatory, however the entry point into it may not be very clear.

- `server-hosted.js` - This is used if you want to run the client on a web server, accessed through a browser.
- `server-client.js` - This is used if you want to run the client using the Electron shell.

The server-hosted.js file is not used when hosted on chathops.io because the index.js within src is loaded as a module 
by an upper level Express app that loads it as a child app. Neither of the files are used in development as we're using 
gulp-watch.

### Requirements...

> You may notice that use TSD for TypeScript definitions of libraries written in JavaScript (via the typings directory), but we won't call it until Angular2 and TypeScript 1.5 (final) are released because we have some local fixes that aren't available and would get overwrote by using the tool. We will also use Electron to ship the desktop clients (eventually), but it's not hooked up to Gulp yet at this point.

1. `npm install`
2. `npm install gulp -g`
3. `npm install bower -g`
4. `npm install electron-prebuilt -g`
5. `npm install electron-packager -g`
6. `npm install typescript -g`
7. `bower install`

#### To verify everything should be working...

- `node test`

To create development distribution...

- `gulp build.dev`

To create production distribution...

- `gulp build.prod`

To just keep an eye on everything while actively developing...

- `gulp`