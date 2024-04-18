import { krNormalize } from "../kraken_data_normalize.js";

const normalizeUrl = krNormalize.url;
const normalizeNumber = krNormalize.number;
const  normalizeEmail = krNormalize.email;

describe("normalizeUrl", () => {

    
    test("converts http protocol to https", () => {
        expect(normalizeUrl("http://example.com")).toBe("https://example.com/");
    });

    test("lowercases the hostname", () => {
        expect(normalizeUrl("HTTPS://EXAMPLE.COM")).toBe(
            "https://example.com/",
        );
    });

    test("removes default port 80 and 443", () => {
        expect(normalizeUrl("http://example.com:80")).toBe(
            "https://example.com/",
        );
        expect(normalizeUrl("https://example.com:443")).toBe(
            "https://example.com/",
        );
    });

    test("sorts query parameters", () => {
        expect(normalizeUrl("https://example.com?b=2&a=1")).toBe(
            "https://example.com/?a=1&b=2",
        );
    });

    test("retains the fragment identifier", () => {
        expect(normalizeUrl("https://example.com/path#section")).toBe(
            "https://example.com/path#section",
        );
    });

    test("returns null for invalid URLs", () => {
        expect(normalizeUrl("not-a-valid-url")).toBe(null);
    });
});

describe('normalizeNumber function tests', () => {

    test('should return the same number for numeric input', () => {
        expect(normalizeNumber(5)).toBe(5);
    });

    test('should return numeric equivalent for numeric string input', () => {
        expect(normalizeNumber("123")).toBe(123);
    });

    test('should return null for non-numeric string input', () => {
        expect(normalizeNumber("abc")).toBeNull();
    });

    test('should return the Number object for Number object input', () => {
        const numObj = new Number(10);
        expect(normalizeNumber(numObj)).toBe(10);
    });

    test('should return numeric equivalent for String object with numeric content', () => {
        const strObj = new String("456");
        expect(normalizeNumber(strObj)).toBe(456);
    });

    test('should return numeric equivalent for String object with numeric content and decimals', () => {
        const strObj = new String("456.98");
        expect(normalizeNumber(strObj)).toBe(456.98);
    });

    test('should return null for String object with non-numeric content', () => {
        const strObj = new String("not a number");
        expect(normalizeNumber(strObj)).toBeNull();
    });

    test('should return undefined for null input', () => {
        expect(normalizeNumber(null)).toBeNull();
    });

    test('should return undefined for undefined input', () => {
        expect(normalizeNumber(undefined)).toBeNull();
    });

});



describe('normalizeEmail', () => {
  test('converts email to lowercase', () => {
    expect(normalizeEmail('TEST@EMAIL.COM')).toBe('test@email.com');
  });

  test('trims leading and trailing spaces', () => {
    expect(normalizeEmail('  test@email.com  ')).toBe('test@email.com');
  });

  test('does not alter an already normalized email', () => {
    const normalized = 'example.email+tag@gmail.com';
    expect(normalizeEmail(normalized)).toBe(normalized);
  });

  test('retains plus tags in the email', () => {
    const withPlusTag = 'example.email+tag@gmail.com';
    expect(normalizeEmail(withPlusTag)).toBe(withPlusTag.toLowerCase());
  });

  // Add more tests as needed for specific cases, like handling dots in Gmail addresses
});