document.getElementById("login").addEventListener("submit", function(e) {
  e.preventDefault();

  // Get ur variables and stuff
  var username = document.getElementById("Uname").value;
  var password = document.getElementById("Pass").value;
  
  // If username and password are... then you...
  if (username === "123wmans832" && password === "blud3times") {
    window.location.href = "https://tonka.booeducation.com/"; // DONT FORGET TO ADD https://
  }
  // You can also add this multiple times.
  if (username === "youareacoolkid" && password === "PSYCH!") {
    window.location.href = "https://blazergames--mrmastery00.repl.co/";
  }
    if (username === "hiimawesome92" && password === "jkjkagain") {
    window.location.href = "https://deecoyz.github.io/keyboarding-login-page/"
  }
      if (username === "guffyelegant" && password === "goofyelegant3") {
    window.location.href = "https://guffyelegant-cool-gg.webnode.page/"
  }
if (username === "dingle" && password === "ilovemylocat") {
    window.location.href = "https://blazergames.rasuly.repl.co/"
  } 
if (username === "school" && password === "heaven") {
    window.location.href = "https://blaizerbrumo.github.io/School-Heaven/public/games.html"
  }
  if (username === "befr" && password === "gatekeep") {
    window.location.href = "https://meta.cupcakeraptors1.repl.co/"
  }
  // If the password/username isnt correct then display a message
  else {
    document.getElementById("message").textContent = "Please Make a New Account by Pressing Forgot password.";
  }
});
