////////////// (MODEL) Data / State
/*----- constants -----*/
const suits = ['Clubs','Diamonds','Hearts','Spades'];
const values = 
    ['A','2','3','4','5','6','7','8','9','10','Jack','Queen','King'];
let deck = [];
values.forEach((value) => {
    let newCard = new Object();
    newCard.value = value;
    suits.forEach((suit, index, array) => {
        console.log(`Suit: ${suit} \tIndex: ${index} \tArray: ${array} `);
        newCard.suit = suit;
        deck.push(newCard);
    });
    console.log(newCard);
});

let player = [
    {
        "name": "Player",
        "score": 0,
    },
    {
        "name": "Computer",
        "score": 0,
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
    render();
};

//console.log(deck);