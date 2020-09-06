
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD2kqujRYQlxnbIVZV7sLIzHZW4L7XQ_EE",
    authDomain: "hr-management-9c607.firebaseapp.com",
    databaseURL: "https://hr-management-9c607.firebaseio.com",
    projectId: "hr-management-9c607",
    storageBucket: "hr-management-9c607.appspot.com",
    messagingSenderId: "926422393147",
    appId: "1:926422393147:web:28e98c9d3e8165bedd971e"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
