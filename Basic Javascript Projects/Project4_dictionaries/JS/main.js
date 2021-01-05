function my_Dictionary() {      //This function displays a dictionary 
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Rotttweiler",
        Age: "3",
        Sound: "Bark!"

    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}