function getRandomNumber (min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}
getRandomNumber(20, 80);

function isAllowedString (string, number = 140) {
  if (string.length <= number) {
    return true;
  }
  return false;
}
isAllowedString(130);
