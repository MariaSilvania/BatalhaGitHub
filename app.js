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
            var div2 = document.getElementById("jogador-1");
            var obj = JSON.parse(xhttp.responseText);
            var tabela = document.createElement('table');   
           
            var td = document.createElement('td');   
            var td2 = document.createElement('td');   
            var td3 = document.createElement('td');
            var tr = document.createElement('tr');
            td.append("CRITÉRIOS");
            tr.append(td);
            td2.append("QTD");
            tr.append(td2);
            td3.append("TOTAL");
            tr.append(td3);
            tabela.append(tr);

            var td = document.createElement('td');   
            var td2 = document.createElement('td');  
            var td3 = document.createElement('td'); 
            var tr = document.createElement('tr');
            td.append("Repositories");
            tr.append(td);
            td2.append(obj.public_repos);
            tr.append(td2);
            td3.append("");
            tr.append(td2);
            tabela.append(tr);

            var td = document.createElement('td');   
            var td2 = document.createElement('td');   
            var td3 = document.createElement('td');   
            var tr = document.createElement('tr');
            td.append("Followers");
            tr.append(td);
            td2.append(obj.followers);
            tr.append(td2);
            td2.append(obj.followers);
            tr.append(td3);
            tabela.append(tr);

            var td = document.createElement('td');   
            var td4 = document.createElement('td');   
            var tr = document.createElement('tr');
            td.append("Following");
            tr.append(td);
            td4.append(obj.Following);
            tr.append(td4);
            tabela.append(tr);

            var td = document.createElement('td');   
            var td5 = document.createElement('td');   
            var tr = document.createElement('tr');
            td.append("STARS");
            tr.append(td);
            td5.append(obj.public_gists);
            tr.append(td5);
            tabela.append(tr);
            
            div2.append(tabela);
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
             var obj = JSON.parse(xhttp.responseText);
             var tabela = document.createElement('table');   
            
             var td = document.createElement('td');   
             var td2 = document.createElement('td');   
             var td3 = document.createElement('td');
             var tr = document.createElement('tr');
             td.append("CRITÉRIOS");
             tr.append(td);
             td2.append("QTD");
             tr.append(td2);
             td3.append("TOTAL");
             tr.append(td3);
             tabela.append(tr);

             var td = document.createElement('td');   
             var td2 = document.createElement('td');  
             var td3 = document.createElement('td'); 
             var tr = document.createElement('tr');
             td.append("Repositories");
             tr.append(td);
             td2.append(obj.public_repos);
             tr.append(td2);
             td3.append("");
             tr.append(td2);
             tabela.append(tr);

             var td = document.createElement('td');   
             var td2 = document.createElement('td');   
             var td3 = document.createElement('td');   
             var tr = document.createElement('tr');
             td.append("Followers");
             tr.append(td);
             td2.append(obj.followers);
             tr.append(td2);
             td2.append(obj.followers);
             tr.append(td3);
             tabela.append(tr);

             var td = document.createElement('td');   
             var td4 = document.createElement('td');   
             var tr = document.createElement('tr');
             td.append("Following");
             tr.append(td);
             td4.append(obj.Following);
             tr.append(td4);
             tabela.append(tr);

             var td = document.createElement('td');   
             var td5 = document.createElement('td');   
             var tr = document.createElement('tr');
             td.append("STARS");
             tr.append(td);
             td5.append(obj.public_gists);
             tr.append(td5);
             tabela.append(tr);
             
             div2.append(tabela);
         }
        
    };
    xhttp.open("GET", `https://api.github.com/users/${user}`, true);
    xhttp.send();

}





