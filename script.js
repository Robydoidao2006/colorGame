//number of squares
var numSquares = 6;
//red, green, blue. the higher the rgb number the stronger the color.
var colors = generateRandomColors(numSquares);
//setting the variable and selecting it 
var squares = document.querySelectorAll(".square");
//randomly changes colors 
var pickedColor = pickColor();
//adds the random RGB color to display on the page
var colorDisplay = document.getElementById("colorDisplay");
//displaying the message if right or wrong.
var messageDisplay = document.querySelector("#message");
// changes the color of the h1 box
var h1 = document.querySelector("h1");
//reset the game.
var resetButton = document.querySelector("#reset");
//stabeshing a var for the easy and hard buttons
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3
	//changes the color of the first 3 squares
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent =  pickedColor;
	for (var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else {//hides the 3 bottom squares
			squares[i].style.display = "none";
		}
	}
});
hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	//changes the color of the first 3 squares
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent =  pickedColor;
	for (var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
})

resetButton.addEventListener("click", function(){
	//generate new colors
	colors = generateRandomColors(numSquares);
	//pick new random colors from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent =  pickedColor;
	//changes to play again to new colors once the user click the reset button, otherwise it remains play again.
	this.textContent = "New Colors";
	//reset the span message to none when you clicke the reset button
	messageDisplay.textContent = "";
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	//changes the h1 to the regular background color
	h1.style.background = "steelblue";
})


//display the RGB number on the page.
colorDisplay.textContent = pickedColor;
//loops throught the squares to give each a diferent color
for(var i = 0; i < squares.length; i++){
	//add initial colors to square
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//display the rgb number when you click any of the squares
		var clickedColor = this.style.background;
		//compare color to puckedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			//displays play again when you win
			resetButton.textContent = "Play again?";
			//when correct all colors will change to the correct color.
			changeColors(clickedColor);
			//changes the h1 background to the clicked color.
			h1.style.background = clickedColor;
		}else{
			//wrong choice will make squares
			this.style.background = "#232323"
			//display try again message when you win.
			messageDisplay.textContent = "Try again"
		}
	});
}

//if correct, all colors will change to the correct color.
function changeColors(color){
	//loop through all squares
	for (var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.background = color;
	}
}

//randomly picking a 
function pickColor(){
	//randomly selects colors by the length of the array, 3-6
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function generateRandomColors(num){
	//make array
	var arr = [];
	//add num random colors to arr
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push to array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);
	"rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}












