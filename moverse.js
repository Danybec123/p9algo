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
function CLICKEA(){
    var variable=document.getElementById("imputtt").value
    localStorage.setItem("sala:",variable)
   firebase.database().ref("/").child(variable).update({
        purpose:"+ salas"
    })
window.location="elpepe.html"
}
function leer(){
    firebase.database().ref("/").on('value',function(e){
        e.forEach(function(a){
            salitas=a.key
            console.log(salitas);
            var nombresala="<h3 class='saalas' id="+ salitas+" onclick='funcion(this.id)'>"+salitas+"</h3>"
            document.getElementById("Dif").innerHTML+=nombresala
        })
    })
}

leer()
function funcion(o){
    localStorage.setItem("sala:",o)
    window.location="elpepe.html"
}
function clickerz(){
    localStorage.removeItem("sala:")
    localStorage.removeItem("Tag1")
    window.location="index.html"
}