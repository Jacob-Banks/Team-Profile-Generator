const inquirer = require("inquirer");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const generatePage = require("./src/page-template");
const fs = require("fs");

const team = [];

// writing files
const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};

function menu(person) {
  team.push(person);
  inquirer
    .prompt({
      type: "list",
      message: "What would you like to do?",
      name: "menu",
      choices: ["add Engineer", "add intern", "generate html"],
    })
    .then(({ menu }) => {
      if (menu === "add intern") {
        let a = new Intern();
        a.getName("Intern");
      }
      if (menu === "add Engineer") {
        let a = new Engineer();
        a.getName("Engineer");
      }
      if (menu === "generate html") {
        console.table(team);
        writeFile(generatePage(team));
      }
    });
}

const manager = new Manager();
manager.getName("Manager");

exports.menu = menu;
