import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
console.log("free")
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD24YFDeLj8YCKE54t_gUGArF4gQyhTU7o",
  authDomain: "employee-attendance-cfb9e.firebaseapp.com",
  databaseURL: "https://employee-attendance-cfb9e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "employee-attendance-cfb9e",
  storageBucket: "employee-attendance-cfb9e.appspot.com",
  messagingSenderId: "217106293826",
  appId: "1:217106293826:web:b7def8cb3e3d60272f39db",
  measurementId: "G-KCYR70J6QF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const dataBase = getDatabase(app);
// let ref = dataBase.ref("users/admin");
let data ={
}
let signup = document.querySelector(".signup");


signup.addEventListener("click", ( data ) =>{
    const db = dataBase
    data.name = "Fortune";
    data.password = "Polstice1290";
    set(ref(db, "users"),{
        data
    });
})
console.log(dataBase);
console.log(app);