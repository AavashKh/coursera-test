(function (window) {

  var speakWord = "Good bye";
  var byeSpeaker = function (name) {
    console.log(speakword + " " + name);
  }
  window.byeSpeaker = byeSpeaker;
})(window);