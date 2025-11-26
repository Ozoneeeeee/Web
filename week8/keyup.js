const inputBox = document.getElementById('textInput');
inputBox.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    const value = inputBox.value;
    alert(`You have pressed Enter\nThe value you have written is "${value}"`);
  }
});
