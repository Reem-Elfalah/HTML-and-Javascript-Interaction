/*Basic Requirments
//0.Preparation

Download the link & Complete the project mentioned in the slides:
https://docs.google.com/uc?authuser=0&id=0B_KMvJgAi82ERmhqd1RYdTdHUXc&export=download
\ ----------Instructions----------\
 1. Start a new project for today by downloading this link: https://github.com/yanarchy/rbk-basic/archive/each-dom.zip to your Desktop (or somewhere else). Don't forget to rename the folder to something meaningful!
 2. Work on the following with your partner.
1.Look at the index.html file and discuss with a partner what the different HTML elements do. Please try to answer the following WITHOUT instructors. Please use Google or look through the previous exercises.

 a. What does class mean? What is it used for?
 b. What does id mean? What is it used for?
 c. What is the difference between them?
 d. How do you think they may be useful? 
2. Try the following in your console:

 document.getElementsByTagName('div');
document.getElementsByClassName('box');
document.getElementById('list');
3. What do they return?

4. Write a function called each that takes in an array and a callback. Each should loop through the array and pass each item in the array through the callback.

 function each (arr, callback) {
     // TODO: Your code here
}
5. Using your each, please add 'Hello World' to each of the divs with a class of 'box'. This should be written in your main.js file.

 function each (arr, callback) {
     // TODO: Your code here
}
 Hint:  You may want to look at .textContent
6. I need the picture to be smaller. Please give the picture a height of '300px'

7. Using your each function, please change all of the li elements to use the below data:

 var cities = ['San Francisco', 'Cairo', 'Tokyo', 'Nairobi'];
 Thus, when you are done, you should have this on your page:
     tSan Francisco
     Cairo
     Tokyo
     Nairobi
8. Bonus Challenge: Using ONLY JavaScript, please change the current image to something else (you decide!).
*/