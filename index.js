let team1 = document.getElementById("score-el1")
let team2 = document.getElementById("score-el2")
let nextPeriodClicker = document.getElementById("period-el")
let count1 = 0
let count2 = 0
let period = 0
// console.log(plus1)

function team1plus1() {
    count1 += 1
    team1.textContent = count1
}

function team1plus2() {
    count1 += 2
    team1.textContent = count1
}

function team1plus3() {
    count1 += 3
    team1.textContent = count1
}

function team2plus1() {
    count2 += 1
    team2.textContent = count2
    // console.log(count)
}

function team2plus2() {
    count2 += 2
    team2.textContent = count2
}

function team2plus3() {
    count2 += 3
    team2.textContent = count2
}

function newGame() {
    count1 = 0
    count2 = 0
    period = 0
    team1.textContent = count1
    team2.textContent = count2
    nextPeriodClicker.textContent = "Period: " + period
}

function nextPeriod() {
    period += 1
    nextPeriodClicker.textContent = "Period: " + period
}
