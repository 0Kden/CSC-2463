//Kaden Wyble
//899240787

const synth = new Tone.AMSynth({
  "harmonicity": 3.999,
  "oscillator": {
      "type": "square"
  },
  "envelope": {
      "attack" : 0.03,
      "decay"  : 0.3,
      "sustain": 0.7,
      "release": 0.8
  },
  "modulation" : {
      "volume" : 12,
      "type"   : "square6"
  },
  "modulationEnvelope" : {
      "attack" : 2,
      "decay"  : 3,
      "sustain": 0.8,
      "release": 0.1
  }
});
const feedbackDelay = new Tone.FeedbackDelay({
  "delayTime"   : "8n", 
  "feedback"    : 0.4,
  "wet"         : 0.5
});

const pShift = new Tone.PitchShift({
  "pitch": 2,
	"windowSize": 0.04,
	"delayTime": 0.03,
	"feedback": 0.5,
  "wet": 0.5

}).toDestination();

synth.connect(feedbackDelay);
feedbackDelay.connect(pShift)

let notes = {
  "a" : 'C4',
  "A" : 'C4',
  "s" : 'D4',
  "d" : 'E4',
  "f" : 'F4',
  "g" : 'G4',
  "h" : 'A4',
  "j" : 'B4',
  "k" : 'C5'
}

let slider;
let slider2;
let button;
let button2;
let button3;
let button4;

function setup() {
  createCanvas(400,400);
  synth.release = 3;
  synth.resonance = 0.98;

  slider = createSlider(0., 1., 0.0, 0.05);
  slider.position(150, 40);

  button = createButton('None');
  button.position(10, 40);
  button.mousePressed(none);

  button2 = createButton('Chimes');
  button2.position(10, 60);
  button2.mousePressed(chimes);

  button3 = createButton('DownTheWell');
  button3.position(10, 80);
  button3.mousePressed(DownTheWell);

  button4 = createButton('Fifths');
  button4.position(10, 100);
  button4.mousePressed(Fifths);
}


function none() {
  pShift.pitch.value = 0;
  pShift.windowSize.value = 0;
	pShift.delayTime.value = 0;
  pShift.feedback.value = 0;
  pShift.wet.value = 0;
}
function chimes() {
  pShift.pitch.value = 2;
  pShift.windowSize.value = 0.04;
	pShift.delayTime.value = 0.03;
  pShift.feedback.value = 0.5;
  pShift.wet.value = 0.5;
}
function DownTheWell() {
  pShift.pitch.value = -5;
  pShift.windowSize.value = 0.05;
	pShift.delayTime.value = 0.3;
  pShift.feedback.value = 0.2;
  pShift.wet.value = 0.5;
}
function Fifths() {
  pShift.pitch.value = 7;
  pShift.windowSize.value = 0.1;
	pShift.delayTime.value = 0;
  pShift.feedback.value = 0;
  pShift.wet.value = 0.5;
}

function draw() {
  feedbackDelay.delayTime.value = slider.value();
  background(200);

  textSize(15);
  text('Pitch Shift:', 10, 30);

  textSize(15);
  text('Delay:', 150, 30);
}


function keyPressed() {
 let toPlay = notes[key];

  if (toPlay = notes[key]){
    synth.triggerAttackRelease(toPlay, 0.5);
    console.log(toPlay);
    
    return toPlay;
  }
  else {
    console.log("NOT A NOTE KEY");
  }
}