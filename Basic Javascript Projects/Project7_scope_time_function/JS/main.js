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
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Gretting").innerHTML = "How are you today?";
    
    }
}
document.getElementById("Counting").innerHTML = Count();

if (8 < 9) {
    document.write("The left number is smaller than the number on the right.")
}