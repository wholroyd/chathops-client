# ChatHops Client
---

This is the client interface that users will experience on the web, desktop, or devices.

## Architecture

The client app will be using Ember, React, Angular, or jQuery UI - which has not been decided yet. While Express is 
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

- server-hosted.js - This is used if you want to run the client on a web server, accessed through a browser.
- server-client.js - This is used if you want to run the client using the Electron shell.

The server-hosted.js file is not used when hosted on chathops.io because the index.js within src is loaded as a module 
by an upper level Express app that loads it as a child app. Neither of the files are used in development as we're using 
gulp-watch.

To get everything running on your machine...

1. npm install
2. npm install gulp -g
3. npm install bower -g
4. npm install electron -g
5. npm install typescript -g
6. npm install tsd -g
7. bower install

To verify everything should be working...

1. gulp build
2. node test

To keep an eye on everything while developing...

- gulp