function f(){
    console.log("teste");
    console.log(this);
}

function f1(){
    console.log("teste 1");
    console.log(this);
}

window.onload = function (){

    let h1 = document.getElementsByTagName ("h1")[0];

    h1.addEventListener("click", f1);
}