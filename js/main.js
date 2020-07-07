var rayon = parseInt(prompt("Entrez la valeur du rayon du cercle : "));

function aireCercle (rayon){
    return (Math.PI * rayon*rayon);
}

function perimetreCercle (rayon){
    return (rayon * 2 * Math.PI);
}
console.log(rayon);
console.log("lair du cercle est de : "+ aireCercle(rayon).toFixed(2) + "\nLe perimètre du cercle est de : " 
                + perimetreCercle(rayon).toFixed(2));