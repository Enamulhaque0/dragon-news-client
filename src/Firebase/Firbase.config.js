import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB7W8zw4LRPWCuWGHtvYpqsULC63ee4eKs",
  authDomain: "dragon--news-ab1e9.firebaseapp.com",
  projectId: "dragon--news-ab1e9",
  storageBucket: "dragon--news-ab1e9.appspot.com",
  messagingSenderId: "369046181245",
  appId: "1:369046181245:web:0630f70fa978c32db96814"
};

const app = initializeApp(firebaseConfig);
export default app