var attempt = 3;

function validate()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "Student" && password == "student123")
    {
        alert("Login Successful");
        window.location = "accountinfo.html";
        return false;
    }
    else
    {
        alert("Error: Invalid username or pasword.");
    }
}