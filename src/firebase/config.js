import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAX9mDvz3_5_vtZSEEWGvY1s_96BjAabY8",
  authDomain: "mobileapp-1bf14.firebaseapp.com",
  projectId: "mobileapp-1bf14",
  storageBucket: "mobileapp-1bf14.appspot.com",
  messagingSenderId: "600210460562",
  appId: "1:600210460562:web:e49f33329faf0e0f757b4b",
  measurementId: "G-EBXS9HZNTL"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };