import * as firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyC_XWxHU32o1VADUXK1K-nZgKdtL9YkvZI",
  authDomain: "master-ecommerce.firebaseapp.com",
  databaseURL: "https://master-ecommerce.firebaseio.com",
  projectId: "master-ecommerce",
  storageBucket: "master-ecommerce.appspot.com",
  messagingSenderId: "166387392119",
  appId: "1:166387392119:web:09a19a5a39f8f5edbc3072"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// export
export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
