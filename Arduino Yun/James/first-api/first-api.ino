#include <YunServer.h>
#include <YunClient.h>

#include <Servo.h>

YunServer server;
Servo servoX;
Servo servoY;

char DATA_DELIM = ':';
int MAX_DATA_SIZE = 30;
int FIRE_PIN = 2;

void setup() {
  Bridge.begin();
  server.listenOnLocalhost();
  server.begin();
  servoX.attach(9);
  servoY.attach(8);
  pinMode(FIRE_PIN, OUTPUT);
}

void loop() {
  YunClient client = server.accept();

  if (client) {
    String nextCommand = client.readStringUntil('/');

    do {
      // get the data after the command itself
      String data = client.readStringUntil('/');
      Serial.println("*" + nextCommand + "*");

      // get the index of the first data seperator
      int index = getIndexOfDataDelim(data);
      
      // I LIKE TO MOVE IT MOVE IT
      if (nextCommand == "move") {

        int x_axis = data.substring(0, index).toInt();
        int y_axis = data.substring(index+1).toInt();
        
        Serial.println("x_axis: " + x_axis);
        Serial.println("y_axis: " + y_axis);

        servoX.write(x_axis);
        servoY.write(y_axis);
        
      }
      
      // FIRE IN THE HOLE!
      if (nextCommand == "fire") {
        int fireCount = data.toInt();
        for (int i = 0; i < fireCount; i++) {
          Serial.println("firing");
          digitalWrite(FIRE_PIN, HIGH);
          delay(500);
          digitalWrite(FIRE_PIN, LOW);
          delay(500);
        }
      }
      
      // read the next command
      nextCommand = client.readStringUntil('/');

    } while (nextCommand.length() > 0);

    client.println("Status: 200");
    client.println("Access-Control-Allow-Origin: *");
    client.println("Access-Control-Allow-Methods: GET");
    client.println("Content-Type: text/html");

    client.stop();
  }

  delay(50);

}

// neat little method for getting the first index of the seperator
int getIndexOfDataDelim(String data) {
  char charArrayOfData[MAX_DATA_SIZE];
  
  data.toCharArray(charArrayOfData, MAX_DATA_SIZE);
  
  return strchr(charArrayOfData, DATA_DELIM) - charArrayOfData;
}
