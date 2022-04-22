import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCRI4BfpT4J5L2ucON-M9wQXF939lRU80I",
  authDomain: "wiki-3350e.firebaseapp.com",
  projectId: "wiki-3350e",
  storageBucket: "wiki-3350e.appspot.com",
  messagingSenderId: "938328297552",
  appId: "1:938328297552:web:9eefef6f40e5ba0999c155"
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();

export { projectFirestore };

