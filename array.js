
var alunos = ["Amilton","Baptista","David","Eurix"];
var notasA = [15.0, 12.5, 11.0, 13.5];
var notasB = [20.0, 14.0, 5.5, 15.0];


//  var media = function (n1, n2){
//                 return (n1+n2)/2;
//             }

function media(n1, n2){
    return(n1+n2)/2;
}

for(var i = 0; i < alunos.length; i++){
    var notaFinal = media(notasA[i],notasB[i]);
    var n1 = notasA[i];
    var n2 = notasB[i]; 
    
    var situacao="";
    if(notaFinal>=14.5){
            situacao = "dispensado";
    }if (notaFinal < 14.5  &&notaFinal>=9.5) {
           situacao = "Admitido ao exame";
    }if(notaFinal < 9.5) {
           situacao = "Excluido";
        }
        

    console.log(alunos[i]+ " - "+ "Teste1 = " + n1 + " - " + "Teste2 = " + n2 + " - " + "Media = " + notaFinal + " - " + situacao)

   
}



for (var index in alunos){
    console.log(alunos[index]);
}








