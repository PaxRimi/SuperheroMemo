// Array with all img
var imglist = document.querySelectorAll('.game__cardTable .card img');
// Create array of src from img
var srcArr = getSrc(imglist);
//List of all Li element
var listLi = document.querySelectorAll('.game__cardTable li');
// Start button
var startButton = document.getElementById('start');
//Span that count players points

var points = document.getElementById('score');

//Span that count players moves
var moves = document.getElementById('moves');

// Array with showing card to check them
var showCard = [];
// Add counter that multiple points if you choose couple in a row
var multiplePointsCounter = 0;
// Points counter
var actualPoints = 0 ;
// Add music player element
var song = document.getElementById('song');
// Add mute icon element
var mute = document.getElementById('mute');
// Add play icon element
var playMusic = document.getElementById('play');

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
                if ( showCard.length === 1) {
                    if ( showCard[0].parentElement !== this ) {
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
                    }
                } else {
                    var child = this.firstElementChild;
                    console.log(child);
                    child.classList.toggle("black");
                    showCard.push(child);
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
        moves.innerText++;
        multiplePointsCounter++;
        countPoints();
    } else {
        console.log("brak pary");
       setTimeout(function(){
            array[0].classList.toggle('black');
            array[1].classList.toggle('black');}, 2000);
            moves.innerText++;
            multiplePointsCounter = 0;

    }
}

//function that count points

function countPoints() {
    var minPoints = 10;
    actualPoints += minPoints * multiplePointsCounter;

    points.innerText = actualPoints;
}

//Add function that stop music
mute.addEventListener('click', function () {
    mute.classList.add("stop");
    playMusic.classList.remove('active');
    song.pause();
});

//Add function that start music
playMusic.addEventListener("click", function () {
    playMusic.classList.add('active');
    mute.classList.remove('stop');
    song.play();
})
