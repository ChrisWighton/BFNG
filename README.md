# BFNG - Big Fuck-Off Nerf Gun
* * *

A Nerf / Arduino project brought to you by:
* James **For**mica &
* Chris Wigh**ton**

### Who we is?

This awesome duo combines to create **Forton Labs**. With their minor to fuck all experience in these types of projects they bring with them a Software and Mechatronic engineering background fueled by a passionate love for all things orange and yellow.

Let me ask you a question folks, what do you get when you cross:
![Nerf Vulcan](http://cdn.instructables.com/FYL/KOSB/FZ383SZ1/FYLKOSBFZ383SZ1.LARGE.jpg)

With

![Arduino Yún](http://arduino.cc/en/uploads/Main/ArduinoYunFront_2_450px.jpg)

I'll tell you... SOMETHING COOL! Well at least, thats what we hope :)

### What we is gonna do

See the idea here is to create a controllable Nerf turret via a website for all sorts of silly activities. We'll be using a REST API to send commands to the VULCAN OF DOOM to control it's position and when to fire.

Later down the track we plan to turn this into a game of sorts with two of these bad boys connected and battling it out in a *last man stands* sort of fashion complete with power-ups!

This will be our first major project using Arduino boards so it wont be the fastest of builds but fear not, for it shall be a glorious day when we unleash this hell raiser upon this Earth!!!

### What we is gonna use
This is a list of the stuff involved in making this project happen (will be updated as we go)
* Nerf gun (Vulcan)
* Arduino Yun
* Metal and stuff
* Resistors and components and stuff
* Wires and stuff
* Swag and yolo bruh  

## Install Node.js

1. Go to http://nodejs.org/ and install
2. Navigate to local repository - *BFNG/Web Application/BFNG*
3. Run **npm install** (might need admin)
4. Create a file called **_defaults.js** under *BFNG/public/javascripts*
6. Inside the file paste this line of code and modify as needed: *var arduinoAddress = "http://" + "myArduino.local";*
7. Hopefully run **nodemon bin/www**
8. Navigate to **localhost:9000** in your browser of choice (better not be IE)

## Getting Yún up and running (assuming brand new)

1. Connect the Yún to your computer via a micro usb cable
2. Give it a sec, then open your wifi connections and select the Yún
3. Browse to http://arduino.local
4. Enter the default password of "arduino"
5. Select configure then enter a better password
6. Select the wifi network it will work under
7. Set the REST API to Open (may change in future)
8. Finish up by letting it restart

## Test that the magic is happening

1. Open up the Arduino IDE >= **1.5.4**
2. Open up the *first-api.ino* under *BFNG/Arduino Yun/James/first-api*
3. Upload it
4. Open the Serial Monitor
5. Go to the web application and click **FIRE**
6. Pray
7. Profit?
8. If you see the commands come up on the serial monitor then it worked, congratulations
9. If it didn't work, well then, I'm not really sure. Send a messenger pigeon and ill try to get back to you asap

##"Stay tuned folks, cause this shits about to get real" - Gandalf
