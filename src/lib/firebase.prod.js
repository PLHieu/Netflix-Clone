// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { seedDatabase } from '../seed';

const firebaseConfig = {
  apiKey: 'AIzaSyAaZdrKhb4MK2M2h4UMr8FRnZSLYh0pYP4',
  authDomain: 'netflix-clone-36ef1.firebaseapp.com',
  projectId: 'netflix-clone-36ef1',
  storageBucket: 'netflix-clone-36ef1.appspot.com',
  messagingSenderId: '470208562135',
  appId: '1:470208562135:web:ab20d53814469f883ec192',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// seedDatabase(firebase);
export { firebase };
