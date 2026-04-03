
alert("Hello,Welcome!!")
// add value

 const form = document.getElementById("login");
 form. addEventListener ("submit", function (event){ 
  event.preventDefault ();
  const email = document.getElementById("email").value.trim();
  const name = document.getElementById("name").value.trim();
  const password = document.getElementById("password").value.trim();

  // logic

  if ( password === "1234567" && email === "text@gmail.com"){

    // call for windows redirection

window.location.href="profile.html";
alert("Welcome back  " + name + ("!."));

// decision
  }else{

    // notification
    alert("invalid login");

  }
  
 })

 



















 