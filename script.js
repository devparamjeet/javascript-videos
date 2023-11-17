document.addEventListener("DOMContentLoaded", function () {
    // Get references to the play/pause button and the audio element
    var playPauseButton = document.querySelector(".cir-box-mid");
    var audio = new Audio("./music.mp3"); // Replace "your-audio-file.mp3" with the actual path to your audio file
  
    // Add a click event listener to the play/pause button
    playPauseButton.addEventListener("click", function () {
      if (audio.paused) {
        audio.play();
        playPauseButton.innerHTML = '<i class="ri-pause-fill"></i>';
      } else {
        audio.pause();
        playPauseButton.innerHTML = '<i class="ri-play-fill"></i>';
      }
    });
  
    // Update the time display as the audio is playing
    audio.addEventListener("timeupdate", function () {
      // Update the time display
      var currentTime = formatTime(audio.currentTime);
      var duration = formatTime(audio.duration);
      document.querySelector(".left").innerHTML = currentTime;
      document.querySelector(".right").innerHTML = duration;
  
      // Update the range input value to reflect the current playback position
      document.querySelector("#musicRange").value =
        (audio.currentTime / audio.duration) * 100;
    });
  
    // Function to format time in MM:SS format
    function formatTime(time) {
      var minutes = Math.floor(time / 60);
      var seconds = Math.floor(time % 60);
      return (
        (minutes < 10 ? "0" : "") +
        minutes +
        ":" +
        (seconds < 10 ? "0" : "") +
        seconds
      );
    }
  
    // Update the range input value when the user interacts with it
    document.querySelector("#musicRange").addEventListener("input", function () {
      var seekTime =
        (this.value / 100) * audio.duration;
      audio.currentTime = seekTime;
    });
  });
  