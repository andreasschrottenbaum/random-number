const containerEl = document.querySelector('main'),
  formEl = document.querySelector('form'),
  userNumberInput = document.querySelector('#user-number-input'),
  checkButton = document.querySelector('#check'),
  retryButton = document.querySelector('#retry'),
  resultText = document.querySelector('#result-text'),
  tryCounter = document.querySelector('#try-counter'),
  score = document.querySelector('#score'),
  endText = document.querySelector('#end-text')

let successCount = 0,
  tryCount = 0

const rollDice = () => {
  tryCount++

  if (tryCount === 6) {
    reset()
    return
  }

  const randomNumber = Math.round(Math.random() * 5)
  const userNumber = parseInt(userNumberInput.value)

  endText.classList.add('hidden')
  containerEl.classList.remove('correct', 'error')

  userNumberInput.value = ''
  tryCounter.innerText = `Try: ${tryCount}/5`

  if (randomNumber === userNumber) {
    successCount++
    resultText.innerHTML = 'You got it'
    containerEl.classList.add('correct')
  } else {
    resultText.innerHTML = 'Try again'
    containerEl.classList.add('error')
  }

  if (tryCount === 5) {
    retryButton.classList.remove('hidden')
    checkButton.classList.add('hidden')
    endText.classList.remove('hidden')

    userNumberInput.disabled = true

    score.innerHTML = `You got: ${successCount}/5`
  }

  return false
}

const reset = () => {
  tryCount = 0
  successCount = 0

  resultText.innerHTML = ''
  score.innerHTML = ''
  tryCounter.innerText = `Try: ${tryCount}/5`

  checkButton.classList.remove('hidden')
  retryButton.classList.add('hidden')

  containerEl.classList.remove('correct', 'error')
}

formEl.addEventListener('submit', rollDice)
