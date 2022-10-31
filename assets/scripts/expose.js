// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  //set corresponding image and audio files when an option is selected
  var activity = document.getElementById("horn-select");
  
  activity.addEventListener("change", function() {
    //option value
    var value = activity.value;
    // console.log(value);

    //image
    var image = document.images[0];
    // console.log(image.src);

    //audio
    var audio = document.querySelector('audio');

    //set corresponding image and audio files given different options 
    if (value == "select") {
      image.src = "assets/images/no-image.png";
    } else if (value == "air-horn") {
      image.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    } else if (value == "car-horn") {
      image.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    } else if (value == "party-horn") {
      image.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    }
    //  console.log(audio.src);
  });

  //do things under different volume
  var slider = document.getElementById("volume");
  var volume = parseInt(slider.value);
  
  slider.addEventListener("change", function() {
    volume = parseInt(slider.value);
    // console.log(volume);

    //audio
    var audio = document.querySelector('audio');

    if (volume == 0) {
      //set volume icons
      document.images[1].src = "assets/icons/volume-level-0.svg";

    } else if (volume >= 1 && volume < 33) {
      document.images[1].src = "assets/icons/volume-level-1.svg";
    } else if (volume >= 33 && volume < 67) {
      document.images[1].src = "assets/icons/volume-level-2.svg";
    } else if (volume >= 67) {
      document.images[1].src = "assets/icons/volume-level-3.svg";
    }

    //set volume for audio element
    audio.volume = volume / 100;
    // console.log(audio.volume);
  });


  //play the audio when play button is clicked
  document.querySelector('button').onclick = function() {
    // console.log("button was clicked");
    const audio = document.querySelector('audio');
    // console.log(audio.src);
    //if party horn is selected, shoot out confetti
    // console.log("Checking if party horn is selected");
    // console.log(document.getElementById("horn-select").value);
    if (document.getElementById("horn-select").value == "party-horn") {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
      // console.log('Confetti added');
    }
    // play audio
    audio.play();
  }; 
}