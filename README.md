# trivia 
##### August 18, 2020 

[![Generic badge](https://img.shields.io/badge/license-MIT-green.svg?style=plastic&labelColor=36566F)](https://shields.io/)
![GitHub last commit](https://img.shields.io/github/last-commit/GreanBeetle/trivia?style=plastic&labelColor=36566F)
[![Generic badge](https://img.shields.io/badge/build-passing-brightgreen.svg?style=plastic&labelColor=36566F)](https://shields.io/)
![React Native](https://img.shields.io/static/v1?message=React-Native&color=61dafb&style=plastic&logo=react&label=&labelColor=36566F)
![Redux](https://img.shields.io/static/v1?message=Redux-4.0.5&color=764abc&style=plastic&logo=redux&label=&labelColor=36566F)
![TypeScript](https://img.shields.io/static/v1?message=TypeScript&color=007acc&style=plastic&logo=typescript&label=&labelColor=36566F&logoColor=007acc)

React Native app built with expo, Redux, Redux Thunk, and hooks. This is simply a fun little demo app. 

### Run a build on your phone

If you haven't already, install the [Expo Client](https://expo.io/) on your phone - go to the App Store or Play Store, search for "Expo" and install it. 

Be sure that your phone and computer are on the same wireless network. 

Run the following command on your comp 

`git clone https://github.com/GreanBeetle/trivia && cd trivia && npm install && npm start`

For iOS, scan the resulting QR code with the camera's built-in scanner. For Android, use the Expo app itself to scan the QR code. 

[For help troubleshooting, refer to the React Native documentation.](https://reactnative.dev/docs/environment-setup)


### A note on Expo 

Typically I don't use expo for the following reasons 

- As apps grow increasingly complicated, Expo can become increasingly problematic.  
- A minimum knowledge of Xcode and the use of certificates and profiles is critical for a React Native Developer. Using Expo, developers aren't exposed to this. 
- A similar argument applies for Android Studio. 
- Reproducing and troubleshooting real-world bugs involving different mobile OSes, for example, or dated or rarely-seen hardware is more difficult with Expo.  
- Expo makes it hard to debug network issues related to WiFi or Data. 
- Developing applications that make extensive use of phone hardware - such as bluetooth or NFC modules - is unnecessarily difficult with Expo.  

That said, Expo is excellent for rapid development. It's also great for apps that don't rely on smartphone features like bluetooth. Or apps whose functionality is primarily CRUD in nature. 

### Author

John Rykken

### contact

_john.rykken@gmail.com_

Copyright (c) 2020 John Rykken
