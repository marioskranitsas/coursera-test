(function (window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (let i = 0; i < names.length; i++) {
    if (names[i].charAt(0).toLowerCase() === 'j') {
      window.helloSpeaker.speak(names[i])
    }
    else {
      window.byeSpeaker.speak(names[i])
    }
  }
})(window)
