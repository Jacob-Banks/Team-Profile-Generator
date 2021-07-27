const Employee = require("./Employee");
const inquirer = require("inquirer");
const menu = require("../index");

class Manager extends Employee {
  constructor() {
    super();
    this.unique;
  }

  getOffice() {
    inquirer
      .prompt({
        type: "input",
        message: "Enter Managers's office",
        name: "unique",
      })
      .then(({ unique }) => {
        this.unique = unique;
        menu.menu(this);
        //console.table(this);
      });
  }
  getRole() {
    this.role = "Manager";
    this.getOffice();
  }
}
// const bob = new Engineer();
// bob.getName();
module.exports = Manager;
