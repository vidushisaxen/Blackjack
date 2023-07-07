
// Try to get 21 aur as close as to 21 but not greater than that
//= 21 😍==blackjack
//<21 😊
// >21 😒 
// In blackjack the J,Q,K are all 10 and A is 11

let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = true
let msg = " "

let messageEl = document.getElementById("message")
// let sumEl = document.querySelector("#sum-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

let player = {
    name : "Vidushi",
    chips : 250
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " : $" + player.chips

function getRandomCard(){
  let random =Math.floor(Math.random()*13)+1
  if(random === 1){
    return 11
  }
  else if(random >10){
    return 10
  }
  else{
  return random
}
}
function start(){
    let firstCard = getRandomCard()
let secondCard = getRandomCard()
cards = [firstCard,secondCard]
sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardEl.textContent = "Cards : "
    for(let i=0;i<cards.length;i++){
        cardEl.textContent += cards[i] + "   "
    }
    sumEl.textContent = "Sum : "+sum
    if(sum <= 20){
        msg = "Do you want to draw an new card? "
        
    }
    else if(sum === 21){
        msg = "Woohoo! You've got a blackjack "
        hasBlackJack = true
    }
    else{
        msg = "You're out of the game "
        isAlive = false
    }
    messageEl.textContent = msg 
    
}
 function newcard(){
    if(isAlive === true && hasBlackJack === false ){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    cardEl.textContent += cards[2]
    renderGame()
    }
 }







