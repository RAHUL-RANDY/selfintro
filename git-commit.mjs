import fs from 'fs';
import path from 'path';
import git from 'isomorphic-git';

async function main() {
  const dir = process.cwd();
  console.log('Initializing git repository in:', dir);

  // Initialize repo
  await git.init({ fs, dir });
  console.log('Initialized repository.');

  // Find all files to add
  const filesToAdd = [];
  function scan(current) {
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const entry of entries) {
      const relPath = path.relative(dir, path.join(current, entry.name));
      if (
        relPath.startsWith('node_modules') ||
        relPath.startsWith('dist') ||
        relPath.startsWith('.git') ||
        relPath.startsWith('.DS_Store')
      ) {
        continue;
      }
      if (entry.isDirectory()) {
        scan(path.join(current, entry.name));
      } else {
        filesToAdd.push(relPath);
      }
    }
  }

  scan(dir);
  console.log(`Found ${filesToAdd.length} files to stage.`);

  for (const filepath of filesToAdd) {
    await git.add({ fs, dir, filepath });
  }
  console.log('Staged files successfully.');

  const sha = await git.commit({
    fs,
    dir,
    message: 'feat: modern personal portfolio website for Rahul R',
    author: {
      name: 'Rahul R',
      email: 'rahul9486222506@gmail.com',
    },
  });

  console.log('Commit created successfully! SHA:', sha);
}

main().catch((err) => {
  console.error('Error in git operation:', err);
  process.exit(1);
});
