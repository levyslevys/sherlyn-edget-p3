//header element
var myDate = new Date();
var time;
time = myDate.getHours();
if (time < 12) {
    document.getElementById("topheading").innerHTML = "<h1>Good Morning!</h1>";
} else if (time < 18) {
    document.getElementById("topheading").innerHTML = "<h1>Good Afternoon!</h1>";
} else {
    document.getElementById("topheading").innerHTML = "<h1> Good Night!</h1>";
}
//
document.getElementById("topheading").innerHTML = "<h1> Good Morning!</h1>";

//footer element 
document.getElementById("myFooter").innerHTML = "<h3>Copyright &copy;2019</h3>";