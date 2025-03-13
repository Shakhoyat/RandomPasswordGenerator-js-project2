//Random Password Generator

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

  console.log(allowedcharSet);
  //return password;
}

const passwordlength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;
const res = generatePassword(
  passwordlength,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
);
console.log(res);
