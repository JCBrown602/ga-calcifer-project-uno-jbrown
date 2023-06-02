# Project 1 for General Assembly SEIR Calcifer
ga-calcifer-project-uno-jbrown

# WIREFRAME
## Choice of Game

## Wireframe of "main" game screen

## Pseudocode for overall game play
### Variables
- 2 to 10 players 
	- player plus 1 to 9 "AI" players
- 1 deck of 52 cards
	- no jokers
- 5 card community pile
- 2 card player pocket/hole cards
- Win Condition
	- Winning hands
		- Royal Flush
			- Ace, King, Queen, Jack and 10 of the same suit
		- Straight Flush
			- Five cards of sequential rank, of same suit
		- Four of a Kind
			- Four of the same rank, "ranked based on highest card in the hand"?
			- Would four 3's and a Queen beat four 10's and a Jack?
		- Full House
			- Three of one rank, two of another
			- ie 3 Kings and 2 Aces
		- Flush
			- All the cards are the same suit
		- Straight
			- Five cards of consecutive rank
			- Ranked by highest card
			- Ace, Two, Three, Four and Five is called an "Ace-high straight"
		- Three of a Kind
			- Three cards of the same rank
		- Two Pair
			- Two pair of two cards of the same rank
			- ie 2 Kings and 2 Queens
		- One Pair
			- Um, one pair
		- High Card
			- I'm guessing this is when no player has any of the above 
			- The player with the highest card in hand wins

### Methods
#### Game Loop 
- Play/Continue Playing (While Loop)
- Rounds
	- Shuffle
	- Each player dealt 2 cards (left of dealer and around)
	- "Pre-flop" bet (blinds and calls??)
	- The flop - dealer deals 3 face up community cards
	- Second betting round
	- Fourth Street (The Turn) - dealer deals single community card
	- Third betting round
	- Fifth Street (The River) - final single community card
	- Fourth betting round
	- Showdown (if necessary)
	- Continue?
		- This is at any point, not necessarily after 4 betting rounds

#### Other Methods
- Shuffle
- Scoring
	- In fictional dollars
	- or pesos as part of an 1800's Texas theme, a la Texas Hold'em
	(Mexico governed Texas at that time and had strong influence afterwards)
- Betting
	- Controlled/initiated by Dealer method
	- Betting round continues until:
		- Every player has folded, or
		- A player puts in all of their chips (need to clarify), or
		- Matched the amount put in by other players (ie everyone's at $100)
- Dealer
	- Deal 2 cards to each player (hole/pocket cards)

## Icebox

- Chips
	- Different denominations of chips to bet with
	- Can exchange chips for higher/lower denominations
- Use CSS to "tilt" view
- Add in better art instead of just boxes "representing" cards
- Scoreboard for multiple games

## References

- The Great [Wikipedia](https://en.wikipedia.org/wiki/Texas_hold_%27em)
- [Turning Stone Resort & Casino](https://www.turningstone.com/press/articles/gaming/how-to-play--bet-texas-hold-em-poker-basic-rules)
