const texto = "banana";

for (let i = 0; i < texto.length; i++) {
    console.log(texto[i]);
}


let contagemA = 0;
for (let i = 0; i < texto.length; i++) {
    if (texto[i] === 'a') {
        contagemA++;
    }
}

console.log("Quantidade de 'a':", contagemA);
