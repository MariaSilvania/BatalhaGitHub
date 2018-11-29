var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var div = document.getElementById('demo');
        div.innerHTML = xhttp.responseText;
    }
};

xhttp.open("GET", "https://api.github.com/users/veronicagr", true);
xhttp.send();