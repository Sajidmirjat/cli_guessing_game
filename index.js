#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = await inquirer.prompt([
    {
        name: "rndmNumber",
        type: "number",
        message: "Please type any random number to win a game here: "
    }
]);
if (randomNumber.rndmNumber === Math.floor(Math.random() * 5 + 1)) {
    console.log("Congratultion! you won this game.");
}
else {
    console.log("Alias!, game is over.");
}
