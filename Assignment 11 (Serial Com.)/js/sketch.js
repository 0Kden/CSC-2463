/*  Kaden Wyble
    899240787
*/

let serial;
let bright;
let latestData = "waiting for data";

function setup() {
  createCanvas(windowWidth, windowHeight);

  serial = new p5.SerialPort();

  serial.list();
  serial.open('COM4');

  serial.on('connected', serverConnected);

  serial.on('list', gotList);

  serial.on('data', gotData);

  serial.on('error', gotError);

  serial.on('open', gotOpen);

  serial.on('close', gotClose);

  button = createButton('Let there be Light!!!');
  button.position(200,200);
  button.mousePressed(light);
  button2 = createButton('Darkness!!!');
  button2.position(220,220);
  button2.mousePressed(dark);
  
}

function light() {
  bright = 225;
  serial.write(bright);
  console.log(bright);
}

function dark() {
  bright = 0;
  serial.write(bright);
  console.log(bright);
}



function serverConnected() {
  print("Connected to Server");
}

function gotList(thelist) {
  print("List of Serial Ports:");

  for (let i = 0; i < thelist.length; i++) {
    print(i + " " + thelist[i]);
  }
}

function gotOpen() {
  print("Serial Port is Open");
}

function gotClose(){
  print("Serial Port is Closed");
  latestData = "Serial Port is Closed";
}

function gotError(theerror) {
  print(theerror);
}

function gotData() {
  let currentString = serial.readLine();
    trim(currentString);
  if (!currentString) return;
  console.log(currentString);
  latestData = currentString;
}

function draw() {
  if (latestData == 0) {
    background(255,100,100);
  }
  else { // if it is pressed, we get a 1
    background(100,100,255);
  }
  fill(0,0,0);
  text(latestData, 10, 20);
}
