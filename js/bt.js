
var arr = []

function addArr() {
    var newnum = document.getElementById("ip").value 
    arr.push(newnum)
    console.log(arr)
}
document.getElementById("btn").onclick = addArr
document.getElementById("txtResult").innerHTML = " " + addArr;
