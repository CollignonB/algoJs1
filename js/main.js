function poolFilling(largeur, Longueur, profondeur, debit){
    var poolVolume = largeur * Longueur * profondeur;
    return poolVolume/debit;
}


console.log("il va faloir " + poolFilling(10,10,5, 20) + " minutes pour remplir la piscine");