const Manager = require("../lib/Manager.js");

jest.mock("mockInquirer");

const { prompt, expectPrompts } = require("mockInquirer");
test(" manager instance with passed value", () => {
  const e = new Manager();
  expect(typeof e).toBe("object");
});
test("getOffice", async () => {
  // specify expected prompts and corresponding actions
  // before making the prompt
  expectPrompts([
    {
      message: "Enter Manager's office",
      input: "1a",
    },
  ]);

  // then just use inquirer as normal.
  // if a imported mdoule uses inquirer, it's also using the mocked version.
  const answers = await prompt([
    {
      name: "office",
      message: "Enter Manager's office",
      type: "input",
    },
  ]);

  expect(answers).toEqual({
    office: "1a",
  });
});
