export function converterToRoman(num) {
  let result = "";
  while (num) {
    if (num >= 1000) {
      result += "M";
      num -= 1000;
    }
    return result;
  }
}
