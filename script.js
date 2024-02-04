function processForm() {
    // Get the email value from the input field
    var emailValue = document.getElementById("email").value;

    // Print the email to the console
    console.log("Email:", emailValue);

    // Redirect to secondpage.html
    window.location.href = "secondpage.html";
  }