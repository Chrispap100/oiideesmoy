
let currentUser = "";
const users = {
  "admin": { password: "1234", role: "superadmin" },
  "user1": { password: "abcd", role: "user" }
};

function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;
  if (users[u] && users[u].password === p) {
    currentUser = u;
    document.querySelector(".login-box").style.display = "none";
    document.getElementById("app").style.display = "block";
    if (users[u].role === "superadmin") {
      document.querySelector(".admin-section").innerHTML = "📋 Ιστορικό Ενεργειών:<br>🟢 Ο χρήστης " + u + " συνδέθηκε.";
    }
  } else {
    alert("Λάθος στοιχεία!");
  }
}

function newIdea() {
  const idea = prompt("Γράψε τη νέα σου ιδέα:");
  if (idea) {
    const div = document.createElement("div");
    div.innerText = "💡 " + idea;
    document.getElementById("ideas").appendChild(div);
  }
}

function setReminder() {
  const r = prompt("Γράψε την υπενθύμιση:");
  if (r) {
    alert("Θα σου θυμίσουμε: " + r);
  }
}

function sayOrWrite() {
  alert("🎤 Πες κάτι... (Υπό υλοποίηση)");
}

function exportIdeas() {
  alert("📤 Εξαγωγή σε αρχείο... (προσεχώς)");
}
