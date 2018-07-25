// Array with all img
var imglist = document.querySelectorAll('.game__cardTable .card img');
// Create array of src from img
var srcArr = getSrc(imglist);
//List of all Li element
var listLi = document.querySelectorAll('.game__cardTable li');
console.log(listLi);
// Start button
var startButton = document.getElementById('start');

var showCard = [];

// Function that start game
startButton.addEventListener('click', function () {
    // get shuffle array of src to all img
    let deck = shuffle(srcArr);
    // change actual src to a new random one
    imglist.forEach(function (element, index) {
        element.setAttribute("src", deck[index]);
    });
    // add new class to card that hide img
    imglist.forEach(function (element) {
        element.classList.add("black")
    });
});

// Remove class black and show card
listLi.forEach(function (element) {
        element.addEventListener('click', function () {
            if (showCard.length !== 2) {
                var child = this.firstElementChild;
                console.log(child);
                child.classList.toggle("black");
                showCard.push(child);

                if (showCard.length === 2) {
                    checkCard(showCard);
                    setTimeout(function () {
                        showCard = []
                    }, 2500)
                }
            };
        });

});

// Function that shuffle elements in array
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

// function that create array with only a src to img
function getSrc(array) {
    let arr = [];

    array.forEach(function (element) {
        arr.push(element.getAttribute("src"))
    });

    return arr;
}

// Function that check if the card is the same or not

function checkCard(array) {
    console.log("wszedłem do funkcji");
    if (array[0].getAttribute('src') === array[1].getAttribute('src')) {
        console.log("para");
    } else {
        console.log("brak pary");
       setTimeout(function(){
            array[0].classList.toggle('black');
            array[1].classList.toggle('black');}, 2000);

    }
}
