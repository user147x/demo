var show = document.getElementById("show");
var calc = document.getElementById("calc");
calc.addEventListener('click', function(e) {
    var e = e || window.event;
    if (e.target.tagName == 'LI') {
        if (e.target.innerText == '=') {
            if (show.innerText == '') {
                show.innerText = '';
            } else {
                show.innerText = eval(show.innerText).toFixed(3);
                show.innerText = eval(show.innerText);
            }
        } else if (e.target.innerText == 'C') {
            show.innerText = '';
        } else {
            show.innerText += e.target.innerText;
        }
    }
})