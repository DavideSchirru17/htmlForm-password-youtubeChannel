// Get the form element
const formSignUp = document.getElementById("signupForm");

// add an event listener for the submit event
formSignUp.addEventListener("submit", function (e) {
  e.preventDefault();
  // retrieve the values from the form fields
  const name = e.target.userName.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  const confirmationPassword = e.target.confirmation.value;
  const updates = e.target.updates.checked;

  // check if the password and confirmation password fields match
  if (password !== confirmationPassword) {
    // if they do not match, display an alert message
    alert("Passwords do not match. Please try again.");
  } else {
    // if they match, log the values to the console
    console.log("Name:", name);
    console.log("Email:", email); // Capitalized "Email" for consistency
    console.log("Password:", password);
    console.log("Confirmation Password:", confirmationPassword);
    console.log("Updates:", updates); // Capitalized "Updates" for consistency
  }
});
