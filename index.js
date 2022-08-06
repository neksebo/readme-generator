// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown = require("./utils/generateMarkdown");
const licenseBadge = require("./utils/licenseBadge").licenseBadge;

// TODO: Create an array of questions for user input
const questions = require("./utils/questions").questions;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a fun !1!ction to initialize app
const init = async () => {
  try {
    const answers = await inquirer.prompt(questions);
    answers.licenseBadge = licenseBadge(answers.license);
    let readMeData = generateMarkdown(answers);
    await writeFileAsync("created-README.md", readMeData);
  } catch (err) {
    throw err;
  }
};

// Function call to initialize app
init();
