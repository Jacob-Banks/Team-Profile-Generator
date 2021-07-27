const inquirer = require("inquirer");

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  async getName(job) {
    const { employeeName } = await inquirer.prompt({
      type: "input",
      message: `Enter ${job}'s FULL name`,
      name: "employeeName",
    });
    this.name = employeeName;
    this.getId(job);
  }
  async getId(job) {
    const { employeeId } = await inquirer.prompt({
      type: "input",
      message: `Enter ${job}'s ID`,
      name: "employeeId",
    });
    this.id = employeeId;
    this.getEmail(job);
  }
  async getEmail(job) {
    //User Email
    const { email: email_2 } = await inquirer.prompt({
      type: "input",
      message: `Enter ${job}'s email`,
      name: "email",
      validate: function (email_1) {
        let check = email_1.match(/\S+@\S+\.\S+/g);
        if (check) {
          return true;
        }

        return "Please enter a valid email.";
      },
    });
    this.email = email_2;
    this.getRole();
  }
}
//const bob = new Employee();
//bob.getName();
module.exports = Employee;
