
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"

	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
		
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
		
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
		
	},
];



var cardsInPlay = [];

//I had to improvise this because the way outlined in the instructions was not working for me.
var checkForMatch = function(cardId){
	document.getElementsByTagName("img")[cardId].setAttribute("src",cards[cardId].cardImage);

	if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
      alert("You found a match!");
  } else {
      console.log("Sorry, try again.");
      alert("Sorry, try again.");
  }
}


var flipCard = function(){
	var cardId = this.getAttribute('data-id');
	checkForMatch(cardId);
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
}


var createBoard = function(){
	for(var i = 0; i < cards.length; ++i){
		var cardElement = document.createElement('img');
		cardElement.setAttribute("src","images/back.png");
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);

	}
}

// flipCard(0);
// flipCard(2);
createBoard();