document.getElementById("login").addEventListener("submit", function(e) {
  e.preventDefault();

  // Get ur variables and stuff
  var username = document.getElementById("Uname").value;
  var password = document.getElementById("Pass").value;
  
  // If username and password are... then you...
  if (username === "tonka" && password === "pass1") {
    window.location.href = "https://tonka.booeducation.com/"; // DONT FORGET TO ADD https://
  }
  // You can also add this multiple times.
  if (username === "mrmaster" && password === "pass2") {
    window.location.href = "https://blazergames--mrmastery00.repl.co/";
  }
  if (username === "deecoyz" && password === "pass3") {
    window.location.href = "https://deecoyz.github.io/keyboarding-login-page/"
  }
  if (username === "guffyelegant" && password === "pass4") {
    window.location.href = "https://guffyelegant-cool-gg.webnode.page/"
  }
  if (username === "rasuly" && password === "pass5") {
    window.location.href = "https://blazergames.rasuly.repl.co/"
  } 
  if (username === "schoolheven" && password === "pass6") {
    window.location.href = "https://blaizerbrumo.github.io/School-Heaven/public/games.html"
  }
  if (username === "meta" && password === "pass7") {
    window.location.href = "https://meta.cupcakeraptors1.repl.co/"
  }
  if (username === "scratch" && password === "pass8") {
    window.location.href = "https://scratch.mit.edu/"
  }
        // If the password/username isnt correct then display a message
  else {
    document.getElementById("message").textContent = "Please Make a New Account by Pressing Forgot password.";
  }
});
