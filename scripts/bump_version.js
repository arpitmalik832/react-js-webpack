/* eslint-disable no-console */
/**
 * This script is used to bump the version of the package and update the changelog.
 * It uses the `inquirer` package to prompt the user for the version bump type.
 * The `child_process` module is used to execute the necessary commands.
 * @file This file is saved as `scripts/bump_version.js`.
 */
import inquirer from 'inquirer';
import { execSync } from 'child_process';

const questions = [
  {
    type: 'list',
    name: 'versionType',
    message: 'Which version bump would you like to perform?',
    choices: ['patch', 'minor', 'major'],
  },
];

inquirer.prompt(questions).then(answers => {
  const { versionType } = answers;

  try {
    // Bump the version and update the changelog
    execSync(`npx release-it --${versionType}`, { stdio: 'inherit' });

    console.log('Version bumped and changelog updated successfully.');
  } catch (error) {
    console.error('Error during version bump:', error);
  }
});
