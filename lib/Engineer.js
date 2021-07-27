const inquirer = require("inquirer");
const menu = require("../index");
// const {
//   connectableObservableDescriptor,
// } = require("rxjs/internal/observable/ConnectableObservable");

const Employee = require("./Employee");

class Engineer extends Employee {
  constructor() {
    super();
    this.unique;
    this.role;
  }
  getRole() {
    this.role = "Engineer";
    this.getGitHub();
  }
  getGitHub() {
    inquirer
      .prompt({
        type: "input",
        message: "Enter Engineer's github account",
        name: "unique",
      })
      .then(({ unique }) => {
        this.unique = unique;
        menu.menu(this);
        //console.table(this);
      });
  }
}
// const bob = new Engineer();
// bob.getName();
module.exports = Engineer;
