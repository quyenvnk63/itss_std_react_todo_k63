import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAlfcxP2VAitvOcBGSXDC16zJh_cQA3ZJU",
    authDomain: "todo-list-972d3.firebaseapp.com",
    projectId: "todo-list-972d3",
    storageBucket: "todo-list-972d3.appspot.com",
    messagingSenderId: "706974913681",
    appId: "1:706974913681:web:4bc6c5cd27e93da65b1b30",
    measurementId: "G-PNQL9ZGNSK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);