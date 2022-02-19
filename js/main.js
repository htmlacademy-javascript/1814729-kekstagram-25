function getRandomNumber (min, max) {
  const number = min + Math.random() * (max + 1 - min);
  if (max <= min) {
    return null;
  }
  return Math.floor(number);
}
getRandomNumber(20, 80);

function getLength (string) {
  if (string < 141) {
    return true;
  }
  return false;
}
getLength(130);
