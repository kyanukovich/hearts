/**********************************************
 * STARTER CODE
 **********************************************/

/**
 * shuffle()
 * Shuffle the contents of an array
 *   depending the datatype of the source
 * Makes a copy. Does NOT shuffle the original.
 * Based on Steve Griffith's array shuffle prototype
 * @Parameters: Array or string
 * @Return: Scrambled Array or string, based on the provided parameter
 */
function shuffle (src) {
  const copy = [...src]

  const length = copy.length
  for (let i = 0; i < length; i++) {
    const x = copy[i]
    const y = Math.floor(Math.random() * length)
    const z = copy[y]
    copy[i] = z
    copy[y] = x
  }

  if (typeof src === 'string') {
    return copy.join('')
  }

  return copy
}

const suits = ['clubs', 'diamonds', 'hearts', 'spades']
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']

const game = {
  deck: [],
  players: {
    'Player 1': [],
    'Player 2': [],
    'Player 3': [],
    'Player 4': []
  }
}

/**********************************************
 * YOUR CODE BELOW
 **********************************************/

const $hand = document.getElementById('hand')
const $controls = document.getElementById('controls')

$hand.innerHTML = ''

$controls.innerHTML = `
<button class="button" onclick="dealOne()">Player 1</button>
<button class="button" onclick="dealTwo()">Player 2</button>
<button class="button" onclick="dealThree()">Player 3</button>
<button class="button" onclick="dealFour()">Player 4</button>
`

const deck = []

for (const suit of suits) {
  for (const rank of ranks) {
    deck.push({ suit, rank })
  }
}

game.deck = shuffle(deck)

function dealOne (numberOfCards = 13) {
  if (game.players['Player 1'].length === 0) {
    game.players['Player 1'] = game.deck.slice(0, numberOfCards)

    const hand = game.deck.splice(0, numberOfCards)

    $hand.innerHTML = hand.map(card => `
    <div class="card" data-card="${card.rank} of ${card.suit}">
      <div class="number ${card.suit}">${card.rank}</div>
      <div class="suit"><img src="images/${card.suit}.png"></div>
      <div class="number ${card.suit}">${card.rank}</div>
    </div>`).join('')
  } else {
    const hand = game.players['Player 1'].slice(0, numberOfCards)

    $hand.innerHTML = hand.map(card => `
    <div class="card" data-card="${card.rank} of ${card.suit}">
      <div class="number ${card.suit}">${card.rank}</div>
      <div class="suit"><img src="images/${card.suit}.png"></div>
      <div class="number ${card.suit}">${card.rank}</div>
    </div>`).join('')
  }
}

function dealTwo (numberOfCards = 13) {
  if (game.players['Player 2'].length === 0) {
    game.players['Player 2'] = game.deck.slice(0, numberOfCards)

    const hand = game.deck.splice(0, numberOfCards)

    $hand.innerHTML = hand.map(card => `
    <div class="card" data-card="${card.rank} of ${card.suit}">
      <div class="number ${card.suit}">${card.rank}</div>
      <div class="suit"><img src="images/${card.suit}.png"></div>
      <div class="number ${card.suit}">${card.rank}</div>
    </div>`).join('')
  } else {
    const hand = game.players['Player 2'].slice(0, numberOfCards)

    $hand.innerHTML = hand.map(card => `
    <div class="card" data-card="${card.rank} of ${card.suit}">
      <div class="number ${card.suit}">${card.rank}</div>
      <div class="suit"><img src="images/${card.suit}.png"></div>
      <div class="number ${card.suit}">${card.rank}</div>
    </div>`).join('')
  }
}

function dealThree (numberOfCards = 13) {
  if (game.players['Player 3'].length === 0) {
    game.players['Player 3'] = game.deck.slice(0, numberOfCards)

    const hand = game.deck.splice(0, numberOfCards)

    $hand.innerHTML = hand.map(card => `
    <div class="card" data-card="${card.rank} of ${card.suit}">
      <div class="number ${card.suit}">${card.rank}</div>
      <div class="suit"><img src="images/${card.suit}.png"></div>
      <div class="number ${card.suit}">${card.rank}</div>
    </div>`).join('')
  } else {
    const hand = game.players['Player 3'].slice(0, numberOfCards)

    $hand.innerHTML = hand.map(card => `
    <div class="card" data-card="${card.rank} of ${card.suit}">
      <div class="number ${card.suit}">${card.rank}</div>
      <div class="suit"><img src="images/${card.suit}.png"></div>
      <div class="number ${card.suit}">${card.rank}</div>
    </div>`).join('')
  }
}

function dealFour (numberOfCards = 13) {
  if (game.players['Player 4'].length === 0) {
    game.players['Player 4'] = game.deck.slice(0, numberOfCards)

    const hand = game.deck.splice(0, numberOfCards)

    $hand.innerHTML = hand.map(card => `
    <div class="card" data-card="${card.rank} of ${card.suit}">
      <div class="number ${card.suit}">${card.rank}</div>
      <div class="suit"><img src="images/${card.suit}.png"></div>
      <div class="number ${card.suit}">${card.rank}</div>
    </div>`).join('')
  } else {
    const hand = game.players['Player 4'].slice(0, numberOfCards)

    $hand.innerHTML = hand.map(card => `
    <div class="card" data-card="${card.rank} of ${card.suit}">
      <div class="number ${card.suit}">${card.rank}</div>
      <div class="suit"><img src="images/${card.suit}.png"></div>
      <div class="number ${card.suit}">${card.rank}</div>
    </div>`).join('')
  }
}

/* re-pushed March 30th, 2020 */
