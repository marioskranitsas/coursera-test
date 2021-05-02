(function () {
  const byeSpeaker = {}
  const speakWord = "Bye";
  
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }
  window.byeSpeaker = byeSpeaker
})(window)