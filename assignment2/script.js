document.getElementById("id-form").addEventListener("submit", function(event) {
  event.preventDefault();

  document.getElementById("nameDisplay").textContent =
    document.getElementById("nameInput").value;

  document.getElementById("studentIdDisplay").textContent =
    document.getElementById("studentIdInput").value;

  document.getElementById("concentrationDisplay").textContent =
    document.getElementById("concentrationInput").value;

  // ✅ Hide form
  document.querySelector(".form-container").style.display = "none";

  // ✅ Show ID card
  document.querySelector(".id-card").style.display = "flex";
});
