
var i = 0;

function count() {
    i++;
    num.innerText = i;
}

var num = document.getElementById('btn2');
num.innerText = i;

var counter = document.getElementById('btn2');
counter.addEventListener('click', count);