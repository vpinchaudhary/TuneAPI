const fs = require('fs');
const { execSync } = require('child_process');

// Read configuration from build.config.json
const config = JSON.parse(fs.readFileSync('build.config.json', 'utf8'));

// Compile TypeScript files with tsc
console.log('Compiling TypeScript files...');
execSync('tsc');

// Bundle JavaScript files with esbuild
console.log('Bundling JavaScript files...');
config.bundle.forEach((fileName) => {
  execSync(`esbuild ${fileName} --bundle --allow-overwrite --outfile=${fileName}`);
});
