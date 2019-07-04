<h1 align="center">
    <img alt="Full Stack Instagram Clone" src="https://res.cloudinary.com/lukemorales/image/upload/v1562202893/readme_logos/instagram_fullstack_aftphr.png" />
    <br>
    Full Stack Instagram Clone <br />
    Node.js | ReactJS | React Native
</h1>

<h4 align="center">
  
</h4>
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/lukemorales/instagram-fullStack.svg">
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/lukemorales/instagram-fullStack.svg">
  
  <a href="https://www.codacy.com/app/lukemorales/instagram-fullStack?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=lukemorales/instagram-fullStack&amp;utm_campaign=Badge_Grade">
    <img alt="Codacy grade" src="https://img.shields.io/codacy/grade/4f87fc059ec846118f2ef2950200b13a.svg">
  </a>
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/lukemorales/instagram-fullStack.svg">
  <a href="https://github.com/lukemorales/instagram-fullStack/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/lukemorales/instagram-fullStack.svg">
  </a>
  
  <a href="https://github.com/lukemorales/instagram-fullStack/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/lukemorales/instagram-fullStack.svg">
  </a>
  
  <img alt="GitHub" src="https://img.shields.io/github/license/lukemorales/instagram-fullStack.svg"> 
  
</p>

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#warning-prerequisites">Prerequisites</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## :rocket: Technologies

This project was developed at the [RocketSeat OmniStack Week 7](https://rocketseat.com.br) with the following technologies:

-  [Node.js][nodejs]
-  [Express](https://expressjs.com/)
-  [nodemon](https://github.com/remy/nodemon)
-  [MongoDB](https://mongodb.com)
-  [Mongoose](https://mongoosejs.com/)
-  [Multer](https://github.com/expressjs/multer)
-  [Socket.io](https://socket.io/)
-  [ReactJS](https://reactjs.org/)
-  [React Router v4](https://github.com/ReactTraining/react-router)
-  [styled-components](https://www.styled-components.com/)
-  [axios](https://github.com/axios/axios)
-  [React Native](http://facebook.github.io/react-native/)
-  [React Navigation](https://reactnavigation.org/)
-  [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/)
-  [react-native-image-picker](https://github.com/react-native-community/react-native-image-picker)
-  [react-native-auto-height-image](https://github.om/vivaxy/react-native-auto-height-image)
-  [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

## :warning: Prerequisites

In order to use and test the mobile app on a simulator or on your smartphone, you should've already setup the development environment for React Native applications. You can follow the following article (PT-BR) to setup your environment:

[React Native Environment (Android/iOS)](https://docs.rocketseat.dev/ambiente-react-native/introducao)
  
## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.13][yarn] or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/lukemorales/instagram-fullStack

# Go into the repository
$ cd instagram-fullStack

# Go into backend
$ cd backend

# Install dependencies
$ yarn install

# Start the backend server
$ yarn dev

# On another terminal, go to the frontend folder
$ cd ../frontend

# Install dependencies
$ yarn install

# Start the backend server
$ yarn start

# On another terminal, go to the mobile folder
$ cd ../mobile

# Install dependencies
$ yarn install

# If you want to run the project on a simulador, start the react-native server as it is
$ react-native start

# On another terminal, install the app on your simulator
# Use the command below for iOS devices
$ react-native run-ios --simulator="iPhone XS Max"

# Use the command below for Android devices
$ react-native run-android

# If you want to run the project on your smartphone, change the baseURL on src/services/api.js to your machine's ethernet adapter IP. Use the ethernet adapter IP if you're on a cable connection or the WiFi adapter IP if you're on a wireless conecction.
# After changing the baseURL, start the react-native server
$ react-native start

# On another terminal, install the app on your smartphone
# Use the command below for iOS devices
$ react-native run-ios

# Use the command below for Android devices
$ react-native run-android
```

## :memo: License
This project is under the MIT license. See the [LICENSE](https://github.com/lukemorales/instagram-fullStack/blob/master/LICENSE) for more information.

---

Made with ♥ by Luke Morales :wave: [Get in touch!](https://www.linkedin.com/in/lukemorales/)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
