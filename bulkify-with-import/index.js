import bulk from "bulk-require";
const submodules = bulk(__dirname, ["./subdir/*.js"]);

console.dir(submodules);

