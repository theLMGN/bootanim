# bootanim-js

This package is a simplified way of reading the description text file in Android boot animation zip files.

It requires 0 dependancies (except FS), and is simple to use

```js
const parser = require("bootanim")
parser.read("./bootanimation/desc.txt", function(err,data) { console.log(err,data)})
```

`desc.txt`, `.vscode` and `run.js` are only for debugging and can be safely removed.
