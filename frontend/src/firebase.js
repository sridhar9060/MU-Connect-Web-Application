import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAy-nMEkjP4v2WHFV_NjET2DxGKNiYCQS4",
  authDomain: "se-project-c764b.firebaseapp.com",
  projectId: "se-project-c764b",
  storageBucket: "se-project-c764b.appspot.com",
  messagingSenderId: "1077207350306",
  appId: "1:1077207350306:web:2c41dec1f2daed8b3e5e7b"
})

export const auth = app.auth()
export default app
