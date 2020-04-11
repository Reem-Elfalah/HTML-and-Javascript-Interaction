//1-
//<img></img>
$('img').attr('src','http://i.imgur.com/nWGCwiE.gif')
// Our img tag doesn't have a src! Add one using jQuery!
// 2-
// <!DOCTYPE html>
// <html>
// <head>
// </head>

// <body id = "target">
// <button id= "beeperOne">Beeper</button>
// <button class = "beeperTwo">Beeper 2</button>
// <button class = "beeperThree">Beerper 3</button>
// <div></div>
// <p id = "output">HEY</p>
// <input id = "color"></input>
// <button id = "go">Click Me</button>

// <script src="https://code.jquery.com/jquery-2.1.1.js"></script>
// <script>
// 1
// </script>
// </body>
// </html>
// What will happen when I put the following where 1 is?

$('#go').on('click', function(){ $('#output').text( $('#color').val() ).css('color', 'red'); });
// Hint: If you need to, go ahead and test this out in a file of your own. But before you do, 
// it's important to read the code, reason about it and develop a hypothesis first. Then try it out.

// 3-
// 	I want to get an alert every time someone clicks on a button. But I don't know how! Show me how below!
$('#go').on('click', function(){ alert ('Hello')})
// 	Hint: I THINK this uses a jQuery event.
// 4-
// What does .append() do?

// 		Hint: You can google this one!
// Answer Choices:
// Insert content to the end of an element. correct answer
// Insert content to the beginning of an element.
// Add a .hide() effect to a specified content.
// Add a .show() effect to a specified content.
// 5-
// <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="utf-8">
// <title>practice jQuery</title>
// </head>
// <body>
// <div class = "show">
// </div>
// <div id="everything">
// <h1>Practice JQuery</h1>
// <p>Here's some text!</p>
// <p>Here's a second set of text!</p>
// <p>Lets show the Rat Pack</p>
// <div id="secret">We should hide this!</div>
// </div>
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js">
// </script>
// <script src="myScript.js"></script>
// <script>
// </script>
// </body>
// </html>

// I want to hide the secret. How would I do that?
$('#secret').hide();
// 6-
// Fill the following survey INDIVIDULLY, you can read the passage (in the survey) in pairs, but make sure you 
//fill the survey individully, we trust that each one will answer on his own
// HERE

// 7-
// $(body).css(background-color, 'green')
// This wont work! Why? Select all that apply.
// Answer Choices:
// body is not in a string
// It WILL run.
// the background-color is not in a string
// 8-

// <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="utf-8">
// <title>practice jQuery</title>
// </head>
// <body>
// <div id="everything">
// <h1>Practice JQuery</h1>
// <p>Here's some text!</p>
// <p>Here's a second set of text!</p>
// </div>
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js">
// </script>
// <script src="myScript.js"></script>
// <script>

// </script>
// </body>
// </html>
// I want to change the background color of the body to red using jQuery. How would I do this?

// 9-

// <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="utf-8">
// <title>practice jQuery</title>
// </head>
// <body>
// <div id="everything">
// <h1>Practice JQuery</h1>
// <p>Here's some text!</p>
// <p>Here's a second set of text!</p>
// <ol>
// <li>Here is thing one.</li>
// <li>Here is thing two.</li>
// <li>Here is thing three.</li>
// </ol>
// </div>
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js">
// </script>
// <script src="myScript.js"></script>
// <script>

// </script>
// </body>
// </html>
// I want to append a new list item of thing four. How would I do that?
//