 let a = {
        nome: "Amilton",
        nota: 20
 }
 console.log(a);

//transformando um objecto em uma string
 let a1 = JSON.stringify(a);
 console.log(a1);

 // ter em conta a regra do uso das aspas simples e duplas
 let b = '{"nome": "Lhamine", "nota": 18}'
 console.log(b);

 // transformando a string em um objecto
 let b2 =  JSON.parse(b);
 console.log(b2);