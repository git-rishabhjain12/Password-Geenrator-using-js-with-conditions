const uppercaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseSet = "abcdefghijklmnopqrstuvwxyz";
const numbersSet = "1234567890";
const symbolsSet = "!@#$%^&*()_-+=";

let passwordLengthdata = document.getElementById("passwordLength");
let uppercaseData = document.getElementById("upperCaseCheck");
let lowercaseData = document.getElementById("lowerCaseCheck");
let numbersData = document.getElementById("numbersCheck");
let symbolsData = document.getElementById("symbolsCheck");
let generatePasswordBtn = document.querySelector("button");
let passwordOutput = document.getElementById("passwordValue");
let copyPassword = document.getElementById("copypassword");

generatePasswordBtn.addEventListener("click", generatePassword);

function generatePassword() {
  let passwordlength = passwordLengthdata.value;
  let password = "";

  if (uppercaseData.checked) {
    password += uppercaseSet;
  }
  if (lowercaseData.checked) {
    password += lowercaseSet;
  }
  if (numbersData.checked) {
    password += numbersSet;
  }
  if (symbolsData.checked) {
    password += symbolsSet;
  }

  let password1 = "";

  if (password !== "" && passwordlength > 0) {
    for (i = 0; i < passwordlength; i++) {
      password1 += password.charAt(Math.floor(Math.random() * password.length));
    }
  }
  passwordOutput.value = password1;
}

copyPassword.addEventListener("click", copyData);

function copyData() {
  passwordOutput.select();
  navigator.clipboard.writeText(passwordOutput.value);
}
