#! /usr/bin/env node
import inquirer from "inquirer";

// Declare constant "answers" and assign it to result of inquirer.prompt function:

const answers: {
  Sentence: string;
} = await inquirer.prompt({
  name: "Sentence",
  type: "input",
  message: "Enter your sentence to count words:",
});

const words = answers.Sentence.trim().split(" ");

// Print the array of words to console

console.log(words);

// print the word count of sentence to console

console.log(`Your sentence word count is ${words.length}.`);
