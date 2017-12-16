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

function validate_form()
{
    var username2 = document.getElementById("username2").value;
    var password2 = document.getElementById("password2").value;
    var email = document.getElementById("email").value;
    var emailConfirm = document.getElementById("emailConfirm").value;

    if ()
    {
        alert("Account Successfully Created");
    }

    else
    {
        alert("Error: Invalid Username, Password, or Email.");
    }
}
