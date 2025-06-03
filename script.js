document.addEventListener('DOMContentLoaded', function () {   
  init(); 
}); 

function init(){   
  const signuppage = document.querySelector('.signuppage');   
  signuppage.style.display='none'; 
} 

function toggle(){   
  const btn=document.querySelector('.changepage span');   
  const loginpage = document.querySelector('.loginpage');   
  const signuppage = document.querySelector('.signuppage');   
  btn.textContent = btn.textContent.trim() === "LOG IN" ? "SIGN UP" : "LOG IN";   
  if(btn.textContent.trim() === "SIGN UP"){     
    loginpage.style.display="block";     
    signuppage.style.display="none";   
  }   
  else{     
    signuppage.style.display="block";     
    loginpage.style.display="none";    
  }  
}   

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";  
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";   


const firebaseConfig = {     
  apiKey: "AIzaSyAEMZlyD9PJC9cLeMtIaPlbNN5RoMZakcg",     
  authDomain: "auth-page-755a8.firebaseapp.com",     
  projectId: "auth-page-755a8",     
  storageBucket: "auth-page-755a8.firebasestorage.app",     
  messagingSenderId: "944065397924",     
  appId: "1:944065397924:web:f24c7fa13ef215c5c91231"   
};    
 
const app = initializeApp(firebaseConfig);   
const auth = getAuth();


const lemail = document.querySelector('.lemail');   
const lpassword = document.querySelector('.lpassword');   
const lbutton = document.querySelector('.lbutton');

lbutton.addEventListener("click", function (event) {
  event.preventDefault();
  
  signInWithEmailAndPassword(auth, lemail.value, lpassword.value)
  .then((userCredential) => {
    const user = userCredential.user;
    alert("Login successful!");
    window.location.href="index2.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Login error: " + errorMessage);
  });
});
const sbutton = document.querySelector('.sbutton');   
sbutton.addEventListener("click", function (event){     
  event.preventDefault();
  
  const semail = document.querySelector('.semail');     
  const spassword = document.querySelector('.spassword');     
  const srpassword = document.querySelector('.srpassword');
  

  if (spassword.value !== srpassword.value) {
    alert("Passwords don't match!");
    return;
  }
  if (!semail.value || !spassword.value) {
    alert("Please fill in all fields!");
    return;
  }
  
  createUserWithEmailAndPassword(auth, semail.value, spassword.value)   
  .then((userCredential) => {     
    const user = userCredential.user;     
    alert("Account created successfully!");
    window.location.href="index2.html";
  })   
  .catch((error) => {     
    const errorCode = error.code;     
    const errorMessage = error.message;
    alert("Signup error: " + errorMessage);
  });    
});   

window.toggle = toggle;