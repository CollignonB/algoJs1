var hideNum = 15;

var playerGuess = parseInt(prompt("Choisissez un nombre : "), 10);
console.log(typeof(playerGuess));

while(playerGuess !== hideNum){
    if(playerGuess > hideNum){
        playerGuess = parseInt(prompt("Votre choix est plus grand que le nombre caché, Réessayez : "));
    }else if (playerGuess < hideNum){
        playerGuess = parseInt(prompt("Votre choix est plus petit que le nombre caché, Réessayez : "));
    }
}
    alert("Vous avez gagné bravo!");