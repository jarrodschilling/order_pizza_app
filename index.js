#!/usr/bin/env node

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (question) => {
  return new Promise((resolve) => rl.question(question, resolve));
};

const main = async () => {
  console.log("Welcome to My CLI App!");

  let name = await askQuestion("What is your name? ");
  console.log(`Hello, ${name}!`);

  let age = await askQuestion("How old are you? ");
  console.log(`You are ${age} years old.`);

  rl.close();
};

main();
