let pessoas = ["Amilton","Stela","Frederico","Lhamine","Barrane"];

function sortear(){
    let h1 = document.getElementById("d");

    let nrpessoas = Math.floor
    (Math.random() * pessoas.length);
    
    h1.innerHTML = pessoas[nrpessoas];
}