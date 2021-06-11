// Open / Close rules window

const closeBtn = document.querySelector('.rules-popup .close')
const openBtn = document.querySelector('.rules-open')

openBtn.onclick = () => {
  document.querySelector('.rules-popup').classList.toggle('hide')
}
closeBtn.onclick = openBtn.onclick

// ====>> Game <<=====
const options = ['paper', 'rock', 'scissors']
let score = 0

getRndOption = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min
}

document.querySelector('.start-page .paper').onclick = () => playGame('paper')
document.querySelector('.start-page .rock').onclick = () => playGame('rock')
document.querySelector('.start-page .scissors').onclick = () =>
  playGame('scissors')

function playGame (userChoice) {
  document.querySelector('.result').classList.toggle('hide')
  document.querySelector('.start-page').classList.toggle('hide')

  const compChoice = options[getRndOption(0, 2)]
  if (userChoice === 'paper' && compChoice === 'paper')
    renderResult('draw', userChoice, compChoice)
  else if (userChoice === 'paper' && compChoice === 'scissors')
    renderResult('lost', userChoice, compChoice)
  else if (userChoice === 'paper' && compChoice === 'rock')
    renderResult('win', userChoice, compChoice)
  else if (userChoice === 'rock' && compChoice === 'paper')
    renderResult('lost', userChoice, compChoice)
  else if (userChoice === 'rock' && compChoice === 'scissors')
    renderResult('win', userChoice, compChoice)
  else if (userChoice === 'rock' && compChoice === 'rock')
    renderResult('draw', userChoice, compChoice)
  else if (userChoice === 'scissors' && compChoice === 'paper')
    renderResult('win', userChoice, compChoice)
  else if (userChoice === 'scissors' && compChoice === 'scissors')
    renderResult('draw', userChoice, compChoice)
  else if (userChoice === 'scissors' && compChoice === 'rock')
    renderResult('lost', userChoice, compChoice)
}

//
const playAgain = () => {
  console.log('dflaksedl')
  document.querySelector('.result').classList.toggle('hide')
  document.querySelector('.start-page').classList.toggle('hide')
}

const renderResult = (status, userChoice, compChoice) => {
  document.querySelector('.result').innerHTML = `
  <div class=${status === 'win' ? 'you winner' : 'you'}>
    <h3>YOU PICKED</h3>
    <div class="option ${userChoice}">
      <img src="./images/icon-${userChoice}.svg">
    </div>
  </div>
  <div>
    <h2 class="result-heading">${
      status === 'win' ? 'YOU WIN' : status === 'lost' ? 'YOU LOST' : 'DRAW'
    }</h2>
    <button onclick="playAgain()" class="play-again">PLAY AGAIN</button>
  </div>
  <div class=${status === 'lost' ? 'house winner' : 'house'}>
    <h3>THE HOUSE PICKED</h3>
    <div class="option ${compChoice}">
      <img src="./images/icon-${compChoice}.svg">
    </div>
  </div>
  `
  if (status === 'win') score += 1
  else if (status === 'lost') score -= 1
  document.querySelector('.score-value').innerHTML = score
}
