function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
        }
        document.getElementById("Counting_to_Ten").innerHTML = Digit;
}
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
var cars = ["Saab", "Volvo", "BMW"];
document.getElementById().innerHTML
}
function constant_function() {
    const New_Shoes = {type:"Air Max", brand:"Nikes", color="White"};
    New_Shoes.color="white";
    New_Shoes.price = "$180";
    document.getElementById("Constant").innerHTML = "The cost of the" +
        New_Shoes.type + " was " + New_Shoes.price;
}
var X = 82;
document.write(X);
{
    let X = 33;
    document.write("<br" + X);
}
document.write("<br>" + X);
}
let car = {
    make: "Dodge ",
    model: "Challenger ",
    year: "1995 ",
    color: "black ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
} ;
document.getElementById("Car_Object").innerHTML = car.description();