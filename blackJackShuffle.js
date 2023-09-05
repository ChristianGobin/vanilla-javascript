
// Lets make a 1 plauer console blackjack game using vanilla js


let clubSuit = {
    2: 2,
    3: 3, 
    4: 4,
    5: 5, 
    6: 6, 
    7: 7, 
    8: 8, 
    9: 9, 
    10: 10, 
    'j': 10, 
    'q': 10, 
    'k': 10,
    'a': [1, 11]
}

let diamondSuit = {
    2: 2,
    3: 3, 
    4: 4,
    5: 5, 
    6: 6, 
    7: 7, 
    8: 8, 
    9: 9, 
    10: 10, 
    'j': 10, 
    'q': 10, 
    'k': 10,
    'a': [1, 11]
}

let spadeSuit = {
    2: 2,
    3: 3, 
    4: 4,
    5: 5, 
    6: 6, 
    7: 7, 
    8: 8, 
    9: 9, 
    10: 10, 
    'j': 10, 
    'q': 10, 
    'k': 10,
    'a': [1, 11]
}

let heartSuit = {
    2: 2,
    3: 3, 
    4: 4,
    5: 5, 
    6: 6, 
    7: 7, 
    8: 8, 
    9: 9, 
    10: 10, 
    'j': 10, 
    'q': 10, 
    'k': 10,
    'a': [1, 11]
}

let deck = [clubSuit, diamondSuit, spadeSuit, heartSuit];





function shuffle(){
    let randSuit = deck[Math.floor(Math.random() * 3)];
    let randCard = Math.floor(Math.random() * 12);
    let ace;
    if(randCard >= 9 && randCard != 12 ){
        randCard = 8;
    } else if (randCard == 13) {
        
    }
    console.log("Your Suit is " + randSuit + " your first card is: " + randCard);
};

shuffle();