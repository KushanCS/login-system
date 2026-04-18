async function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  if (!email || !password) {
    message.textContent = "Please fill all fields";
    return;
  }

  const res = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  message.textContent = data.message;

  if (data.success) {
    localStorage.setItem("email", data.email);
    window.location.href = "dashboard.html";
  }
}