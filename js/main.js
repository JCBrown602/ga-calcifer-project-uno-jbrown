////////////// (MODEL) Data / State
/*----- constants -----*/
// Pieces for building deck: 52 cards, 4 suits, 14 face names, 14 face values]
// 14 because Ace is special. Starts at 0 but we'll move it up to the top.
// It starts at 0 just because of indexing. Doing it this way makes the 'face values'
// line up with their actual integer values with less hassle.
const suits = ['Clubs','Diamonds','Hearts','Spades'];
const faceNames =
    ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'];
const faceValues = [];

/*----- app's state (variables) -----*/
// Build the deck
let deck = [];
// Assigning integer values to make scoring hands easier
for(let i = 0; i < 14; i++) {
    faceValues[i] = i;
}
// Assign a 'face value' and a suit to a new card object
faceNames.forEach((faceName, idx) => {
    //console.log(`${faceName}`);
    suits.forEach((suit) => {
        let newCard = {};
        newCard.faceName = faceName;
        newCard.faceValue = idx + 1;
        newCard.suit = suit;
        // console.log("===============");
        // console.log(`newCard.faceName - ${newCard.faceName}`);
        // console.log(`faceName - ${faceName}`);
        // console.log(`suit - ${suit}`);
        // console.log(`faceValue - ${faceValues[idx + 1]}`);
        // console.log(newCard);
        deck.push(newCard);
    });
});

// Players: Player, Computer1, Computer2, etc.
let players = [
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
// Special Player is dealt 3 cards face up, then 2 rounds of dealing a single card
let communityPile = [
    {
        "name": "Community Pile",
        "score": 0,
        "hand": []  // What cards is this player holding
    }
]

/*----- cached element references -----*/

////////////// (VIEW) All DOM action takes place here
function render() {
    console.log("Render...");
}; 
/*----- event listeners -----*/
// TEMPORARY CONSOLE DRIVER


////////////// (CONTROLLER)
/*----- functions -----*/
function init() {
    console.log("Init...");

    // Make sure players have zero cards
    players.forEach((player) => {
        player.hand = [];
    })
    console.log("The starting deck:");
    console.log(deck.slice(0,5));

    // Shuffle cards
    shuffle(deck);
    console.log("Every day I'm ");
    shuffle(deck);
    shuffle(deck);
    console.log(deck.slice(0,5));

    // Deal cards (first two)
    console.log(`Cards remaining in deck: ${deck.length}`);
    dealCards(players);

    console.log(`Cards remaining in deck: ${deck.length}`);
    dealCards(players);

    console.log(`Cards remaining in deck: ${deck.length}`);
    showCards(players);

    // Betting rounds
    console.log(`BETTING BEGINS with ${deck.length} cards in the deck.`);
    render();
    // Call, Raise, or Fold

    // The Flop (burn a card)
    console.log("The Flop.");
    for(let i = 0; i < 3; i++) { dealCards(communityPile); }
    // Call, Raise, or Fold

    // The Turn
    console.log("The Turn.");
    dealCards(communityPile);
    // Call, Raise, or Fold

    // The River
    console.log("The River.");
    dealCards(communityPile);
    // Call, Raise, or Fold

    showCards(communityPile);
};

// Dealer?

// Shuffle deck
function shuffle(){
    console.log("\tShuffling...");
    for(let i = 0; i < 52; i ++) {
        let tempCard = deck[i];
        let randNum = Math.floor(Math.random() * 52);
        deck[i] = deck[randNum];
        deck[randNum] = tempCard;
    }
    return deck;
}
// Deal cards
function dealCards(players) {
    console.log("Dealing...");
    for(let i = 0; i < players.length; i++) {
        let cardToDeal = deck.pop();
        //console.log(`cardToDeal: ${cardToDeal.faceName} of ${cardToDeal.suit}`);
        players[i].hand.push(cardToDeal);
        //console.log(`players[i] === ${players[i].name}
        //     got a ${cardToDeal.faceName} of ${cardToDeal.suit} (${cardToDeal.faceValue} pts)`);
    }
    //console.log(players);
    return players;
}

// Betting

// Win Condition / Scorekeeper


// ICEBOX: If all the player hands are empty, just say so
function showCards(players) {
    // Loop through any number of players
    players.forEach((player) => {
        console.log(`${player.name} has `);
        // Loop through any number of cards
        player.hand.forEach((card) => {
            console.log(`\t${card.faceName} of ${card.suit}`)
        });
    });
}

init();