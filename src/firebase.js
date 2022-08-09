import { initializeApp } from "firebase/app";
import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"
import { toast } from "react-hot-toast";
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

onAuthStateChanged(auth, async user => {
    if (user) {
        const dbUser = await getDoc(doc(db, "users", user.uid))
        let data = {
            uid: user.uid,
            fullName: user.displayName,
            email: user.email,
            emailVerified: user.emailVerified,
            ...dbUser.data()
        }
        userHandle(data)
    } else {
        userHandle(false)
    }
})

export const login = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password)
        return response

    } catch (err) {
        toast.error(err.code)
    }
}

export const getUserInfo = async (uname) => {
    const username = await getDoc(doc(db, "usernames", uname))
    if (username.exists()) {
        const user = (await getDoc(doc(db, 'users', username.data().user_id))).data()
        return user
    } else {
        toast.error('Kullanıcı Bulunamadı!')
        throw new Error('Kullanıcı Bulunamadı!')
    }
}


export const register = async ({ email, password, full_name, username }) => {
    try {
        const user = await getDoc(doc(db, "usernames", username))
        console.log(user)
        if (user.exists()) {
            toast.error(`${username} kullanıcı adı başkası tarafından kullanılmaktadır.`)
        } else {
            const response = await createUserWithEmailAndPassword(auth, email, password)

            if (response.user) {
                await setDoc(doc(db, "usernames", username), {
                    user_id: response.user.uid
                })

                await setDoc(doc(db, "users", response.user.uid), {
                    full_name,
                    username,
                    followers: [],
                    following: [],
                    notifications: [],
                    website: '',
                    bio: '',
                    phoneNumber: '',
                    gender: '',
                    posts: 0
                })

                await updateProfile(auth.currentUser, {
                    displayName: full_name,
                })

                return response.user
            }
        }

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