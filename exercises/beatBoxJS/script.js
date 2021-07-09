/**
 * Done: Create a keydown listener to track what keys are hit
 * Done: Create a Beat class to represent the beat object in utils.js
 * Done: Complete triggerBeat() to play upon the press of a,s,d,f,g,h,j,k,l
 * Done: Button pt1: Initialize color and element values
 * Done: Button pt2: Set button color upon initialization | Initialize button in beats["65"]
 * Done: Button pt3: Complete select function to set the color and shadow of button upon pressing
 * Done: Button pt4: Call the select() function upon key press ;)
 * Done: Button pt5: Add transition for button selection
 * Done: Button pt6: Remove the button style upon transition end | Use deselect function
 * Done: Complete all button instances with the following colors
 * Done: Add background image
 * First 3: #00fffe
 * 4,5,6,7: #FF00FF
 * 8, 9: #FFFFFF
 */
let beats = {
  65: {
    beat: new Beat("./assets/Piano Chord 331.mp3"),
    button: new Button("#00fffe", 65),
  },
  83: {
    beat: new Beat("./assets/Piano Chord 209.mp3"),
    button: new Button("#00fffe", 83),
  },
  68: {
    beat: new Beat("./assets/Piano Chord 208.mp3"),
    button: new Button("#00fffe", 68),
  },
  70: {
    beat: new Beat("./assets/Drum Sticks Hit 3.mp3"),
    button: new Button("#FF00FF", 70),
  },
  71: {
    beat: new Beat("./assets/Drum Snare Roll.mp3"),
    button: new Button("#FF00FF", 71),
  },
  72: {
    beat: new Beat("./assets/PREL Musical 57.mp3"),
    button: new Button("#FF00FF", 72),
  },
  74: {
    beat: new Beat("./assets/Cymbal Suspended 2.mp3"),
    button: new Button("#FF00FF", 74),
  },
  75: {
    beat: new Beat("./assets/Musical Compos 33.mp3"),
    button: new Button("#FFFFFF", 75),
  },
  76: {
    beat: new Beat("./assets/Musical Orches 4.mp3"),
    button: new Button("#FFFFFF", 76),
  },
};

/**
 * Function to play the beat upon as press of key
 * HINT: use the keyCode
 */
triggerBeat = (event) => {
  const keyCode = event.keyCode;
  const keyClick = event.srcElement.id;

  if (keyCode in beats) {
    let keyPress = beats[keyCode];
    keyPress.beat.play();
    keyPress.button.select();
  }

  if (keyClick in beats) {
    let keyPress = beats[keyClick];
    keyPress.beat.play();
    keyPress.button.select();
  }
};

/**
 * Keydown listener to fire triggerBeat function
 * HINT: Log the keyCode of the key
 */
// document.onclick = (event) => {
//   console.log(event);
// };

document.addEventListener("keydown", triggerBeat);

document.addEventListener("click", triggerBeat);
