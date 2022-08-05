import { initializeApp } from "firebase/app";
import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";
import {getFirestore, doc, setDoc} from "firebase/firestore"
import { toast  } from "react-hot-toast";
import { userHandle } from "./utils";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXvPH75DQ04Onlm-LIRSeohoqcncCf61Y",
  authDomain: "instagram-demo-d65d3.firebaseapp.com",
  projectId: "instagram-demo-d65d3",
  storageBucket: "instagram-demo-d65d3.appspot.com",
  messagingSenderId: "73965322294",
  appId: "1:73965322294:web:8943053ca33310b1b45897"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore(app)

onAuthStateChanged(auth, user => {
    if(user) {
        userHandle(user)
    } else {
        userHandle(false)
    }
})

export const login = async (email, password) => {
    try {
       const response = await signInWithEmailAndPassword(auth, email, password)
       
    } catch (err) {
        toast.error(err.code)
    }
}

export const register = async ({email, password, full_name, username}) => {
    try {
       const response = await createUserWithEmailAndPassword(auth, email, password)

       await setDoc(doc(db, "users", response.user.uid), {
        full_name,
        username,
        followers: [],
        following: [],
        notifications: []
       })

       await updateProfile(auth.currentUser, {
        displayName: full_name,
       })

       return response.user 

    } catch (err) {
        toast.error(err.code)
    }
}

export const logout = async () => {
    try {
        await signOut(auth)
    } catch (err) {
        toast.error(err.code)
    }
}