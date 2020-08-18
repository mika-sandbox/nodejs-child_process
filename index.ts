const { exec } = require("child_process");
const path = require("path");

const pwd = (path): Promise<void> => {
  return new Promise((resolve) => {
    exec("pwd", { cwd: path }, (_error, stdout, _stderr) => {
      console.log(`stdout: ${stdout}`);
      resolve();
    });
  });
};

const path1 = [process.env["HOME"], ".yarn", "bin"].join("/");
const path2 = [".", "node_modules"].join("/");
const path3 = process.argv[2];
const path4 = [".."].join("/");

pwd(path1)
  .then(() => pwd(path2))
  .then(() => pwd(path3))
  .then(() => pwd(path4));
