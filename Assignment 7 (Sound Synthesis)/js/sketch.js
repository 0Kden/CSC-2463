//Kaden Wyble
//899240787

let pitch = 1000;

let osc = new Tone.AMOscillator(pitch,'sine','sine').start();
let gain = new Tone.Gain().toDestination();

let pan = new Tone.Panner().connect(gain);
let ampEnv = new Tone.AmplitudeEnvelope({
  attack: 0.005,
  decay: 0.15,
  sustian: 0,
  release: 0.015
}).connect(pan);
osc.connect(ampEnv);


let melody = [
  "C3",
  ["C#3", "D#3"],
  "B2", "G#2",
  ["C3", "D3"],
  "C3", "B2", "C#3"
];
let seq;

let gain2 = new Tone.Gain(-5).toMaster();
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

  console.log(note);
}, melody, '4n');  


Tone.Transport.bpm.value = 80; 
Tone.Transport.start(); 
Tone.Transport.loop = true; 
Tone.Transport.loopStart = 0; 
Tone.Transport.loopEnd = '2:0:0';


function playSeq() {
  Tone.start();
  seq.start();
}

function preload() {
  img = loadImage("raygun.png");
}

function setup() {
  createCanvas(600,600);
  background(200);
  playSeq();
  Tone.start();
}

function draw() {
  fill(50, 0, 50);
  textSize(15)
  textAlign(10, 10);
  text("Melody begins to play", 10, 20);
  text("Click to fire Raygun", 10, 40);
  synth.volume.value = -20;
  
}

var released = true;

function mouseReleased(){
  clear();
  background(200);
  osc.frequency.linearRampToValueAtTime(1000,'+.2');
  released = true;
	return false;
}

function mousePressed(){
	if(!released){
		return;
	}
	released = false;
  img.resize(450, 450);
  image(img, 50, 25);
 
  Tone.start();
  console.log('pressed');
  raygun();
  
}

function raygun() { 
  ampEnv.triggerAttackRelease('6n');
  osc.frequency.linearRampToValueAtTime(100,'+.7');
  console.log(osc.frequency.value);
}
