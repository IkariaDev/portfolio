const fs = require('fs');
const path = require('path');

function checkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      checkDir(fullPath);
    } else if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.css')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const matches = content.match(/['"]\/assets\/[^'"]+['"]/g);
      if (matches) {
        console.log(`Found in ${file}:`, matches);
      }
    }
  }
}

checkDir(path.join(__dirname, 'src'));
