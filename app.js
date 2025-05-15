
function newIdea() {
  const idea = prompt("Γράψε τη νέα σου ιδέα:");
  if (idea) {
    const div = document.createElement("div");
    div.innerText = "💡 " + idea;
    document.getElementById("ideas").appendChild(div);
  }
}

function setReminder() {
  const reminder = prompt("Πότε να σου το θυμίσω;");
  if (reminder) {
    alert("🔔 Θα σου το θυμίσω: " + reminder);
  }
}

function sayOrWrite() {
  alert("🎤 Πες κάτι... (λειτουργία υπό ανάπτυξη)");
}
