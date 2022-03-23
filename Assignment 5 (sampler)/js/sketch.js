//Kaden Wyble
//899240787

let sounds = new Tone.Players({
  'Bass'  : "media/19Bass.wav",
  'Kick'  : "media/kick4.wav",
  'Hat'   : "media/hat5.wav",
  'Perc'  : "media/perc3.wav",
  'Snare' : "media/snare3.wav",
  'Vox'   : "media/CirclesVox.wav",
  'Glock' : "media/40milesGlock.wav",
  'Blue'  : "media/BlueSynth.wav",
  'Amen'  : "media/amen.wav",
})


let soundNames = ['Bass','Kick','Hat','Perc', 'Snare','Vox','Glock','Blue','Amen']

const delay = new Tone.FeedbackDelay("8n",0.1);

const phaser = new Tone.Phaser({
	frequency: 15,
	octaves: 5,
	baseFrequency: 1000
});

let buttons = [];
let slider;
let slider2;

function setup() {
  createCanvas(400, 400);

  sounds.connect(delay);
  delay.connect(phaser);
  phaser.toDestination();

  slider = createSlider(0., 1., 0.5, 0.05);
  slider.position(150, 40);
  slider.mouseReleased (() => { 
    delay.delayTime.value = slider.value();
    console.log("D-Value: ", slider.value());
  })
  
  slider2 = createSlider(0., 1., 0.5, 0.05);
  slider2.position(150, 60);
  slider2.mouseReleased(() => {
    phaser.frequency.value = slider2.value();
    console.log("P-Value: ", slider2.value());
  })

  soundNames.forEach((word, index)=> {
    buttons[index] = createButton(word);
    buttons[index].position(10,30+index*30);
    buttons[index].mousePressed(() => playSound(word));
  })

}

function draw() {
  background(220);

  textSize(15);
  text("Press some buttons and move some sliders!", 10, 20);

  textSize(15);
  text("Delay", 100, 54);

  textSize(15);
  text("Phaser", 100, 74);
}

function playSound(whichSound) {
  if (whichSound === 'Bass'){
    sounds.player('Bass').start();
  } 
  else if (whichSound === 'Kick') {
    sounds.player('Kick').start();
  }
  else if (whichSound === 'Hat') {
    sounds.player('Hat').start();
  }
  else if (whichSound === 'Perc') {
    sounds.player('Perc').start();
  }
  else if (whichSound === 'Snare') {
    sounds.player('Snare').start();
  }
  else if (whichSound === 'Vox') {
    sounds.player('Vox').start();
  }
  else if (whichSound === 'Glock') {
    sounds.player('Glock').start();
  }
  else if (whichSound === 'Blue') {
    sounds.player('Blue').start();
  }
  else if (whichSound === 'Amen') {
    sounds.player('Amen').start();
  }
}
