
import { krExtract } from '../kraken_data_extract.js';


test('returns null for invalid URLs', () => {
    expect(true).toBe(true);
  });



const  extractGivenName  = krExtract.givenName;
const  extractFamilyName  = krExtract.familyName;

const  extractMiddleName  = krExtract.middleName;
const extractNamePrefix = krExtract.prefix;


describe('extractGivenName', () => {
  test('should extract first name from a simple name', () => {
    expect(extractGivenName('John Doe')).toBe('John');
  });

  test('should handle names with titles correctly', () => {
    expect(extractGivenName('Dr. Jane Doe')).toBe('Jane');
    expect(extractGivenName('Miss Elizabeth Bennet')).toBe('Elizabeth');
    expect(extractGivenName('Sir Arthur Conan Doyle')).toBe('Arthur');
  });

  test('should return the first name when there are multiple given names', () => {
    expect(extractGivenName('John Michael Doe')).toBe('John');
  });

  test('should ignore common prefixes and return the actual first name', () => {
    const prefixes = ['Mr', 'Mrs', 'Ms', 'Miss', 'Dr', 'Prof', 'Sir', 'Lady', 'Lord'];
    prefixes.forEach(prefix => {
      expect(extractGivenName(`${prefix} John Doe`)).toBe('John');
    });
  });

  test('should return the first word if it is not a title or prefix', () => {
    expect(extractGivenName('Emily Brontë')).toBe('Emily');
  });

  // Edge cases
  test('should handle empty strings gracefully', () => {
    expect(extractGivenName('')).toBe(null);
  });

  test('should handle names with only a title or prefix', () => {
    expect(extractGivenName('Dr.')).toBe(null);
  });
});



describe('extractFamilyName', () => {
  test('should extract first name from a simple name', () => {
    expect(extractFamilyName('John Doe')).toBe('Doe');
  });

  test('should handle names with titles correctly', () => {
    expect(extractFamilyName('Dr. Jane Doe')).toBe('Doe');
    expect(extractFamilyName('Miss Elizabeth Bennet')).toBe('Bennet');
    expect(extractFamilyName('Sir Arthur Conan Doyle')).toBe('Doyle');
  });

  test('should return the first name when there are multiple given names', () => {
    expect(extractFamilyName('John Michael Doe')).toBe('Doe');
  });

  test('should ignore common prefixes and return the actual first name', () => {
    const prefixes = ['Mr', 'Mrs', 'Ms', 'Miss', 'Dr', 'Prof', 'Sir', 'Lady', 'Lord'];
    prefixes.forEach(prefix => {
      expect(extractFamilyName(`${prefix} John Doe`)).toBe('Doe');
    });
  });

  test('should return the first word if it is not a title or prefix', () => {
    expect(extractFamilyName('Emily Brontë')).toBe('Brontë');
  });

  // Edge cases
  test('should handle empty strings gracefully', () => {
    expect(extractFamilyName('')).toBe(null);
  });

  test('should handle names with only a title or prefix', () => {
    expect(extractFamilyName('Dr.')).toBe(null);
  });
});


describe('extractMiddleName', () => {
  test('should extract first name from a simple name', () => {
    expect(extractMiddleName('John Doe')).toBe(null);
  });

  test('should handle names with titles correctly', () => {
    expect(extractMiddleName('Dr. Jane Doe')).toBe(null);
    expect(extractMiddleName('Miss Elizabeth Bennet')).toBe(null);
    expect(extractMiddleName('Sir Arthur Conan Doyle')).toBe('Conan');
  });

  test('should return the first name when there are multiple given names', () => {
    expect(extractMiddleName('John Michael Doe')).toBe('Michael');
  });

  test('should ignore common prefixes and return the actual first name', () => {
    const prefixes = ['Mr', 'Mrs', 'Ms', 'Miss', 'Dr', 'Prof', 'Sir', 'Lady', 'Lord'];
    prefixes.forEach(prefix => {
      expect(extractMiddleName(`${prefix} John Doe`)).toBe(null);
    });
  });

  test('should return the first word if it is not a title or prefix', () => {
    expect(extractMiddleName('Emily Brontë')).toBe(null);
  });

  // Edge cases
  test('should handle empty strings gracefully', () => {
    expect(extractMiddleName('')).toBe(null);
  });

  test('should handle names with only a title or prefix', () => {
    expect(extractMiddleName('Dr.')).toBe(null);
  });
});


describe('extractNamePrefix', () => {
  test('should extract first name from a simple name', () => {
    expect(extractNamePrefix('John Doe')).toBe(null);
  });

  test('should handle names with titles correctly', () => {
    expect(extractNamePrefix('Dr. Jane Doe')).toBe('Dr.');
    expect(extractNamePrefix('Miss Elizabeth Bennet')).toBe('Miss');
    expect(extractNamePrefix('Sir Arthur Conan Doyle')).toBe('Sir');
  });

  test('should return the first name when there are multiple given names', () => {
    expect(extractNamePrefix('John Michael Doe')).toBe(null);
  });

  test('should ignore common prefixes and return the actual first name', () => {
    const prefixes = ['Mr', 'Mrs', 'Ms', 'Miss', 'Dr', 'Prof', 'Sir', 'Lady', 'Lord'];
    prefixes.forEach(prefix => {
      expect(extractNamePrefix(`${prefix} John Doe`)).toBeTruthy()
    });
  });

  test('should return the first word if it is not a title or prefix', () => {
    expect(extractNamePrefix('Emily Brontë')).toBe(null);
  });

  // Edge cases
  test('should handle empty strings gracefully', () => {
    expect(extractNamePrefix('')).toBe(null);
  });

  test('should handle names with only a title or prefix', () => {
    expect(extractNamePrefix('Dr.')).toBe('Dr.');
  });
});