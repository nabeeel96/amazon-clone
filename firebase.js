import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBT9U100CJ1JBA-UjcwSvpIWjwrrbPS_mI',
  authDomain: 'clone-88b30.firebaseapp.com',
  projectId: 'clone-88b30',
  storageBucket: 'clone-88b30.appspot.com',
  messagingSenderId: '28879271451',
  appId: '1:28879271451:web:914470ce9acb762d482abe',
  measurementId: 'G-2F2YJK2DG4',
};


const app = !firebase.apps.length
 ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore()

export default db