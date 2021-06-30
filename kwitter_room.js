
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyB_-RqqVyL_VtX8OQuRGCG-P1AL32jQ9ts",
      authDomain: "kwitter-71772.firebaseapp.com",
      projectId: "kwitter-71772",
      storageBucket: "kwitter-71772.appspot.com",
      messagingSenderId: "954306763397",
      appId: "1:954306763397:web:39bf22c8c1b2e0d65b67ec"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
