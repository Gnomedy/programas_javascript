var readlineSync = require('readline-sync');
const frase = "Qual a sua idade? "

let suaIdade = parseInt(readlineSync.question(frase));

const isOldEnough = suaIdade >= 18;

if (isOldEnough) {
    console.log(`Você pode tirar sua CNH!`);
} else {
    console.log(`Você não pode tirar sua CNH ainda.`);
}