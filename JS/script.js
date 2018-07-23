var cardArr = document.querySelectorAll('.card img');
console.log(cardArr);
var arrLi = document.querySelectorAll('.card');

var startButton = document.getElementById('start');
console.log(startButton);

startButton.addEventListener('click', function () {
    cardArr.forEach(function (element) {
       element.classList.add("black")
    });
});

arrLi.forEach(function (element) {
    element.addEventListener('click', function () {
            var child = this.children[0];
            console.log(child);
            child.classList.remove("black");
        });
});


