
var convo = {
  "greeting": {
    "says": [
      "Hello.",
      "Megan here.",
      "Are you a robot or an alien?"
    ],
    "reply": [
      {
        "question": "Robot",
        "answer": "robotAnswer",
      },
      {
        "question": "Alien",
        "answer": "alienAnswer",
      }
    ]
  },
  "alienAnswer": {
    "says": [
      "👽",
    ],
    "reply": [
      {
        "question": "Start Over",
        "answer": "greeting",
      },
    ],
    "reply": [
      {
        "question": "Start Over",
        "answer": "greeting",
      },
    ]
  }
}
// set up the chatbot script
var giveMeBubbles = new Bubbles(
  document.getElementById('chat'), 	// attach chatbot to placeholder above ^^
  "giveMeBubbles"										// you need to pass the name of the constructor variable that evokes Bubble function here
);
// pass JSON to your function and you're done!
giveMeBubbles.talk(convo);
// this function is called when user asks for banana
robotAnswer = function () {
  alert("🤖");
  giveMeBubbles.talk(convo, "ice"); // the conversation can be easily restarted from here.
}
