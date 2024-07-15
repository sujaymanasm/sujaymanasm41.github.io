(function() {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
  
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } else {
        helloSpeaker.speak(names[i]);
      }
    }
  
    const mainElement = document.getElementById("output");
    if (mainElement) {
      mainElement.innerHTML += "Function from script.js is called!<br>";
    } else {
      console.error("element 'output' not found");
    }
  })();