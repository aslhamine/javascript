

function calcMedia(n1, n2){
     return (this.notas[0] + this.notas[1])/2;
}

var aluno = {
            nome: "Amilton",   
            notas: [16, 18],

            media: calcMedia

}


var aluno1 = {
    nome: "Stela",   
    notas: [15, 20],

    media: calcMedia
}

console.log(aluno);
console.log(aluno.media());

console.log(aluno1);
console.log(aluno1.media());



