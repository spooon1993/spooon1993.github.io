// alert("script");

var arr = [];

for (var i=0;i<5;i++) {
    arr.push(prompt("введите имя пользователей"));
}
console.log("arr ", arr);
console.log("lenght", arr.length);

var enterName = prompt("введите логин");

for (var i=0;i<arr.length;i++) {
    if (enterName == arr[i]) {
        alert("hello " + (enterName));
        break;
    } else if ((i == arr.length -1) && (enterName != arr[i])) {
        alert("Sorry, you'r not on the list. Try again.");
    }
    }
