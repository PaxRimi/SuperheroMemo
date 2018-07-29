// Array with all img
var imglist = document.querySelectorAll('.game__cardTable .card img');
// Create array of src from img
var srcArr = getSrc(imglist);
//List of all Li element
var listLi = document.querySelectorAll('.game__cardTable li');
// Start button
var startButton = document.getElementById('start');
//Counter that prevent clicking a car before start game
var Start = 0;
//Span that count players points
var points = document.getElementById('score');
//Span that count players moves
var moves = document.getElementById('moves');
// Array with showing card to check them
var showCard = [];
// Add counter that multiple points if you choose couple in a row
var multiplePointsCounter = document.getElementById('pointsX');
// Points counter
var actualPoints = 0 ;
// Add music player element
var song = document.getElementById('song');
// Add mute icon element
var mute = document.getElementById('mute');
// Add play icon element
var playMusic = document.getElementById('play');
// Add timer from html
var timer = document.getElementById("time");
// Add min and sec
var second = 0;
var minute = 0;
var interval;
// Add highscore button
var highscoreButton = document.getElementById('showHS');
// Add highscore board
var highscoreBoard = document.querySelector('.highscore__background');
// Add button that close hightscore board
var closeHS = document.getElementById('closeHScore');

// Function that start game
startButton.addEventListener('click', function () {
    Start++;
    moves.innerText = 0;
    points.innerText = 0;
    multiplePointsCounter.innerText = 1;
    actualPoints = 0;
    second = 0;
    minute = 0;
    clearInterval(interval);
    startTimer();
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
    startButton.classList.remove('btn-start');
    startButton.classList.add('btn-restart');
    startButton.innerText = "Restart";
});

// Remove class black and show card
listLi.forEach(function (element) {
        element.addEventListener('click', function () {
            if (showCard.length !== 2 && Start > 0) {
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
                            }, 1500)
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
        countPoints();
        multiplePointsCounter.innerText++;
    } else {
        console.log("brak pary");
       setTimeout(function(){
            array[0].classList.toggle('black');
            array[1].classList.toggle('black');}, 1000);
            moves.innerText++;
            multiplePointsCounter.innerText = 1;

    }
}

//function that count points

function countPoints() {
    var minPoints = 10;
    actualPoints += minPoints * multiplePointsCounter.innerText;

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
});



// Function that count time of the game
function startTimer(){
   interval = setInterval(function(){
        second++;
        timer.innerHTML = minute+"mins "+second+"secs";
        if(second == 60){
            minute++;
            second = 0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
        },1000);
}

// Function that show and hide highscore

highscoreButton.addEventListener('click', function () {
   highscoreBoard.classList.remove('black');
});

closeHS.addEventListener('click', function () {
   highscoreBoard.classList.add('black');
});