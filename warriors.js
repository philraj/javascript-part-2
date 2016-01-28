/*Create a constructor function called Warrior that can create new warriors. This function will take parameters name, and gender. name can be any string, gender can be M or F. It should create a warrior that has these properties:
name: the value that was passed to the constructor
gender: the value that was passed to the constructor
level: 1
weapon: wooden sword
power: a random number between 1 and 100
In addition to that, every object that gets created should have the following methods:
fight: will output to the console: " rushes to the arena with "
faceoff: faceoff takes one argument called opponent. Based on the power of each opponent, this method should output to the console which player won the fight based on their power. Be as creative as you like with the text of this method :)
Finally, create a bunch of warriors and make them fight together.*/
function Warrior (name, gender) {
    this.name = name;
    
    if (gender === "M" || gender === "F") {
        this.gender = gender;
    }
    else {
        throw new Error ("I only understand 'M' or 'F', sorry!");
    }
    
    this.level = 1;
    this.weapon = "wooden sword";
    this.power = Math.floor( Math.random() * 100 ) + 1;
    
    this.fight = function (opponent) {
        console.log(this.name + " rushes to the arena with " + opponent.name + "...");
    }
    
    this.faceoff = function (opponent) {
        console.log(this.name + " hits " + opponent.name + " in the face with a " + this.weapon + "!");
        console.log(this.name + " takes a knee to the stomach from " + opponent.name + "!");
        console.log(this.name + " blocks an attack by " + opponent.name + "!");
        console.log(this.name + " and " + opponent.name + " start to grapple...");
        
        if (this.power > opponent.power) {
            console.log(this.name + " emerges as the victor! " + opponent.name + " explodes into a fine mist.");
        }
        else if (this.power === opponent.power) {
            console.log(this.name + " and " + opponent.name + " decide to patch things up and walk away as friends. BOOOO!");
        }
        else {
            console.log(this.name + " loses the fight and falls apart. Disgusting. " + opponent.name + " is the victor.");
        }
    }
}

var warrior1 = new Warrior("Isaac", "M");
var warrior2 = new Warrior("Mary", "F");
var warrior3 = new Warrior("Judas", "M");
var warrior4 = new Warrior("Lilith", "F");

warrior1.fight(warrior2);
warrior1.faceoff(warrior2);
console.log();
warrior3.fight(warrior4);
warrior3.faceoff(warrior4);