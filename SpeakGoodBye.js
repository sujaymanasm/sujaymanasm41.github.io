(function(window) {
    var byeSpeaker = {};
    var speakWord = "Good Bye";
  
    byeSpeaker.speak = function(name) {
      console.log(speakWord + " " + name);
      const outputElement = document.getElementById("output");
      if (outputElement) {
        outputElement.innerHTML += speakWord + " " + name + "<br>";
      }
    };
  
    window.byeSpeaker = byeSpeaker;
  })(window);