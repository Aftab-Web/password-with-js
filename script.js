const answer = document.querySelector(".answer");
const lengthInput = document.getElementById("length");
const upperCheck = document.querySelector(".upper");
const lowerCheck = document.querySelector(".lower");
const charCheck = document.querySelector(".char");
const numCheck = document.querySelector(".num");

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}<>?/";

function generatePassword() {
  const length = parseInt(lengthInput.value);
  let charset = "";

  if (upperCheck.checked) charset += upper;
  if (lowerCheck.checked) charset += lower;
  if (charCheck.checked) charset += symbols;
  if (numCheck.checked) charset += numbers;

  if (charset === "") {
    answer.value = "Please select at least one option";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomChar = charset[Math.floor(Math.random() * charset.length)];
    password += randomChar;
  }

  answer.value = password;
}
function copyPassword() {
  if (!answer.value || answer.value.includes("Please select")) {
    alert("Nothing to copy!");
    return;
  }
  navigator.clipboard.writeText(answer.value)
    .then(() => alert("Password copied to clipboard!"))
    .catch(() => alert("Failed to copy password"));
}
function updateLength() {
  const lengthVal = document.getElementById("length").value;
  document.getElementById("lengthValue").textContent = lengthVal;
}
