import inquirer from 'inquirer';
const systemGeneratedNum = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([{
        type: "number",
        name: "userGuess",
        message: "GUESS A NUMBER betwwen 1 to 10 AND WRITE THE NUMBER YOU HAVE GUESSED: "
    }]);
console.log(answers.userGuess);
const { userGuess } = answers;
console.log(userGuess, "Your Guess:", systemGeneratedNum, "the number in game:");
if (userGuess === systemGeneratedNum) {
    console.log("YES, YOU HAVE GUESSED THE CORRECT NUMBER.");
}
else {
    console.log("BETTER LUCK NEXT TIME!");
}
