
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getFirestore, addDoc, collection, getDocs  } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAie77810qvAXDWGJ5EOLDFqU430gv0Uko",
    authDomain: "dartit-2a310.firebaseapp.com",
    projectId: "dartit-2a310",
    storageBucket: "dartit-2a310.firebasestorage.app",
    messagingSenderId: "156268411069",
    appId: "1:156268411069:web:66fa2719fb8ffda6cc1fd4",
    measurementId: "G-TQWZBQFCVN"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// 5. 문서 추가 함수 (async 함수 안에서 사용하세요!)
export async function addComment() {
    try {
        const docRef = await addDoc(collection(db, "comments"), {
            text: "김경민centralc" + document.getElementById('cmtinp').value + "centralc"
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
export async function readcms() {
    try {
        let dd = '';
        const querySnapshot = await getDocs(collection(db, "comments"));
        querySnapshot.forEach((doc) => {
            dd = dd + doc.data().text;
        });
        return(dd);
    } catch (error) {
      console.error("Error reading documents: ", error);
    }
}
window.addComment = addComment;
window.readcms = readcms;

document.addEventListener('DOMContentLoaded', async function(){
    let redd = await readcms();
    let reddd = redd.split("centralc");
    for (let i=0; i < reddd.length - 2; i = i + 2){
        document.getElementById('cmtest').innerHTML = document.getElementById('cmtest').innerHTML + reddd[i] + " : " + reddd[i+1] + "<br>";
    }
    console.log(redd);
})