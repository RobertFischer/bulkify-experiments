Babelify and Bulkify Interactions
=================================

Okay, so there are issues when you run both Babelify and Bulkify.

When building, look for something like this line:
```
var sections = (0, _bulkRequire2.default)(__dirname, ['data/**/*.js', 'render/*.js']);
```
If you see that, the code is broke: that won't work in a browser for various reasons.
What that means is that the bulkify parser could not find the bulk require call that is
obscured in that mess, so it never did the importing.

Check out the `package.json` script for the four distinct ways to run this, and look
at the output. It's all either broken or an error...except....

TL;DR
========

You have to use the `babel-cli` and `browserify -t bulkify glob.js | babel`.
