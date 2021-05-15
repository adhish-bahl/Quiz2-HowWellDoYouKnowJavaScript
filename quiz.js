// IMPORTING LIBRARIES
var readlineSync = require("readline-sync");
const chalk = require('chalk');

// UNIVERSAL VARIABLES
var level = 1;
var points = 0;
var userName = readlineSync.question("Can I have your full name please? ");
var leaderBoard = [
  {
    name: "Bhomit",
    score: 46,
  },
  {
    name: "Ansh Jangir",
    score: 40,
  },
  {
    name: "Anushka Garg",
    score: 26,
  },
];

// POINTS AND LEVEL TALLY FUNCTION
function pandl(answer) {
  if(answer === 0 || answer === -1) {
    console.log(chalk`{redBright.bold Your answer is WRONG!}
You have {bold ${points} points}.
You are on {rgb(128, 128, 0).bold Level ${level}}.`);
  } else {
    switch(level) {
      case 1: points += 2;
      console.log(chalk`{rgb(128, 128, 0).bold Your answer is CORRECT!}
You have {bold ${points} points}`);
      if(points >= 6) {
        level++;
        console.log(chalk.rgb(128, 128, 0).bold("Congratulation, you have reached Level ", level));
        break;
      }
      console.log(chalk.rgb(128, 128, 0).bold("You are on Level ", level));
      break;
      
      case 2: points += 4;
      console.log(chalk`{rgb(128, 128, 0).bold Your answer is CORRECT!}
You have {bold ${points} points}.`);
      if(points >= 18) {
        level++;
        console.log(chalk.rgb(128, 128, 0).bold("Congratulation, you have reached Level ", level));
        break;
      }
      console.log(chalk.rgb(128, 128, 0).bold("You are on Level ", level));
      break;

      case 3: points += 6;
      console.log(chalk`{rgb(128, 128, 0).bold Your answer is CORRECT!}
You have {bold ${points} points}`);
      if(points >= 36) {
        level++;
        console.log(chalk.rgb(128, 128, 0).bold("Congratulation, you have reached Level ", level));
        break;
      }
      console.log(chalk.rgb(128, 128, 0).bold("You are on Level ", level));
      break;
      
      case 4: points+= 8;
      console.log(chalk`{rgb(128, 128, 0).bold Your answer is CORRECT!}
You have {bold ${points} points}.
You are on {rgb(128, 128, 0).bold Level ${level}}.`);
      break;
    }
  }
  console.log("--------------------------------------------");
}

// USER ANSWER CHECKING FUNCTION
function check(answer, userAnswer) {
  if(userAnswer === -1)
    pandl(-1);
  else if(userAnswer === answer)
    pandl(1);
  else if(userAnswer != answer)
    pandl(0);
}

// WELCOME NOTE 
console.log(chalk`
Hey {bold ${userName}}!
Let's get started with {bold "How Well Do You Know JavaS1cript!"}
I am a quiz, developed by Adhish Bahl.

--------------------------------------------
Let's look at the {bold rules of the game} first:
1. There are {bold 4 Levels} in the game.
2. Points for the correct answer depends on the level you are at:
   2.1{redBright  {bold +2} when you are at {bold Level 1}}
   2.2{rgb(255, 255, 0)  {bold +4} when you are at {bold Level 2}}
   2.3{rgb(255, 255, 0)  {bold +6} when you are at {bold Level 3}}
   2.4{rgb(128, 128, 0)  {bold +8} when you are at {bold Level 4}}
3. There are {bold 12 questions} in total.
4. You can score maximum of {bold 60 points}.
5. You will get to {bold Level 2} when you have {bold 6 points}.
6. You will get to {bold Level 3} when you have {bold 18 points}.
7. You will get to {bold Level 4} when you have {bold 36 points}.
8. All The Best!
--------------------------------------------`);

// QUESTION 1
console.log("\nJavaScript is a ___ -side programming language.");
var options = ['Client', 'Server', 'Both', 'None'],
index = readlineSync.keyInSelect(options);
check(0,index);

// QUESTION 2
if (readlineSync.keyInYN("\nIs the code below, correct \“if\” statement to execute certain code if \“x\” is equal to 2?\nif(x = 2)")) {
  pandl(0);
} else {
  pandl(1);
}

