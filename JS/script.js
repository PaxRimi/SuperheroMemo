var imglist = document.querySelectorAll('.game__cardTable .card img');

var srcArr = getSrc(imglist);

var listLi = document.querySelectorAll('.game__cardTable li');
console.log(listLi);

var startButton = document.getElementById('start');

startButton.addEventListener('click', function () {
    let deck = shuffle(srcArr);

    imglist.forEach(function (element, index) {
        element.setAttribute("src", deck[index]);
    });

     imglist.forEach(function (element) {
        element.classList.add("black")
     });
});

listLi.forEach(function (element) {
    element.addEventListener('click', function () {
            var child = this.firstElementChild;
            console.log(child);
            child.classList.remove("black");
        });
});

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function getSrc(array) {
    let arr = [];

    array.forEach(function (element) {
        arr.push(element.getAttribute("src"))
    });

    return arr;
}