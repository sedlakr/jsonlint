//build script, must be called from root of project  node ./scripts/build.js
const childProcess = require('child_process');
const fs = require('fs');

// build
childProcess.execSync("node node_modules/jison/lib/cli.js src/jsonlint.y src/jsonlint.l");
// move to lib
fs.renameSync("jsonlint.js", "lib/jsonlint.js");
//bundle
// childProcess.execSync("node scripts/bundle.js");

