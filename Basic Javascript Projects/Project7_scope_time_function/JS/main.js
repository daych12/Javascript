function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if(Time <12 == Time > 0) {
        Reply ="It is morning time!";
       }
       else if (Time > 12 == Time < 18) {
           Reply = "It is the afternoon.";
       }
       else {
           Reply = "It is evening time. ";
       }
       document.getElementById("Time_of_day").innerHTML = Reply;
}



var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_1() {
    var X = 10;
    document.write(20 + X + "<br>");

}
function Add_numbers_2() {        //This function displays additiion 
    document.write(X + 100);
}
Add_numbers_1();         
Add_numbers_2();

function get_Date() {              
    if (new Date().getHours() < 18) {
        document.getElementById("Gretting").innerHTML = "How are you today?";
    
    }
}


if (8 < 9) {
    document.write("The left number is smaller than the number on the right.")
}