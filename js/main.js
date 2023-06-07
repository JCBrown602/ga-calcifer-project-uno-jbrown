////////////// (MODEL) Data / State
/*----- constants -----*/
// Build deck: 52 cards, 13 face values, 4 suits
const suits = ['Clubs','Diamonds','Hearts','Spades'];
const faces = 
    ['A','2','3','4','5','6','7','8','9','10','Jack','Queen','King'];
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
let player = [
    {
        "name": "Player",
        "score": 0,
        "hand": []  // What cards is this player holding
    },
    {
        "name": "Computer1",
        "score": 0,
        "hand": []
    },
    {
        "name": "Computer2",
        "score": 0,
        "hand": []
    },
    {
        "name": "Computer3",
        "score": 0,
        "hand": []
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
    console.log("The starting deck:");
    console.log(deck.slice(0,5));
    shuffle(deck);
    console.log(deck.slice(0,5));
    render();
};

// Dealer?

// Shuffle deck
function shuffle(deck){
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

// Betting

// Scorekeeper

//console.log(deck);

init();