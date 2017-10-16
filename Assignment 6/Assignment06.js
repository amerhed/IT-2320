var Main = {};

Main.person = function(firstName,lastName, age, characterName)
{
    this.FirstName = firstName;
    this.LastName = lastName;
    this.Age = age;
    this.characterName = characterName;
    
}

Main.person.prototype.nameAndCharacter = function()
    {
         return this.FirstName + " " + this.LastName + ", " + this.characterName;
    }

Main.Daniel = new Main.person("Daniel", "Radcliffe", 28, "Harry");
Main.Emma = new Main.person("Emma", "Watson", 27, "Hermione");
Main.Rupert = new Main.person("Rupert", "Grint", 29, "Ron")
Main.Tom = new Main.person("Tom", "Felton", 30, "Draco")
Main.Bonnie = new Main.person("Bonnie", "Wright", 26, "Ginny")
Main.Robbie = new Main.person("Robbie", "Coltrane", 67, "Ginny")

document.body.innerHTML = Main.Emma.nameAndCharacter();
document.body.innerHTML += "<br/>";
document.body.innerHTML += Main.Daniel.nameAndCharacter();
document.body.innerHTML += "<br/>";
document.body.innerHTML += Main.Rupert.nameAndCharacter();
document.body.innerHTML += "<br/>";
document.body.innerHTML += Main.Tom.nameAndCharacter();
document.body.innerHTML += "<br/>";
document.body.innerHTML += Main.Bonnie.nameAndCharacter();
document.body.innerHTML += "<br/>";
document.body.innerHTML += Main.Robbie.nameAndCharacter();