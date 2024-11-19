const phrase = "JavaScript is fun!";

let counter = 0;

for (let i = 0; i < phrase.length; i++) {
    
    if (phrase[i] === 'a') {
        counter++; 
    }
}

console.log("A letra 'a' aparece", counter, "vezes na frase.");
