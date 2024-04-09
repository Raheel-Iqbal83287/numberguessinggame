#! /usr/bin/env node
import inquirer from "inquirer";
const num = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "guess",
        type: "number",
        message: "Please guess a number from 1 to 6 : ",
    }
]);
if (answer.guess === num) {
    console.log("Congratulations! You guess the right number.");
}
else {
    console.log("Sorry! You have not guessed the number.");
}