// QUESTION 3
console.log("\nWhich of the following statements will throw an error?");
var options = ['var fun = function bar( ){ }', 'var fun = function bar{ }', 'function fun( ){ }'],
index = readlineSync.keyInSelect(options);
check(1,index);


// QUESTION 4
if (readlineSync.keyInYN("\nWill code return FALSE for\nBoolean(3 < 7)")) {
  pandl(0);
} else {
  pandl(1);
}


// QUESTION 5
console.log("\nIf the value of x is 40, then what is the output of the following program?\n(x % 10 == 0)? console.log(\“Divisible by 10\”) : console.log(\“Not divisible by 10\”);");
var options = ['ReferenceError', 'Divisible by 10', 'Not divisible by 10', 'None of the above'],
index = readlineSync.keyInSelect(options);
check(1,index);

// QUESTION 6
console.log("\n______ tag is an extension to HTML that can enclose any number of JavaScript statements.");
var options = ['<HEAD>', ' <BODY>', '<SCRIPT>', '<TITLE>'],
index = readlineSync.keyInSelect(options);
check(2,index);


// QUESTION 7
if (readlineSync.keyInYN("\nJavascript is same as Java?")) {
  pandl(0);
} else {
  pandl(1);
}

// QUESTION 8
if (readlineSync.keyInYN("\n<script type=\"text/javascript\">\n\tx=4+\"4\";\n\tdocument.write(x);\n</script>\ngives 8?")) {
  pandl(0);
} else {
  pandl(1);
}

// QUESTION 9
if (readlineSync.keyInYN("\nJavaScript language is an assembly level language?")) {
  pandl(0);
} else {
  pandl(1);
}

// QUESTION 10
console.log("\nWhich of the following is not considered a JavaScript operator?");
var options = ['typeof', 'new', 'delete', 'this'],
index = readlineSync.keyInSelect(options);
check(3,index);

// QUESTION 11
if (readlineSync.keyInYN("\nIs it possible to nest functions in JavaScript?")) {
  pandl(1);
} else {
  pandl(0);
}

// QUESTION 12
console.log("\nWhich of the following type of variable takes precedence over other if names are same?");
var options = ['global variable', 'local variable', 'Both of the above.', 'None of the above.'],
index = readlineSync.keyInSelect(options);
check(1,index);

console.log(chalk` {rgb(128, 128, 0).bold \nCongratulation, your Final Points are  ${points}.}`);
var i = 0;
for(i = 2; i >= 0; i--)
{
  if(points > leaderBoard[i].score)
    continue;
  else
    break;
}

if(i === 1) {
  console.log(chalk.rgb(128, 128, 0).bold("\nYou have broke the third heighest record."));
  console.log(chalk.bold("Send a screenshot of your score to Adhish so that he can update in the code."));
  leaderBoard[2].name = userName;
  leaderBoard[2].score = points;
} else if(i === 0) {
  console.log(chalk.rgb(128, 128, 0).bold("\nYou have broke the second heighest record."));
  console.log(chalk.bold("Send a screenshot of your score to Adhish so that he can update in the code."));
  leaderBoard[2].name = leaderBoard[1].name;
  leaderBoard[2].score = leaderBoard[1].score;
  leaderBoard[1].name = userName;
  leaderBoard[1].score = points;
} else if(i === -1) {
  console.log(chalk.rgb(128, 128, 0).bold("\nYou have broke the heighest record."));
  console.log(chalk.bold("Send a screenshot of your score to Adhish so that he can update in the code."));
  leaderBoard[2].name = leaderBoard[1].name;
  leaderBoard[2].score = leaderBoard[1].score;
  leaderBoard[1].name = leaderBoard[0].name;
  leaderBoard[1].score = leaderBoard[0].score;
  leaderBoard[0].name = userName;
  leaderBoard[0].score = points;
} 

console.log(chalk` {bold \nLeader Board:}
{rgb(128, 128, 0).bold First Position : ${leaderBoard[0].name}\t  ${leaderBoard[0].score}}
{rgb(128, 128, 0).bold Second Position: ${leaderBoard[1].name}\t  ${leaderBoard[1].score}}
{rgb(128, 128, 0).bold Third Position : ${leaderBoard[2].name}\t  ${leaderBoard[2].score}}

{bold Thank you ${userName} for playing the game!}
--------------------------------------------`);

