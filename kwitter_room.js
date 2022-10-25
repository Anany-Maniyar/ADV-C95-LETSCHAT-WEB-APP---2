// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBssA1m9EDj0iu4B_CrYYJTrmxNR-DaxUU",
  authDomain: "kwitter-webapp-project-4d49f.firebaseapp.com",
  databaseURL: "https://kwitter-webapp-project-4d49f-default-rtdb.firebaseio.com",
  projectId: "kwitter-webapp-project-4d49f",
  storageBucket: "kwitter-webapp-project-4d49f.appspot.com",
  messagingSenderId: "996863824152",
  appId: "1:996863824152:web:72fd529f27182d33720e6d"
};

  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
    console.log(room_name);
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding user"
    });
  }