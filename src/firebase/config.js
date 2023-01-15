import 'firebase/firestore'
import 'firebase/auth'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAcsHXTypAemSdQYA6CdIHfeamIZgE8MFo",
    authDomain: "thedojosite-60698.firebaseapp.com",
    projectId: "thedojosite-60698",
    storageBucket: "thedojosite-60698.appspot.com",
    messagingSenderId: "377248767188",
    appId: "1:377248767188:web:efc5facf4d80ce5be86f41"
  };

  //init firebase
firebase.initializeApp(firebaseConfig)

//init firestore
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

//time stamp
const timestamp = firebase.firestore.Timestamp

export {projectFirestore, projectAuth, projectStorage, timestamp}

