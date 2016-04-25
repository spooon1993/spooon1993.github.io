// alert("script");


function degree() {
    var a = prompt("введите чилсло возводимое в степень");
    for (;a<0;) {
        alert("введите число больше нуля");
        var a = prompt("введите чилсло возводимое в степень");
    }

    var b = prompt("введите степень для числа");
    for (;b<0;) {
        alert("введите число больше нуля");
        var b = prompt("введите степень для числа");
    }

    var summ = Math.pow(a, b);
    console.log("summ = ", summ);
    alert("степень = "+(summ));
}

degree();
