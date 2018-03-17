
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDuBqndwMJIGT5aKXW5vrq_PXJXN-pVZqg",
    authDomain: "dancewebsite-198101.firebaseapp.com",
    databaseURL: "https://dancewebsite-198101.firebaseio.com",
    projectId: "dancewebsite-198101",
    storageBucket: "dancewebsite-198101.appspot.com",
    messagingSenderId: "618195458452"
};

firebase.initializeApp(config);

export default firebase;