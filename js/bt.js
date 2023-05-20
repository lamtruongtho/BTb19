
var arr = []
//thêm số
function addArr() {
    var newnum = document.getElementById("ip").value
    arr.push(Number(newnum))
    console.log(arr)
    document.getElementById('txtResult').innerHTML = arr
}
document.getElementById("btnResult").onclick = addArr

//tổng số dương
function sumPositiveNumbers() {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += Number(arr[i])
        }
    }
    document.getElementById('txtResult2').innerHTML = 'Tổng số dương: ' + sum
}
document.getElementById("btnResult2").onclick = sumPositiveNumbers

//đếm số dương
function countPositive() {
    var count = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++
        }
    }
    document.getElementById('txtResult3').innerHTML = 'Số dương: ' + count
}
document.getElementById("btnResult3").onclick = countPositive

//tìm số nhỏ nhất
function findSmallest() {
    var smallest = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
        }
    }
    document.getElementById('txtResult4').innerHTML = 'số nhỏ nhất: ' + smallest
}
document.getElementById("btnResult4").onclick = findSmallest

//tìm số dương nhỏ nhất
function findSmallestPositive() {
    var smallestp = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && arr[i] < smallestp) {
            smallestp = arr[i]
        }
    }
    document.getElementById('txtResult5').innerHTML = 'số dương nhỏ nhất: ' + smallestp
}
document.getElementById("btnResult5").onclick = findSmallestPositive

//sắp xếp tăng dần
function sort() {
    document.getElementById('txtResult6').innerHTML = 'Mảng sau khi sắp xếp: ' + arr.sort((a, b) => a - b)
}
document.getElementById("btnResult6").onclick = sort

//số nguyên tố
function isPrime(num) {
    if( num < 2) return false
    if( num >= 2) {
        for(i =2; i <= Math.sqrt(num) ; i++) {
            if(num % i == 0) return false 
        }
        return true
    }
}

//số nguyên tố đầu tiên
function findFirstPrime() {
    var firstPrime = 0
    for (var i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            firstPrime = arr[i]
            break
        }
    }
    document.getElementById('txtResult7').innerHTML = firstPrime
}
document.getElementById("btnResult7").onclick = findFirstPrime


function countInteger() {
    var count = 0
    for( var i = 0; i < arr.length; i++) {
        if(Number.isInteger(arr[i])) {
            count++
        } 
    }
    document.getElementById('txtResult8').innerHTML = count
}
document.getElementById("btnResult8").onclick = countInteger

function compare() {
    var pn = 0
    var nn = 0
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            pn++
        } else if(arr[i] < 0) {
            nn++
        }
    }
    if( pn > nn ) {
        document.getElementById('txtResult9').innerHTML = "Số dương > Số âm"
    } else if (pn < nn) {
        document.getElementById('txtResult9').innerHTML = "Số dương < Số âm"
    } else {
        document.getElementById('txtResult9').innerHTML = "Số dương = Số âm"
    }
}
document.getElementById("btnResult9").onclick = compare


function doicho() {
    var vitri1 = document.getElementById('vt1').value
    var vitri2 = document.getElementById('vt2').value
   arr[vitri1] += arr[vitri2]
   arr[vitri2] = arr[vitri1] - arr[vitri2]
   arr[vitri1] = arr[vitri1] - arr[vitri2]
   console.log(arr)
   document.getElementById('txtResult10').innerHTML = arr

}
document.getElementById("btnResult10").onclick = doicho
