
let currentUser = "";
const users = {
  "admin": { password: "1234", role: "superadmin" },
  "user1": { password: "abcd", role: "user" }
};

let historyLog = [];
let feedbackList = [];

function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;
  if (users[u] && users[u].password === p) {
    currentUser = u;
    document.querySelector(".login-box").style.display = "none";
    document.getElementById("app").style.display = "block";
    logHistory("🔓 Ο χρήστης " + u + " συνδέθηκε.");
    if (users[u].role === "superadmin") {
      document.getElementById("adminPanel").style.display = "block";
      renderHistory();
      renderFeedback();
    }
  } else {
    alert("Λάθος στοιχεία!");
  }
}

function logHistory(entry) {
  const timestamp = new Date().toLocaleString();
  historyLog.push(`[${timestamp}] ${entry}`);
}

function renderHistory() {
  document.getElementById("history").innerHTML = historyLog.join("<br>");
}

function renderFeedback() {
  document.getElementById("feedback").innerHTML = feedbackList.join("<br>");
}

function newIdea() {
  const idea = prompt("Γράψε τη νέα σου ιδέα:");
  if (idea) {
    const div = document.createElement("div");
    div.innerText = "💡 " + idea;
    document.getElementById("ideas").appendChild(div);
    logHistory("📝 Νέα ιδέα προστέθηκε από " + currentUser);
    if (users[currentUser].role === "superadmin") renderHistory();
  }
}

function setReminder() {
  const reminder = prompt("Γράψε την υπενθύμιση:");
  if (reminder) {
    alert("🔔 Θα σου θυμίσουμε: " + reminder);
    logHistory("⏰ Υπενθύμιση από " + currentUser);
    if (users[currentUser].role === "superadmin") renderHistory();
  }
}

function sayOrWrite() {
  alert("🎤 Πες κάτι... (υπό ανάπτυξη)");
}

function exportIdeas() {
  alert("📤 Εξαγωγή σε PDF/Excel... (υπό ανάπτυξη)");
}

function sendFeedback() {
  const feedback = prompt("Γράψε σχόλιο:");
  if (feedback) {
    feedbackList.push("🗣️ " + currentUser + ": " + feedback);
    alert("Ευχαριστούμε!");
    if (users[currentUser].role === "superadmin") renderFeedback();
  }
}
