import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);

    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const githubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const setProfile = (newUser, name,photo) => {
        setLoading(true);
        return updateProfile(newUser, {
            displayName: name,
            photoURL:photo
        })
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            // console.log('logged in user inside auth state observer', loggedUser)
            // if (loggedIn) {
                setUser(loggedUser);
                setLoading(false);
            // }
            // else { console.log('log state', loggedIn) }
        })

        return () => {
            unsubscribe();
        }
    }, [])
console.log(user, 'on auth');

    const authInfo = {
        user,
        loading,
        loggedIn,
        setLoggedIn,
        createNewUser,
        signIn,
        googleSignIn,
        githubSignIn,
        setProfile,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;