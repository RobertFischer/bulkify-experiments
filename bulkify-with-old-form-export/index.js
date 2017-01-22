import bulk from "bulk-require";
import fromExportsDefaults from "./subdir/defaultExports.js";
const submodules = bulk(__dirname, ["./subdir/*.js"]);

console.info("Default export is the same as exports.default: " + (submodules.defaultExports.default === fromExportsDefaults));
console.dir(submodules);


