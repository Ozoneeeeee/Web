document.getElementById("id-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Update text fields
  document.getElementById("nameDisplay").textContent =
    document.getElementById("nameInput").value;

  document.getElementById("studentIdDisplay").textContent =
    document.getElementById("studentIdInput").value;

  document.getElementById("concentrationDisplay").textContent =
    document.getElementById("concentrationInput").value;

  // Update photo if uploaded
  const photoInput = document.getElementById("photoInput");
  const profilePhoto = document.getElementById("profilePhoto");

  if (photoInput.files && photoInput.files[0]) {
    profilePhoto.src = URL.createObjectURL(photoInput.files[0]);
  }

  // Hide form
  document.querySelector(".form-container").style.display = "none";

  // Show ID card
  document.querySelector(".id-card").style.display = "flex";
});
