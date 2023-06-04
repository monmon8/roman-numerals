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
    } else if (num >= 100) {
      if (num >= 400) {
        result += "CD";
        num -= 400;
      } else {
        result += "C";
        num -= 100;
      }
    }
    return result;
  }
}
