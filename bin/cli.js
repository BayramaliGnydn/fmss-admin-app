#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (error) {
    console.error(`Failed execute command: ${command}`, error);

    return false;
  }

  return true;
};

const repoName = process.argv[2];

const gitCheckoutCommand = `git clone --depth 1 https://github.com/BayramaliGnydn/fmss-admin-app.git ${repoName}`;
const installCommand = `cd ${repoName} && npm install`;

console.log("Cloning...");
const checkout = runCommand(gitCheckoutCommand);

if (!checkout) process.exit(-1);

console.log("Installing dependencies...");
const installDeps = runCommand(installCommand);

if (!installDeps) process.exit(-1);

console.log("Successfully installed");
