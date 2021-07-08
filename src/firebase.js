import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBVzxmM4BkkiGLyhcy1f_fQVeh_kvjUv6k",
    authDomain: "airbnbclone-30eb8.firebaseapp.com",
    projectId: "airbnbclone-30eb8",
    storageBucket: "airbnbclone-30eb8.appspot.com",
    messagingSenderId: "73911340043",
    appId: "1:73911340043:web:c7c58bc200170d7f584b0e"
  };
  
const firebaseApp=firebase.initializeApp(firebaseConfig)
const auth= firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth,provider}