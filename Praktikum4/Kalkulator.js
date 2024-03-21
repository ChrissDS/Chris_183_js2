
function dis(val) {
    document.getElementById("inputbil1").value += val
}

function solve() {
    let x = document.getElementById("inputbil1").value
    let y = eval(x)
    document.getElementById("inputbil1").value = y
}

function c() {
    document.getElementById("inputbil1").value = ""
}

document.onkeydown = function (e) {
    e = e || window.event;
    let charCode = e.keyCode || e.which;
    let charStr = String.fromCharCode(charCode);
    if (charCode === 13) {
        solve(); 
    } else if (!isNaN(charStr) || "+-*/.".indexOf(charStr) !== -1) {
        dis(charStr);
    }
};