const { exec } = require("child_process");

const path = [
  process.env['HOME'],
  '.yarn',
  'bin'
].join('/');

exec('ls -al', { cwd: path }, (error, stdout, stderr) => {
  console.log(stdout);
});
