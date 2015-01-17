#include <YunServer.h>
#include <YunClient.h>

YunServer server;

char DATA_DELIM = ':';
int MAX_DATA_SIZE = 30;

void setup() {
  Bridge.begin();
  server.listenOnLocalhost();
  server.begin();
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

        Serial.println("x_axis: " + data.substring(0, index));
        Serial.println("y_axis: " + data.substring(index + 1));
      }
      
      // FIRE IN THE HOLE!
      if (nextCommand == "fire") {
        int fireCount = data.toInt();
        for (int i = 0; i < fireCount; i++) {
          Serial.println("firing");
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
