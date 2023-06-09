import { converterToRoman } from "./romanNumerals";

describe("converterToRoman", () => {
  it("should return an empty string when num is 0", () => {
    expect(converterToRoman(0)).toBe("");
  });
  it("should convert 1 to I", () => {
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
  it("should convert 90 to XC", () => {
    // Act
    const result = converterToRoman(90);
    //  Assert
    expect(converterToRoman(90)).toBe("XC");
  });
  it("should convert 50 to L", () => {
    // Act
    const result = converterToRoman(50);
    //  Assert
    expect(converterToRoman(50)).toBe("L");
  });
  it("should convert 40 to XL", () => {
    // Act
    const result = converterToRoman(40);
    //  Assert
    expect(converterToRoman(40)).toBe("XL");
  });
  it("should convert 10 to L", () => {
    // Act
    const result = converterToRoman(50);
    //  Assert
    expect(converterToRoman(10)).toBe("X");
  });
  it("should convert 9 to IX", () => {
    // Act
    const result = converterToRoman(9);
    //  Assert
    expect(converterToRoman(9)).toBe("IX");
  });
  it("should convert 5 to V", () => {
    // Act
    const result = converterToRoman(5);
    //  Assert
    expect(converterToRoman(5)).toBe("V");
  });
  it("should convert 4 to IV", () => {
    // Act
    const result = converterToRoman(4);
    //  Assert
    expect(converterToRoman(4)).toBe("IV");
  });
  it("should convert 1 to I", () => {
    // Act
    const result = converterToRoman(1);
    //  Assert
    expect(converterToRoman(1)).toBe("I");
  });
});
