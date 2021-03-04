function mudarTexto(){
    let h = document.getElementsByTagName("h1")[0];

    h.innerHTML = "Novo titulo";

    // setTimeout( mudarCor, 2000);

    setInterval( mudarCor, 2000);



}

function mudarCor(){
    let h = document.getElementsByTagName("h1")[0];

    h.style.color = "red";
}