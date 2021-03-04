
let h1 = document.getElementsByTagName("h1")[0];
let h2 = document.getElementsByTagName("h2")[0];

h1.onclick = maiuscula;
h2.onclick = maiuscula;



function maiuscula() {

        this.innerHTML = this.innerHTML.toUpperCase();
}


