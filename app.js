let token = ""; 

const baseUrl = "http://127.0.0.1:8000";

async function registerUser() {
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;
  const role = document.getElementById("registerRole").value;

  const res = await fetch(`${baseUrl}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, role })
  });

  const data = await res.json();
  document.getElementById("registerOutput").textContent =
    res.ok ? `Registered! ID: ${data.id}` : `Error: ${data.detail || JSON.stringify(data)}`;
}

async function loginUser() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const body = new URLSearchParams();
  body.append("username", email);
  body.append("password", password);
  body.append("grant_type", "password");
  body.append("scope", "");
  body.append("client_id", "string");
  body.append("client_secret", "string");

  const res = await fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString()
  });

  const data = await res.json();
  if (res.ok) {
    token = data.access_token;
    document.getElementById("loginOutput").textContent = `Logged in! Token saved`;
  } else {
    document.getElementById("loginOutput").textContent = `Error: ${data.detail || JSON.stringify(data)}`;
  }
}

async function getMe() {
  if (!token) {
    document.getElementById("meOutput").textContent = "Error: Please login first!";
    return;
  }

  const res = await fetch(`${baseUrl}/me`, {
    method: "GET",
    headers: { "Authorization": `Bearer ${token}` }
  });

  const data = await res.json();
  document.getElementById("meOutput").textContent =
    res.ok ? JSON.stringify(data) : `Error: ${data.detail || JSON.stringify(data)}`;
}
