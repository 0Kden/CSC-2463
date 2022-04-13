/* Kaden Wyble
 * 899240787
 */
 const int switchPin = 2; 
const int ledPin = 4;
int switchVal = 0; 

void setup() {
  pinMode(switchPin, INPUT);
  pinMode(ledPin,OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int brightness;
 if (Serial.available()) {
  brightness = Serial.read();
  Serial.println(brightness);
  digitalWrite(ledPin, brightness);
 }
 
 
  switchVal = digitalRead(2);
  Serial.println(switchVal);
  delay(10);
}
