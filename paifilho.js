window.onload = function (){
    let div1 = document.getElementById("d1");
    let div2 = document.getElementById("d2");

    console.log(div1.children[0]);

    console.log(div2);
    
    let h11 = div1.children[0];
    console.log(h11);

    console.log(h11.parentElement);

    let h1 = document.getElementsByTagName("h1");

    for(let h of h1){
        console.log(h);

        h.addEventListener("click", qop);
    }

    function qop(e){
        let t = e.target;
        console.log(t);
    }
}
