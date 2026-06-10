let origDogs = ["Bulldog", "Beagle", "Labrador"];
let cats = new Array("Americal Curl", "Bengal");
let birds = new Array("Flacons", "Ducks", "Flamingoes");

let slicedDogs = origDogs.slice(1,2);
let copyDogs = [...origDogs];
let dogs = origDogs.slice(0);

let pushDog = dog.push("Golden Retriever");
let popDog = dogs.pop();
dogs[dogs.lenth] = "Poodle";

let addFirst = dogs.unshift("Goldern Retriver");
let shiftDog = dogs.shift();

dogs.splice(2,1, "Pug", "Boxer");

let animals = dogs.concat(cat,birds);
let newAnimal = [...dog, ...cats, ...birds].toString();
let sortDog = dog.slice(0).sort();
function scanArray([first, second]) {
    console.log("Scan: "+first+ " " + second);
}
scanArray(animals);
let joinAnimals = animals.join(" ");
let allAnimals = "";
for (let animal of animals) allAnimals += animal + " ";
console.log("Animals : " + allAnimals);