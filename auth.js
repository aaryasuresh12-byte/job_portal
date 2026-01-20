function loginUser() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (email === "" || password === "") {
    alert("Please fill all fields");
    return;
  }

  alert("Login successful (Backend will be added later)");
  window.location.href = "jobs.html";
}

function registerUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  if (name === "" || email === "" || password === "" || role === "") {
    alert("Please fill all fields");
    return;
  }

  alert("Registration successful! Please login.");
  window.location.href = "login.html";
}
