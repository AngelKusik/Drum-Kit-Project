//Detecting Button Press

//Here we are selecting the buttons inside the html doc that contain the class "drum"
//I initially target the "button" class but I should have been more specific, so I switched to drum.
//We are using querySelectorAll which will return an array of buttons.
var buttonList = document.querySelectorAll(".drum"); 


//Next, we use a for loop to add an addEventListener method to each button on the array.
//The event listener will listen for a click and will trigger the anonymous function when one of the buttons get clicked 
//Note: Initially the function would just trigger an alert for testing purposes.
for (var i = 0; i < buttonList.length; i++) {
  buttonList[i].addEventListener("click", function() {
      
    //Now we have to identify which button has triggered the function using "this" which contain the
    //identity of the button. If we tap into the innerHTML property of this
    //we can for example see which letter the button has and use it to differenciate then.
    var buttonInnerHTML = this.innerHTML;

    //Now we call the addSound() function and pass in the button that has triggered the function. 
    
    addSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

   });
 }


 //Detecting Keyboard Press

//Here we are adding an event listener that will listen for a keypress to the entire html doc.
//When any keyboard key is pressed it will trigger the anonymous function.
//The event that we are passing to the function refers to the KeyboardEvent that the event listener detected.
document.addEventListener("keypress", function(event) { 
  //Now we access the key propertie of the event which is a string value identifying the key that was pressed 
  //and make it into a variable.
  var keyDown = event.key;

  //Finally we pass the key value to the addSound() function.

  addSound(keyDown);

  //And to the buttonAnimation function
  buttonAnimation(keyDown);

});

//FUNCTIONS

//Playing the Corresponding Sound

//Now we check the key value passed using the switch block to see if the button/key pressed 
//has a corresponding sound. 

function addSound(key) {

  switch (key) {
    case "w":
      //Create a variable and assign it a new Audio object to which we will pass in the location of the corresponding sound.
      var audio = new Audio('sounds/crash.mp3');
      //next call a method called play to our audio object
      audio.play();
      break;
    //Same thing for the other buttons
    case "a":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "s":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "d":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "j":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "k":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    case "l":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;        

    default: console.log();
  }
}

//Button Animation

function buttonAnimation(key) {

  //Here we are going to use the querySelector to target the unique class we have in each
  //button with the key name, to do so we have to specify that its a class, so we have to add a dot before the key name.
  var activeButton = document.querySelector("." + key);

  //What we are going to do next is using a class that we already defined on our CSS called pressed to 
  //apply a diferent style to the button when its pressed.

  activeButton.classList.add("pressed");

  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
  
}