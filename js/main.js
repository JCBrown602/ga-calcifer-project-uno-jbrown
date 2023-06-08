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
const winningHands = {
    "Royal Flush": 10,      // Ace, King, Queen, Jack and 10 of the same suit
    "Straight Flush": 9,    // Five cards of sequential rank, of same suit
    "Four of a Kind": 8,    // Four of the same rank, "ranked based on highest card in the hand"
    "Full House": 7,        // Three of one rank, two of another
    "Flush": 6,             // All the cards are the same suit
    "Straight": 5,          // Five cards of consecutive rank, ranked by high card
    "Three of a Kind": 4,   // Three cards of the same rank
    "Two Pair": 3,          // Two pair of two cards of the same rank
    "One Pair": 2,          // Um, one pair
    "High Card": 1          // The player with the highest card in hand wins
};
const finalCheck = [];      // Add the Community Pile to each player hand and store in array

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
// Find the four aces and change their faceValue from 1 to 14
let ace;
for (let i = 0; i < 4; i++) {
    ace = deck.shift();
    ace.faceValue = 14;
    deck.push(ace);
    // console.log(`Name: ${ace.faceName}, Face Value: ${ace.faceValue}`);
}

// Players: Player, Computer1, Computer2, etc.
let players = [
    {
        "name": "Player",
        "score": 0, // By hand rank
        "money": 0,
        "numSeq": 0, // Number of sequential cards
        "hand": []  // What cards is this player holding
    },
    {
        "name": "Computer1",
        "score": 0,
        "money": 0,
        "numSeq": 0,
        "hand": []
    },
    {
        "name": "Computer2",
        "score": 0,
        "money": 0,
        "numSeq": 0,
        "hand": []
    },
    {
        "name": "Computer3",
        "score": 0,
        "money": 0,
        "numSeq": 0,
        "hand": []
    }
]
// Special Player is dealt 3 cards face up, then 2 rounds of dealing a single card
let communityPile = [
    {
        "name": "Community Pile",
        "score": 0,
        "numSeq": 0,
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
    showCards(communityPile);
    // Call, Raise, or Fold

    // The Turn
    console.log("The Turn.");
    dealCards(communityPile);
    showCards(communityPile);
    // Call, Raise, or Fold

    // The River
    console.log("The River.");
    dealCards(communityPile);
    showCards(communityPile);
    // Call, Raise, or Fold

    checkHands();

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

//=========================================================================
// Win Condition / Scorekeeper
function buildFinalHand() {
    players.forEach((player) => {
        console.log("++++");
        communityPile[0].hand.forEach((card) => {
            player.hand.push(card);
        });
        console.log(player.hand);
    });
    console.log("++++");
}

function checkSequential() {
    players.forEach((player) => {
        player.numSeq = countSequentialCards(player.hand);
        console.log(`Player: ${player.name} has 
            ${player.numSeq} sequential cards.`);
    });
}

function countSequentialCards(playerHand) {
    let sequentialCount = 0;
    // playerHand += communityPile.hand;
    // communityPile[0].hand.forEach((card) => {
    //     playerHand.push(card);
    // })
    // console.log(playerHand);
    
    // Sort the cards by value in ascending order
    playerHand.sort((a, b) => a.faceValue - b.faceValue);
    
    for (let i = 0; i < playerHand.length - 1; i++) {
        // Check if the next card's value is one more than the current card's value
        if (playerHand[i + 1].faceValue - playerHand[i].faceValue === 1) {
        sequentialCount++;
        }
    }
    return sequentialCount;
}
    
function compareSequentialCards(playerHand1, playerHand2) {
    const count1 = countSequentialCards(playerHand1);
    const count2 = countSequentialCards(playerHand2);
    
    if (count1 > count2) {
        return "Player 1 has a higher number of sequential cards.";
    } else if (count2 > count1) {
        return "Player 2 has a higher number of sequential cards.";
    } else {
        return "Both players have the same number of sequential cards.";
    }
}
//   console.log(compareSequentialCards(playerHand1, playerHand2));
function checkHands() {
    //console.log(compareSequentialCards(players[0].hand, players[1].hand));
    //   console.log(players[0].hand + communityPile);
    buildFinalHand();
    checkSequential();
}
//=========================================================================

// ICEBOX: If all the player hands are empty, just say so
function showCards(players) {
    // Loop through any number of players
    players.forEach((player) => {
        player.hand = player.hand.sort(function(a, b) {return b.faceValue - a.faceValue});
        console.log(`${player.name} has `);
        // Loop through any number of cards
        try {
            player.hand.forEach((card) => {
                console.log(`\t${card.faceName} of ${card.suit} (faceValue: ${card.faceValue})`)
            });
        }
        catch(err) {
            console.log(`>>> ERROR: ${err}`);
            console.log(`>>> player.name: ${player.name}`);
            console.log(`>>> player.hand.length: ${player.hand.length}`);
        }
    });
}

init();