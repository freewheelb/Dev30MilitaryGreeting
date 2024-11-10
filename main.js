// Military greeting exercise

let name = 'Rugen';
let rank = 'Captain';
let age = 19;

if (age < 18) {
    console.log('You are too young for the military!');
}

if (name === 'Rugen' && rank === 'Count') {
    console.log('My name is Inigo Montoya, you killed my father, prepare to die.')
}

if (rank = 'Captain') {
    console.log(`Aye Aye Captain ${name}`)
}

if (rank= 'Private' && age > 40) {
    console.log(`What have you been doing with your life, ${name}?`)
}

else console.log(`Hello, ${rank}' '{${name}, I cannot wait to celebrate your ${age +1}th birthday next year!`)




// If our recruit is less than 18, log, 'You are too young for the military!’.
// If our recruit’s name is ‘Rugen' and has a rank of ‘Count', log, ‘My name is Inigo Montoya, you killed my father, prepare to die’.
// If our recruit has the rank of “Captian”, log, "Aye Aye Captain <NAME>”.
// If our recruit has the rank of “Private” and is over 40, log, "What have you been doing with your life <NAME>?"
// For any other condition, log, 'Hello <RANK> <NAME>, I cannot wait to celebrate your <AGE + 1> th birthday next year!'
// Complete this on your own in VSCode or utilize repl.it in case you get stuck and want to share your code with an instructor via Slack.
