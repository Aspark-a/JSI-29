
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDG5BwLUnO3f5md9y5zCw3L_M0JtQe1wd8",
    authDomain: "jsi09-todolist.firebaseapp.com",
    databaseURL: "https://jsi09-todolist-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "jsi09-todolist",
    storageBucket: "jsi09-todolist.appspot.com",
    messagingSenderId: "531632717169",
    appId: "1:531632717169:web:104ad17c6ac2e32a9e4ad0",
    measurementId: "G-TLN5MMYX8E"
  };

  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

export default firebaseApp
