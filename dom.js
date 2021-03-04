

function cor(){
    let h1 = document.getElementsByTagName("h1")[0];
    h1.style.color = "red";
}

// function changeH1(){
//     let input = document.getElementById("texto");
//     let h1 = document.getElementsByTagName("h1")[0];
//     h1.innerHTML = input.value;
// }

function changeH1(i){
    let h1 = document.getElementsByTagName("h1")[0];
    h1.innerHTML = i.value;
}

function changeH2(i){
    let h2 = document.getElementsByTagName("h2")[0];
    h2.innerHTML = i.value;
}


function hideH1(){
    let h1 = document.getElementsByTagName("h1")[0];
    let div = document.getElementsByTagName("div")[0];

    h1.style.display = "none";

    div.innerHTML = "Show H1";

}

function onOver(elemento){
    elemento.style.backgroundColor = "red";

}

function onOut(elemento){
    elemento.style.backgroundColor = "#415a80";

}