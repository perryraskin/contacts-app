import * as firebase from 'firebase';
import 'firebase/firestore';

const settings = {timestampsInSnapshots: true};

// const config = {
//   apiKey: `${process.env.API_KEY}`,
//   authDomain: `${process.env.AUTH_DOMAIN}`,
//   databaseURL: `${process.env.DATABASE_URL}`,
//   projectId: `${process.env.PROJECT_ID}`,
//   storageBucket: `${process.env.STORAGE_BUCKET}`,
//   messagingSenderId: `${process.env.MESSAGING_SENDER_ID}`,
//   appId: `${process.env.APP_ID}`
// }

const config = {
  apiKey: "AIzaSyCEHl9uJ5hX6QxYUsSoqOd1pPDO6ytmZDw",
  authDomain: "sid-app-cd56e.firebaseapp.com",
  databaseURL: "https://sid-app-cd56e.firebaseio.com",
  projectId: "sid-app-cd56e",
  storageBucket: "sid-app-cd56e.appspot.com",
  messagingSenderId: "9627682105",
  appId: "1:9627682105:web:856cd7014f984be55a54e8"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore()
export default firebase