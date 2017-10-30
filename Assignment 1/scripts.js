window.onload = function load()
{   
    document.getElementById("message-button").onclick = function hello()
    {
      alert("Hello! Welcome to my page!"); 
    }
    
    document.getElementById("demo").innerHTML = new Date();

    document.getElementById("previewButton").onclick = function preview() 
    { 
        document.getElementById("demo-two").innerHTML = "Thanks for listening!"
    } 
    
    document.getElementById("buyButton").onclick = function purchase() 
    { 
        document.getElementById("demo-two").innerHTML = "Thanks for your purchase!"
    } 

    document.getElementById("hello-button").onclick = function good() 
    {
        var greeting;
        var time = new Date().getHours();
        if (time < 12) {
            greeting = "Good morning!";
        } 
        else if (time > 12) 
        {
            greeting = "Good afternoon!";
        }
    document.getElementById("greetingText").innerHTML = greeting;
    }
}

 $(document).ready(function() {
            $('#nav_menu').slicknav({
                prependTo: "#mobile_menu"
            });
        });