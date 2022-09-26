import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged,signOut, signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import { userHandle } from "./utils";


const firebaseConfig = {
    apiKey: "AIzaSyDIW3MEWWTuo9KVsEAMr_HMZGzza7KSuZY",
    authDomain: "instagram-clone-fc606.firebaseapp.com",
    projectId: "instagram-clone-fc606",
    storageBucket: "instagram-clone-fc606.appspot.com",
    messagingSenderId: "239675465292",
    appId: "1:239675465292:web:22bd7ecadc4848c2c7dee9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

onAuthStateChanged(auth, user => {
	userHandle(user || false)
})

export const login = async (email, password) => {
	try {
		const response = await signInWithEmailAndPassword(auth, email, password)
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