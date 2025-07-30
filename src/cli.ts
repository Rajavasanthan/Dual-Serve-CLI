import { Command } from 'commander';
import { resolve } from 'path';
import degit from 'degit';

const program = new Command();

program
  .name('dual-serve')
  .description('Dual Serve is a CLI tool for create serverless project')
  .version('1.0.0');

// Fixed command definition
program
  .command('new <project-name>')  // Define required argument
  .description('Create project')
  .action(async (projectName) => {  // Get project name from argument
    const targetDir = resolve(process.cwd(), projectName);
    const repo = 'Grids-and-Guides/Dual-Serve'; 

    console.log(`Creating project in ${targetDir}`);
    const emitter = degit(repo, { cache: false, force: true });

    try {
      await emitter.clone(targetDir);
      console.log('Project created!');
      console.log(`\nNext steps:\n  cd ${projectName}\n  npm install\n  npm run dev`);
    } catch (err) {
      console.error('Error cloning template:', err);
      process.exit(1);
    }
  });

program.parse(process.argv);