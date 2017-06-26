
var ranks = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
var suits = ["diamond","heart","spade","club"];
var colors = ["red","red","black","black"];
//make deck
var cards = [];
for(var k = 0; k < ranks.length; ++k)
{
	for(var j = 0; j < suits.length; ++j){
		//add ranks suits
		cardsObject = '{"color": "' + colors[j] + '","rank": "' + ranks[k] + '","suit": "' + suits[j] + '" ,"cardImage": ' + '"images/all/384px-Playing_card_' + suits[j] + '_' + ranks[k] + '.svg.png' + '"}';
		cards.push(JSON.parse(cardsObject));
	}
}


//randomize deck
var randomizeBoard = function(){
	var board = document.getElementById('game-board').children;
	for(var j = 0; j < board.length; ++j){
		// select 2 indecies
		var index1 = Math.floor(Math.random()*board.length);
		
		//swap them
		var temp = cards[j];
		cards[j]=cards[index1];
		cards[index1]=temp;
		
	}
}

//select difficulty


// var cards = [
// 	{
// 		rank: "queen",
// 		suit: "hearts",
// 		cardImage: "images/queen-of-hearts.png"

// 	},
// 	{
// 		rank: "queen",
// 		suit: "diamonds",
// 		cardImage: "images/queen-of-diamonds.png"
		
// 	},
// 	{
// 		rank: "king",
// 		suit: "hearts",
// 		cardImage: "images/king-of-hearts.png"
		
// 	},
// 	{
// 		rank: "king",
// 		suit: "diamonds",
// 		cardImage: "images/king-of-diamonds.png"
		
// 	},
// ];





var cardsInPlayRank = [];
var cardsInPlayImages = [];
var cardsInPlayId = [];
var matches = [];
var images = document.getElementsByTagName("img");




//functions
var checkForMatch = function(mode){
	if(cardsInPlayId.length == 2){
		console.log("Cards: " + cards[cardsInPlayId[0]] + " " + cards[cardsInPlayId[1]])
		if (cards[cardsInPlayId[0]].rank === cards[cardsInPlayId[1]].rank && cards[cardsInPlayId[0]].color === cards[cardsInPlayId[1]].color) {
	      console.log("You found a match!");
	      alert("You found a match!");
	      matches.push(cards[cardsInPlayId[0]]);
	      matches.push(cards[cardsInPlayId[1]]);
	      cardsInPlayId = [];
	      var board = document.getElementById('game-board').children;
	      if(matches.length == board.length){
	      	alert("You have won!!!!!");
	      }
	      //add would you like to play again button.
	  	} 
  		else {
	      console.log("Sorry, try again.");
	      alert("Sorry, try again.");
	      unFlipUnmatchedCards();
	  	}
	  	
	  	updateCounter();
	}
	
}










// when adding event listener this becomes the file, therefore cannot use parameters so need extra functions
var flipCardEasy = function(){
	var cardId = this.getAttribute('data-id');
	if(cardsInPlayId.indexOf(cardId) < 0)
	{
		console.log(this);
		this.setAttribute("src",cards[cardId].cardImage);
		this.setAttribute("height","279");
		this.setAttribute("width","175");
		console.log("User flipped " + cards[cardId].rank);
		cardsInPlayId.push(cardId);
		console.log(cards[cardId].cardImage);
		console.log(cards[cardId].suit);
		checkForMatch("easy");
	}
	
}
var flipCardMedium = function(){
	var cardId = this.getAttribute('data-id');
	if(cardsInPlayId.indexOf(cardId) < 0)
	{
		console.log(this);
		this.setAttribute("src",cards[cardId].cardImage);
		this.setAttribute("height","139");
		this.setAttribute("width","87");
		console.log("User flipped " + cards[cardId].rank);
		cardsInPlayId.push(cardId);
		console.log(cards[cardId].cardImage);
		console.log(cards[cardId].suit);
		checkForMatch("medium");
	}
	
}

var flipCardHard = function(){
	var cardId = this.getAttribute('data-id');
	if(cardsInPlayId.indexOf(cardId) < 0)
	{
		console.log(this);
		this.setAttribute("src",cards[cardId].cardImage);
		this.setAttribute("height","93");
		this.setAttribute("width","56");
		console.log("User flipped " + cards[cardId].rank);
		cardsInPlayId.push(cardId);
		console.log(cards[cardId].cardImage);
		console.log(cards[cardId].suit);
		checkForMatch("hard");
	}
	
}




var unFlipUnmatchedCards = function(){
	var images = document.getElementsByTagName("img");
	for(var j = 0; j < cardsInPlayId.length; ++j){
		images[cardsInPlayId[j]].setAttribute("src","images/back.png");
	}
	cardsInPlayId = [];
}




var createCard = function(mode, pixHeight, pixWidth, numberOfCards, i){
	var cardElement = document.createElement('img');
	cardElement.setAttribute("src","images/back.png");
	cardElement.setAttribute('data-id',i);
	cardElement.setAttribute('height',pixHeight);
	cardElement.setAttribute('width',pixWidth);
	switch(mode){
		case "easy":
			cardElement.addEventListener('click',flipCardEasy);
			break;
		case "medium":
			cardElement.addEventListener('click',flipCardMedium);
			break;
		case "hard":
			cardElement.addEventListener('click',flipCardHard);
			break;
	}
	document.getElementById('game-board').appendChild(cardElement);
}

var createBoard = function(mode, pixHeight, pixWidth, numberOfCards){
	for(var i = 0; i < numberOfCards; ++i){
		createCard(mode, pixHeight, pixWidth, numberOfCards, i);
	}
	randomizeBoard();
	//remove difficulty buttons
	var buttons = document.getElementsByTagName("button");
	for(var j = 0; j < buttons.length; ++j){
		buttons[j].style.display = "none";
	}
}


// need to fix
var updateCounter = function(){
	document.getElementsByClassName("counter")[0].innerHTML++;
}

//easy
//image heights 279px
//image width 175px

//medium
//

//hard
//image heights 279px
//image width 175px
//createBoard();






