document.getElementById("email").addEventListener("focus", () => {
    document.getElementById("errorNotif").classList.remove("show");
    document.getElementById("errorIcon").classList.remove("show");
    document.getElementById("errorBorder").classList.remove("error");
  
  });
  
  //A Regex for email validation
  //so the email format has to be proper or else an invalid mail id message will popups
  function validateEmail() {
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let email = document.getElementById("email").value;
    if (emailRegex.test(email)) {
    } else {
      document.getElementById("errorNotif").classList.add("show");
      document.getElementById("errorIcon").classList.add("show");
      document.getElementById("errorBorder").classList.add("error");
    }
  }