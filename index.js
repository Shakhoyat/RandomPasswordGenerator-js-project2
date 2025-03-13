//Random Password Generator

const passwordlength = 20;
const includeLowercase = true;
const includeUppercase = false;
const includeNumbers = false;
const includeSymbols = false;

function generatePassword(
  passwordlength,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+";
  let password = "";
  let allowedcharSet = "";

  allowedcharSet += includeLowercase ? lowercase : "";
  allowedcharSet += includeUppercase ? uppercase : "";
  allowedcharSet += includeNumbers ? numbers : "";
  allowedcharSet += includeSymbols ? symbols : "";

  if (passwordlength <= 0) {
    return "Password length should be greater than 0";
  }
  if (allowedcharSet === 0) {
    return "Select atleast one character set";
  }
  let random = 0;
  for (let i = 0; i < passwordlength; i++) {
    random = Math.floor(Math.random() * allowedcharSet.length);
    password += allowedcharSet[random];
  }
  return password;
}

const res = generatePassword(
  passwordlength,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
);
console.log(`Generated Password: ${res}`);
