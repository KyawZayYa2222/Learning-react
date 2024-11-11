// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDQqBVUCV5aJvZsfU3iZulgJ-s2c0MHJ_M",
    authDomain: "library-app-ee9f1.firebaseapp.com",
    projectId: "library-app-ee9f1",
    storageBucket: "library-app-ee9f1.firebasestorage.app",
    messagingSenderId: "550331554104",
    appId: "1:550331554104:web:19adbeb404173988c489cd",
    measurementId: "G-PMKHRF6CKX"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};