const { exec } = require("child_process");
const path = require("path");

const path1 = [process.env["HOME"], ".yarn", "bin"].join("/");

exec("pwd", { cwd: path1 }, (_error, stdout, _stderr) => {
  console.log(stdout);
});

const path2 = [".", "node_modules"].join("/");

exec("pwd", { cwd: path.resolve(path2) }, (_error, stdout, _stderr) => {
  console.log(stdout);
});

const path3 = process.argv[2];

exec("pwd", { cwd: path.resolve(path3) }, (_error, stdout, _stderr) => {
  console.log(stdout);
});
