var firebaseConfig = {
    apiKey: "AIzaSyAuG7UUftBgELgEuxE8YJ-gq4aM5sR6cx4",
    authDomain: "wazaaaa-b10eb.firebaseapp.com",
    databaseURL:"https://wazaaaa-b10eb-default-rtdb.firebaseio.com/",
    projectId: "wazaaaa-b10eb",
    storageBucket: "wazaaaa-b10eb.appspot.com",
    messagingSenderId: "557058357660",
    appId: "1:557058357660:web:02af6f525037f399b37059"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var traer1=localStorage.getItem("Tag1")
  var traer2=localStorage.getItem("sala:")
  function clickearse(){
    var inputd=document.getElementById("imnmnmput").value
    firebase.database().ref(traer2).push({
        nombre:traer1,
        mensaje:inputd,
        likes:0
    })
  }