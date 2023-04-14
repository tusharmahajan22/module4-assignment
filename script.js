(function () {
// Array of names
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// Loop over the names array and say either 'Hello' or "Good Bye"
for (var i = 0; i < names.length; i++) {

    // Retrieve the first letter of the current name in the loop.
    var firstLetter = names[i].charAt(0).toLowerCase();

    // Compare the 'firstLetter' retrieved in STEP 11 to lower case 'j'.
    // If the same, call byeSpeaker's 'speak' method with the current name
    // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
    // name in the loop.
    if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
    } else {
        helloSpeaker.speak(names[i]);
    }
}
})();