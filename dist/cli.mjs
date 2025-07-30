#!/usr/bin/env node

// src/cli.ts
import { Command } from "commander";
import { resolve } from "path";
import degit from "degit";
var program = new Command();
program.name("dual-serve").description("Dual Serve is a CLI tool for create serverless project").version("1.0.0");
program.command("new <project-name>").description("Create project").action(async (projectName) => {
  const targetDir = resolve(process.cwd(), projectName);
  const repo = "Grids-and-Guides/Dual-Serve";
  console.log(`Creating project in ${targetDir}`);
  const emitter = degit(repo, { cache: false, force: true });
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
//# sourceMappingURL=cli.mjs.map