
let users = {
  admin: { password: "1234", role: "superadmin" },
  user1: { password: "abcd", role: "user" }
};

let currentUser = null;
let ideas = [];

function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;
  if (users[u] && users[u].password === p) {
    currentUser = u;
    document.getElementById("login-section").style.display = "none";
    document.getElementById("app-section").style.display = "block";
    addHistory(`✅ Ο χρήστης ${u} συνδέθηκε.`);
  } else {
    alert("Λάθος στοιχεία σύνδεσης.");
  }
}

function newIdea() {
  const idea = prompt("Γράψε την ιδέα σου:");
  if (idea) {
    ideas.push({ text: idea, user: currentUser });
    displayIdeas();
    addHistory(`📝 Ο χρήστης ${currentUser} πρόσθεσε ιδέα.`);
  }
}

function displayIdeas() {
  const container = document.getElementById("ideas");
  container.innerHTML = ideas.map(i => `💡 ${i.text} (${i.user})`).join("<br>");
}

function setReminder() {
  const reminder = prompt("Τι να σου θυμίσω και πότε;");
  if (reminder) {
    alert("🔔 Υπενθύμιση καταχωρήθηκε: " + reminder);
    addHistory(`⏰ Υπενθύμιση από ${currentUser}: ${reminder}`);
  }
}

function sayOrWrite() {
  alert("🎤 Φωνητική καταγραφή ενεργοποιείται...");
}

function exportIdeas() {
  alert("📤 Εξαγωγή αρχείου... (σε PDF/Excel)");
}

function sendFeedback() {
  const msg = prompt("Γράψε το σχόλιό σου:");
  if (msg) {
    alert("Ευχαριστούμε για το feedback!");
    addHistory(`💬 Feedback από ${currentUser}: ${msg}`);
  }
}

function addHistory(entry) {
  const box = document.getElementById("history");
  const now = new Date().toLocaleString();
  box.innerHTML += `<div>🕓 ${now}: ${entry}</div>`;
}
