function Hello() {
                alert("Hello! Welcome to my page!");
            }

document.getElementById("demo").innerHTML = Date();

function myfunction(txt) { 
    document.getElementById("demo-two").innerHTML = txt
} 

function myFunction() {
    var greeting;
    var time = new Date().getHours();
    if (time < 12) {
        greeting = "Good morning!";
    } else if (time > 12) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }
document.getElementById("demo-three").innerHTML = greeting;
}

