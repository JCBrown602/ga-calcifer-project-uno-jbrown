////////////// (MODEL) Data / State
/*----- constants -----*/
// Build deck: 52 cards, 13 face values, 4 suits
const suits = ['Clubs','Diamonds','Hearts','Spades'];
const faces = 
    ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'];
let deck = [];
faces.forEach((face) => {
    suits.forEach((suit) => {
        let newCard = {};
        newCard.face = face;
        newCard.suit = suit;
        deck.push(newCard);
    });
});

// Players: Player, Computer1, Computer2, etc.
let players = [
    {
        "name": "Player",
        "score": 0,
        "hand": [{face: 'Ace', suit: 'Spades'}, {face: 'Ace', suit: 'Hearts'}]  // What cards is this player holding
    },
    {
        "name": "Computer1",
        "score": 0,
        "hand": [{face: 'Ace', suit: 'Spades'}, {face: 'Ace', suit: 'Hearts'}]
    },
    {
        "name": "Computer2",
        "score": 0,
        "hand": [{face: 'Ace', suit: 'Spades'}, {face: 'Ace', suit: 'Hearts'}]
    },
    {
        "name": "Computer3",
        "score": 0,
        "hand": [{face: 'Ace', suit: 'Spades'}, {face: 'Ace', suit: 'Hearts'}]
    }
]
/*----- app's state (variables) -----*/

/*----- cached element references -----*/

////////////// (VIEW) All DOM action takes place here
function render() {
    console.log("Render...");
}; 
/*----- event listeners -----*/

////////////// (CONTROLLER)
/*----- functions -----*/
function init() {
    console.log("Init...");
    // Players have zero cards
    console.log("The starting deck:");
    console.log(deck.slice(0,5));
    // Shuffle cards
    shuffle(deck);
    console.log(deck.slice(0,5));
    // Deal cards (first two)
    console.log("The players currently have:");
    showPlayerHands();
    dealCards();
    showPlayerHands();
    // Betting rounds
    render();
};

// Dealer?

// Shuffle deck
function shuffle(){
    console.log("Shuffling...");
    for(let i = 0; i < 52; i ++) {
        let tempCard = deck[i];
        let randNum = Math.floor(Math.random() * 52);
        deck[i] = deck[randNum];
        deck[randNum] = tempCard;
    }
    return deck;
}
// Deal cards
function dealCards() {
    console.log("Dealing...");
    for(let i = 0; i < players.length; i++) {
        let cardToDeal = deck.pop();
        console.log(`${players[i].name} 
            - ${players[i].hand.length} - ${cardToDeal.face} of ${cardToDeal.suit}`);
        players[i].hand.push(cardToDeal);
        console.log(players[i]);
    }
    console.log(players);
    return players;
}

// Betting

// Scorekeeper

function showPlayerHands() {
    // Loop through any number of players
    players.forEach((player) => {
        console.log(`${player.name} has `);
        // Loop through any number of cards
        player.hand.forEach((card) => {
            console.log(`\t${card.face} of ${card.suit}`)
        });
    });
}

init();