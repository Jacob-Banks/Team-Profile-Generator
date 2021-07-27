const Employee = require("../lib/Employee");
jest.mock("mockInquirer");

const { prompt, expectPrompts } = require("mockInquirer");

test("getName", async () => {
  // specify expected prompts and corresponding actions
  // before making the prompt
  expectPrompts([
    {
      message: "Enter employee name",
      input: "Frank",
    },
  ]);

  // then just use inquirer as normal.
  // if a imported mdoule uses inquirer, it's also using the mocked version.
  const answers = await prompt([
    {
      name: "employeeName",
      message: "Enter employee name",
      type: "input",
    },
  ]);

  expect(answers).toEqual({
    employeeName: "Frank",
  });
});

test("getId", async () => {
  // specify expected prompts and corresponding actions
  // before making the prompt
  expectPrompts([
    {
      message: "Enter employee id",
      input: "2001",
    },
  ]);

  // then just use inquirer as normal.
  // if a imported mdoule uses inquirer, it's also using the mocked version.
  const answers = await prompt([
    {
      name: "id",
      message: "Enter employee id",
      type: "input",
    },
  ]);

  expect(answers).toEqual({
    id: "2001",
  });
});

test("getEmail", async () => {
  // specify expected prompts and corresponding actions
  // before making the prompt
  expectPrompts([
    {
      message: "Enter employee email",
      input: "Frank@test.com",
    },
  ]);

  // then just use inquirer as normal.
  // if a imported mdoule uses inquirer, it's also using the mocked version.
  const answers = await prompt([
    {
      name: "email",
      message: "Enter employee email",
      type: "input",
    },
  ]);

  expect(answers).toEqual({
    email: "Frank@test.com",
  });
});

test(" Employee instance with passed value", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});

test("Can set name with arguments", () => {
  const name = "Frank";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id with passed argument", () => {
  const testValue = 1;
  const e = new Employee("frank", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set with passed argument", () => {
  const testValue = "frank@test.com";
  const e = new Employee("frank", 1, testValue);
  expect(e.email).toBe(testValue);
});
