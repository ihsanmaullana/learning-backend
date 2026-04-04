// Import chalk - package yang baru kita install
const chalk = require('chalk');

// Informasi tentang project ini
const projectInfo = {
  name: 'learning-backend',
  currentDay: 6,
  topic: 'npm and package.json',
  author: 'Ihsan Maulana'
};

// Tampilkan informasi dengan warna
console.log(chalk.green('=== Project Info ==='));
console.log(chalk.blue('Name:'), projectInfo.name);
console.log(chalk.blue('Day:'), projectInfo.currentDay);
console.log(chalk.blue('Topic:'), projectInfo.topic);
console.log(chalk.blue('Author:'), projectInfo.author);
console.log(chalk.yellow('npm is working correctly!'));
