const inquirer = require("inquirer");
const menu = require("../index");
// const {
//   connectableObservableDescriptor,
// } = require("rxjs/internal/observable/ConnectableObservable");

const Employee = require("./Employee");

class Intern extends Employee {
  constructor() {
    super();
    this.unique;
    this.role;
  }

  getSchool() {
    inquirer
      .prompt({
        type: "input",
        message: "Enter Intern's School",
        name: "unique",
      })
      .then(({ unique }) => {
        this.unique = unique;

        menu.menu(this);
      });
  }
  getRole() {
    this.role = "intern";
    this.getSchool();
  }
}
// const bob = new Intern();
// bob.getName();
module.exports = Intern;
