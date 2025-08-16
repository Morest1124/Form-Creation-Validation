document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");
  const username = document.getElementById("username");
  const usernameError = document.getElementById("usernameError");
  const email = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const password = document.getElementById("password");
  const passwordError = document.getElementById("passwordError");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const usernameInput = username.value.trim();
    const emailInput = email.value.trim();
    const passwordInput = password.value.trim();

    let isValid = true;
    let messages = [];

    // Username validation
    if (usernameInput.length < 3) {
      isValid = false;
      messages.push("Username should be at least 3 characters long");
      if (usernameError) {
        usernameError.textContent =
          "Username should be at least 3 characters long";
      }
    } else {
      if (usernameError) usernameError.textContent = "";
    }

    // Email validation using regex
    const emailPattern = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,7}$/;
    if (!emailPattern.test(emailInput)) {
      isValid = false;
      messages.push("Enter a valid email address");
      if (emailError) emailError.textContent = "Enter a valid email address";
    } else {
      if (emailError) emailError.textContent = "";
    }

    // Password validation
    if (passwordInput.length < 8) {
      isValid = false;
      messages.push("Your password should be at least 8 characters");
      if (passwordError) {
        passwordError.textContent =
          "Your password should be at least 8 characters";
      }
    } else {
      if (passwordError) passwordError.textContent = "";
    }

    // Feedback
    feedbackDiv.style.display = "block";
    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745"; // green
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545"; // red
    }
  });
});
