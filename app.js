document.getElementById("button-ok").addEventListener("click", function () {
    event.preventDefault();

    var primeiroJogador = document.getElementById("input-jogador-1").value;
    var segundoJogador = document.getElementById("input-jogador-2").value;
    pegarUser1(primeiroJogador);
    pegarUser2(segundoJogador);
});

function pegarUser1(user) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
           var div = document.getElementById("jogador-1");
            div.innerHTML = xhttp.responseText;
            console.log(xhttp.responseText)
        }
    };
    xhttp.open("GET", `https://api.github.com/users/${user}`, true);
    xhttp.send();

}
function pegarUser2(user) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
           var div2 = document.getElementById("jogador-2");
            div2.innerHTML = xhttp.responseText;
            console.log(xhttp.responseText)
        }
    };
    xhttp.open("GET", `https://api.github.com/users/${user}`, true);
    xhttp.send();

}





