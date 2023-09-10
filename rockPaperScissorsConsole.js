const choices = ["rock", "paper", "scissors"];

// 0 beats 3, 2 beats 1, 1 beats 2

compChoice = () => {
	let randNum = Math.floor(Math.random()* 3);
	return choices[randNum];
}

userPick = () => {
	console.log("Hello User!");
	console.log("Choose rock, paper, or scissors!");
	// get user input from console here!
	console.log(userChoice);
}


