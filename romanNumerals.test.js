import { converterToRoman } from "./romanNumerals";

describe("converterToRoman", () => {
  it("should convert 1 to I", () => {
    // Arrange
    var roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    // Act
    const result = converterToRoman(1);
    //  Assert
    expect(converterToRoman(1000)).toBe("M");
  });
  it("should convert 501 to D", () => {
    // Act
    const result = converterToRoman(501);
    //  Assert
    expect(converterToRoman(500)).toBe("D");
  });
  it("should convert 900 to CM", () => {
    // Act
    const result = converterToRoman(501);
    //  Assert
    expect(converterToRoman(900)).toBe("CM");
  });
  it("should convert 400 to CD", () => {
    // Act
    const result = converterToRoman(400);
    //  Assert
    expect(converterToRoman(400)).toBe("CD");
  });
  it("should convert 100 to C", () => {
    // Act
    const result = converterToRoman(100);
    //  Assert
    expect(converterToRoman(100)).toBe("C");
  });
});
