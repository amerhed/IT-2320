$(document).ready(function()
{
    	$(".button1").click(function()
	{
		var index = createIndexAsObject();
		displayIndex(index);
	});

	$(".button2").click(function()
	{
		var index = createIndexAsJSON();
		displayIndex(index);
	});
    
	$(".button").mouseover(function()
	{
		$(this).css("border", "2px dashed pink");
	});

	$(".button").mouseout(function()
	{
		$(this).css("border", "2px solid darkblue");
	});


});

function displayIndex(index)
{
	alert(index.genre);
	alert(index.item);
	alert(index.list[0].title);
	alert(index.list[0].authorFirst);
	alert(index.list[0].authorLast);
    alert(index.list[0].publishDate);

	for (var i=0; i<index.list.length; i++)
	{
		var book = index.list[i];
		alert(book.title + ", " + book.authorFirst + " " + book.authorLast + ", " + book.publishDate + ".");
	}
}

function createIndexAsJSON()
{
    return {
        
        "genre" : "Dark Fantasy",
        "item" : "Books",
        "list" : [
            
            {
                "title" : "Coraline",
                "authorFirst" : "Neil",
                "authorLast" : "Gaiman",
                "publishDate" : 2002
            },
            
            {
                "title" : "The Masque of the Red Death",
                "authorFirst" : "Edgar Allen",
                "authorLast" : "Poe",
                "publishDate" : 1842
            },
            
            {
                "title" : "Weaveworld",
                "authorFirst" : "Clive",
                "authorLast" : "Barker",
                "publishDate" : 1987
            }
             
         ]
       
    };
}

function createIndexAsObject()
{
	var index = new Object();
	index.genre = "Dark Fantasy";
	index.item = "Books";

	var coraline = new Object();
	coraline.title = "Coraline";
	coraline.authorFirst = "Neil";
	coraline.authorLast = "Gaiman";
    coraline.publishDate = 2002;

	var masque = new Object();
	masque.title = "The Masque of the Red Death";
	masque.authorFirst = "Edgar Allen";
	masque.authorLast = "Poe";
    masque.publishDate = 1842;

	var weaveworld = new Object();
	weaveworld.title = "Weaveworld";
	weaveworld.authorFirst = "Clive";
	weaveworld.authorLast = "Barker";
    weaveworld.publishDate = 1987;

	index.list = new Array(coraline, masque, weaveworld);

	return index;
}