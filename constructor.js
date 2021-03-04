//  usando class && constructor  
//  usando class && constructor  
//  usando class && constructor  
//  usando class && constructor

class aluno {
    constructor(nome, n1, n2) {
        this.nome = nome;
        this.nota1 = n1;
        this.nota2 = n2;
        this.media = function () {
            return (this.nota1 + this.nota2) / 2;
        };
    }
}

    var a = new aluno("Amilton", 14, 19);
    var b = new aluno("Lhamine", 20, 19);
    

    console.log(a.nome +" - "+ a.media());
    console.log(b.nome+ " - "+ b.media());

