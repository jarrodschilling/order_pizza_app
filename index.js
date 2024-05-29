#!/usr/bin/env node

import { program } from "commander";
import inquirer from "inquirer";

program.version("1.0.0").description("My CLI App");

const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "age",
    message: "How old are you?",
  },
];

program
  .command("ask")
  .description("Ask user details")
  .action(async () => {
    const answers = await inquirer.prompt(questions);

    console.log(`Hello, ${answers.name}!`);
    console.log(`You are ${answers.age} years old.`);
  });

program.parse(process.argv);
