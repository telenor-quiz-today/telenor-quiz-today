// Display today's date automatically
const dateElement = document.getElementById("date");
const today = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
dateElement.textContent = "Updated: " + today.toLocaleDateString('en-US', options);