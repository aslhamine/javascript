function criarAluno(nome, n1, n2){
    return{
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function(){
            return (this.nota1 + this.nota2)/2;
        }
    }
}
var turma = [
    criarAluno("Amilton", 17, 20),
    criarAluno("Stela", 19, 14),
    criarAluno("Frederico", 17, 14),
    criarAluno("Lhamine", 20, 20),
    criarAluno("Bila", 19, 20),
    criarAluno("Joana", 4, 14)
];
for(var index in turma){
    var aluno = turma[index];
    console.log(aluno.nome);
    console.log(aluno.media());
}

