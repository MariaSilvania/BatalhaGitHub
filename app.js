function pegarUser(user) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(xhttp.responseText);
        }
    };

    xhttp.open("GET", `https://api.github.com/users/${user}`, true);
    xhttp.send();
    
}

document.getElementById("button-ok").addEventListener("click", function () {
    event.preventDefault();

    var primeiroJogador = document.getElementById("input-jogador-1").value;
    var segundoJogador = document.getElementById("input-jogador-2").value;

    function chamar(){
       pegarUser(primeiroJogador);
       pegarUser(segundoJogador);
    }
    chamar();
});





