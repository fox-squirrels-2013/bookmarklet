Ryan's Bookmarklet Example
==========================

Developing
----------

Install [http-server](https://github.com/nodeapps/http-server) with npm

    npm install http-server -g

Then run

    http-server

from this project's folder and visit http://localhost:8080/ in your browser.

If old versions of the javascript and css files are being cached by chrome you can tell it not to cache these while the developer tools are open by first opening the developer tools then clicking the little gear icon down the bottom right then clicking the checkbox next to "Disable cache".

Technically, you don't _need_ to run a local webserver to test the bookmarklet, you can just open index.html in chrome but if you run it this way you won't be able to test the bookmarklet on any other pages besides this project's index.html.
