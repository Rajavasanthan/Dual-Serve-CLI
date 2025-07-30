#!/usr/bin/env node
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/cli.ts
var import_commander = require("commander");
var import_path = require("path");
var import_degit = __toESM(require("degit"));
var program = new import_commander.Command();
program.name("dual-serve").description("Dual Serve is a CLI tool for create serverless project").version("1.0.0");
program.command("new <project-name>").description("Create project").action(async (projectName) => {
  const targetDir = (0, import_path.resolve)(process.cwd(), projectName);
  const repo = "Grids-and-Guides/Dual-Serve";
  console.log(`Creating project in ${targetDir}`);
  const emitter = (0, import_degit.default)(repo, { cache: false, force: true });
  try {
    await emitter.clone(targetDir);
    console.log("Project created!");
    console.log(`
Next steps:
  cd ${projectName}
  npm install
  npm run dev`);
  } catch (err) {
    console.error("Error cloning template:", err);
    process.exit(1);
  }
});
program.parse(process.argv);
//# sourceMappingURL=cli.js.map