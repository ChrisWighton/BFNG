#include <Bridge.h>
#include <YunServer.h>
#include <YunClient.h>

YunServer server;

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
      String data = client.readStringUntil('/');
   
      Serial.println(nextCommand + ", " + data);
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
