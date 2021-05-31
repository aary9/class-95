
const config={apiKey: "AIzaSyDAP80fa4j0abnhDWcLj07Jo9ayhmF3RZw",
authDomain: "class-94-32630.firebaseapp.com",
projectId: "class-94-32630",
storageBucket: "class-94-32630.appspot.com",
messagingSenderId: "698826182460",
appId: "1:698826182460:web:fb5fcf2061cd81809ed839",
measurementId: "G-LQX85JCTYK",
databaseURL:"https://class-93-c03a8-default-rtdb.firebaseio.com/"

};

firebase.initializeApp(config);

user_name=localStorage.getItem(config);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


function addRoom()
{
room_name=document.getElementById("roomname").value;

firebase.database().ref("/").child(roomname).update({
      purpose:"adding room name"
})

localStorage.setItem("roomname",roomname);
window.location=("kwitter_room.html");

}


