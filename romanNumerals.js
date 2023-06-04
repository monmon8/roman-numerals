export function converterToRoman(num) {
  let result = "";
  while (num) {
    if (num >= 1000) {
      result += "M";
      num -= 1000;
    } else if (num >= 500) {
      if (num >= 900) {
        result += "CM";
        num -= 900;
      } else {
        result += "D";
        num -= 500;
      }
    }
    return result;
  }
}
