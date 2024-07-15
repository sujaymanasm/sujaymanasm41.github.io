(function(window) {
    var helloSpeaker = {};
    var speakWord = "Hello";
  
    helloSpeaker.speak = function(name) {
      console.log(speakWord + " " + name);
      const outputElement = document.getElementById("output");
      if (outputElement) {
        outputElement.innerHTML += speakWord + " " + name + "<br>";
      }
    };
  
    window.helloSpeaker = helloSpeaker;
  })(window);