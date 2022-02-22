const readlineSync = require("readline-sync");

const pizzaFlavorManager = () => {
    console.log("Please choose your actions :\n");
    console.log("1 - List all the pizza flavors")
    console.log("2 - Add a new pizza flavor");
    console.log("3 - Remove a pizza flavor");
    console.log("4 - Exit this program\n");

    input = readlineSync.questionInt("What is your choice ? : ");
    switch (input) {
        case 1 :
            console.log("1")
            break; 
        case 2 : 
            console.log("2")
            break;
        case 3 : 
            console.log("3")
            break;
        case 4 :
            break;
        default: console.log("This is not a valid choice !")    
    }
}

pizzaFlavorManager();




// Exercise 7.4 - Pizza Flavors Manager
// Make an interactive program to manager your favorite pizza flavors. When launched it must display a menu of this style:

// Hello! Welcome to the Pizza Flavors Manager.

// Please choose your actions:

// 1 - List all the pizza flavors
// 2 - Add a new pizza flavor
// 3 - Remove a pizza flavor
// 4 - Exit this program

// Enter your action's number:
// When the user enter the number of an action he will trigger the appropriate action:

// List all the pizza flavors: Display the current list of pizza flavors. (There should be none if we just launched the program.)
// Add a new pizza flavor: Ask the user for a new pizza flavor to add to the list.
// Remove a pizza flavor: Ask the user for the number of the pizza flavor in the list he wants to remove.
// Each time one of the action has been performed it should return to the menu. (Except of course if we select to exit the program.)

// Bonus: Save the list of pizza flavors on the file system and reload it each time we launch the application.

// Exercise 7.5 - Array Sort
// Create a program that can sort an array without using Array.sort() or a similar method. Test it with multiple arrays of numbers.