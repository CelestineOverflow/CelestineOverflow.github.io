function forward() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/update?state=0", true);
    xhr.send();
}

function backward() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/update?state=1", true);
    xhr.send();
}

function right() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/update?state=2", true);
    xhr.send();
}

function left() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/update?state=3", true);
    xhr.send();
}