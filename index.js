let homeScore = 0
let awayScore = 0

let homeScoreEl = document.getElementById("home-score")
let awayScoreEl = document.getElementById("away-score")

let homeScoreBoxEl = document.getElementById("home-score-box")
let awayScoreBoxEl = document.getElementById("away-score-box")

function scoreCheck() {
    if(homeScore > awayScore) {
        homeScoreBoxEl.classList.add("winning");
        awayScoreBoxEl.classList.remove("winning");
    } else if (awayScore > homeScore) {
        awayScoreBoxEl.classList.add("winning");
        homeScoreBoxEl.classList.remove("winning");
    } else {
        awayScoreBoxEl.classList.remove("winning");
        homeScoreBoxEl.classList.remove("winning");
    }
}

function add1Home() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
    scoreCheck()
}

function add2Home() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
    scoreCheck()
}

function add3Home() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
    scoreCheck()
}

function add1Away() {
    awayScore += 1;
    awayScoreEl.textContent = awayScore;
    scoreCheck()
}

function add2Away() {
    awayScore += 2;
    awayScoreEl.textContent = awayScore;
    scoreCheck()
}

function add3Away() {
    awayScore += 3;
    awayScoreEl.textContent = awayScore;
    scoreCheck()
}

function newGame() {
    homeScore = 0;
    homeScoreEl.textContent = homeScore;
    homeScoreBoxEl.classList.remove("winning");
    awayScore = 0;
    awayScoreEl.textContent = awayScore;
    awayScoreBoxEl.classList.remove("winning");
}