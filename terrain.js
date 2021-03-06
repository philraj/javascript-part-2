/*Create a constructor function called Tile that can create new tiles. This function will take parameters x and y and create an object that has these properties:
x: the value that was passed to the constructor
y: the value that was passed to the constructor
height: a random number between 1 and 3
type: a random word between grass, rocks or water
condition: a random word between burning, normal or frozen
In addition to that, every object that gets created should have the following methods:
freeze: if the object is burning, then its condition should change to normal. if the object is normal then its condition should change to frozen and if it is frozen, its height should increment by 1
burn: if the object is frozen, then it will become normal. if the object is normal, then it should change to burning. if it is already burning, then its height should decrement by 1 until it gets to 0.
Write a piece of code that will use the Tile constructor to create a 20x20 map of Tiles. The map will be a 2D array (array inside array).
Output the map to the console in the following way:
For each tile, output the height of the tile as an "icon" for that tile
Go thru all the map again, randomly burning and freezing some tiles. Then, re-output the map in the same way again*/

var tilePrototype = {
    
    freeze: function () {
        if (this.condition === "burning") {
            this.condition = "normal";
        }
        else if (this.condition === "normal") {
            this.condition = "frozen";
        }
        else {
            this.height++;
        }
    },
    
    burn: function () {
        if (this.condition === "frozen") {
            this.condition = "normal";
        }
        else if (this.condition === "normal") {
            this.condition = "burning";
        }
        else {
            if (this.height > 0) this.height--;
        }
    }
}

function makeTile (x, y) {
    var tile = Object.create(tilePrototype);
    
    tile.x = x;
    tile.y = y;
    tile.height = Math.floor( Math.random()*3 ) + 1;
    
    var generateType = function () {
        var num = Math.floor( Math.random()*3 );
        
        switch (num) {
            case 0:
                return "grass";
            case 1:
                return "rocks";
            case 2:
                return "water";
        }
    }
    
    tile.type = generateType();
    
    var generateCondition = function () {
        var num = Math.floor( Math.random()*3 );
        
        switch (num) {
            case 0:
                return "burning";
            case 1:
                return "normal";
            case 2:
                return "frozen";
        }
    } 
    
    tile.condition = generateCondition();
    
    return tile;
}



//time to use the above code...
//creating a 20x20 array of tiles
var terrain = [];

for (var i = 0; i < 20; i++) {
    terrain[i] = [];
    
    for (var j = 0; j < 20; j++) {
        terrain[i][j] = makeTile(i,j);
    }
}


//output map view
function displayMap (array) {
    var output = "";
    
    array.forEach( function(value, i) {
        array[i].forEach( function(value, j) {
             output += array[i][j].height + " ";
        });
        
        output += "\n";
    });
    
    return output;
}

console.log("Initial state of tile map:\n" + displayMap(terrain)); 

//burn and freeze some tiles
terrain.forEach( function(value, i) {
    terrain.forEach( function(value, j) {
        var coinFlip = Math.floor( Math.random() * 2 );
        
        if (coinFlip === 0) terrain[i][j].burn();
        else terrain[i][j].freeze();
    });
});

console.log("Tile map after random freezing and burning:\n" + displayMap(terrain));