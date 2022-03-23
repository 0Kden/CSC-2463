let color = ["red", "orange", "yellow", "lime", "cyan", "blue", "magenta", "saddleBrown", "white", "black"];

let gain = new Tone.Gain().toDestination();

let sounds = new Tone.Players({
  'Cbrush'  : "sounds/carpetbrush.wav",
  'spaper'  : "sounds/spaper.wav"
})

let soundNames = ['Cbrush','spaper'];

let melody = [
  "G5", ["F5", "B4"], 
  ["B4", "C5"], "E5", ["D5","G5"], "G5",
  "G5", ["D5", "G4"], "A5", 
  "B5", ["G3"], "D4", "G4",
 
];
let seq;

let gain2 = new Tone.Gain(-5).toDestination();
synth = new Tone.Synth({
  oscillator: {
    type: "sine",
  },
  envelope: { 
    attack: 0.05,
    decay: 0.5,
    sustain: 1,
    release: 5
  }
}).connect(gain2); 


seq = new Tone.Sequence(function(time, note) { 
 synth.triggerAttackRelease(note, 0.1);
}, melody, '4n');  


Tone.Transport.bpm.value = 90; 
Tone.Transport.start(); 
Tone.Transport.loop = true; 
Tone.Transport.loopStart = 0; 
Tone.Transport.loopEnd = '3.199:0:0';


function playSeq() {
  Tone.start();
  seq.start();
}

function setup() {
  createCanvas(1000, 700);
  background(220);
  bColor = "black";
  playSeq();
  sounds.toDestination();
  Tone.start();

  button = createButton('Clear');
  button.position(5,675);
  button.mousePressed(cl);
}

function cl() {
  sounds.player('Cbrush').start();
  clear();
  background(220);
  Tone.Transport.bpm.value = 90;
}

function count() {
  if(mouseIsPressed){
    if(Tone.Transport.bpm.value < 130){
      Tone.Transport.bpm.value += .025;
      console.log(Tone.Transport.bpm.value);
    }
  }
}
function draw() {
  
  synth.volume.value = -30;
  if(mouseIsPressed){
    if (mouseX <= 30) {
      if (mouseY <= 27) {
        bColor = color[0];
        sounds.player('spaper').start();
      } else if (mouseY < 57) {
        bColor = color[1];
        sounds.player('spaper').start();
      } else if (mouseY < 84) {
        bColor = color[2];
        sounds.player('spaper').start();
      } else if (mouseY < 111) {
        bColor = color[3];
        sounds.player('spaper').start();
      } else if (mouseY < 138) {
        bColor = color[4];
        sounds.player('spaper').start();
      } else if (mouseY < 165) {
        bColor = color[5];
        sounds.player('spaper').start();
      } else if (mouseY < 192) {
        bColor = color[6];
        sounds.player('spaper').start();
      } else if (mouseY < 219) {
        bColor = color[7];
        sounds.player('spaper').start();
      } else if (mouseY < 246) {
        bColor = color[8];
        sounds.player('spaper').start();
      } else if (mouseY < 273) {
        bColor = color[9];
        sounds.player('spaper').start();
      }
    }
    stroke(bColor);
    strokeWeight(3);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  squares();
  count();
}

function squares() {
  noStroke();

  for (let i = 0; i < color.length; i++) {
    fill(color[i]);
    i == 0 ? rect(5, 3, 30) : rect(5, 3 + 27 * i, 30);
  }
}