import { regexLibrary } from "./kraken_regex_library.js";

export var krExtract = {
    url: extractUrl,
    givenName: _extractGivenName,
    familyName: _extractFamilyName,
    middleName: _extractMiddleName,
    prefix: _extractNamePrefix
};

function extractUrl(value) {
    // Regular expression to match URLs that start with http:// or https://
      const urlRegex = /https?:\/\/[^\s]+/g;

      // Find all matches in the given text
      const urls = text.match(urlRegex);

      // If no URLs found, return an empty array
      if (!urls) {
        return [];
      }

      return urls;
}

function extractPathnameFromUrl(value) {
    if (!URL.canParse(value)) {
        return null;
    }

    try {
        const normalizedValue = new URL(value);
        return normalizedValue.pathname;
    } catch (error) {
        return null;
    }
}

function extractPorteFromUrl(value) {
    if (!URL.canParse(value)) {
        return null;
    }

    try {
        const normalizedValue = new URL(value);
        return normalizedValue.port;
    } catch (error) {
        return null;
    }
}

function _extractGivenName(fullName) {
    // List of common titles and prefixes to ignore
    const titlesAndPrefixes = [
        "M",
        "Mr",
        "MMe",
        "Monsieur",
        "Madame",
        "Mademoiselle",
        "Mr",
        "Mrs",
        "Ms",
        "Miss",
        "Dr",
        "Prof",
        "Sir",
        "Lady",
        "Lord",
    ];

    if (fullName === null || fullName == undefined || fullName == "") {
        return null;
    }

    // separate from prof designations
    const namePortion = fullName.split(",")[0];

    // remove spaces before and after
    const workingName = namePortion.trim();

    // Split the full name into words
    const words = workingName.split(" ");

    // Check if the first word is a title or prefix, and skip it if so
    let givenName;
    if (titlesAndPrefixes.includes(words[0].replace(".", ""))) {
        givenName = words[1]; // Assuming the actual first name is right after the title/prefix
    } else {
        givenName = words[0]; // If no title/prefix, return the first word
    }

    if (givenName === null || givenName === undefined || givenName === "") {
        return null;
    }
    return givenName;
}

function _extractMiddleName(fullName) {
    // List of common titles and prefixes to ignore
    const titlesAndPrefixes = [
        "M",
        "Mr",
        "MMe",
        "Monsieur",
        "Madame",
        "Mademoiselle",
        "Mr",
        "Mrs",
        "Ms",
        "Miss",
        "Dr",
        "Prof",
        "Sir",
        "Lady",
        "Lord",
    ];

    // separate from prof designations
    const namePortion = fullName.split(",")[0];

    // remove spaces before and after
    const workingName = namePortion.trim();

    // Split the full name into words
    const words = workingName.split(" ");

    // Check if the first word is a title or prefix, and skip it if so

    if (words.length < 3) {
        return null;
    }

    let start = 1;
    if (titlesAndPrefixes.includes(words[0].replace(".", ""))) {
        start = 2; // Assuming the actual first name is right after the title/prefix
    }

    let middleNames = [];
    for (let i = start; i < words.length - 1; i++) {
        middleNames.push(words[i]);
    }

    let middleName = middleNames.join(" ");

    if (middleName === null || middleName === undefined || middleName === "") {
        return null;
    }
    return middleName;
}

function _extractFamilyName(fullName) {
    // List of common titles and prefixes to ignore
    const titlesAndPrefixes = [
        "M",
        "Mr",
        "MMe",
        "Monsieur",
        "Madame",
        "Mademoiselle",
        "Mr",
        "Mrs",
        "Ms",
        "Miss",
        "Dr",
        "Prof",
        "Sir",
        "Lady",
        "Lord",
    ];

    // separate from prof designations
    const namePortion = fullName.split(",")[0];

    // remove spaces before and after
    const workingName = namePortion.trim();

    // Split the full name into words
    const words = workingName.split(" ");

    // Check if the first word is a title or prefix, and skip it if so

    if (words.length < 2) {
        return null;
    }

    let familyName = words[words.length - 1];

    if (familyName === null || familyName === undefined || familyName === "") {
        return null;
    }
    return familyName;
}


function _extractNamePrefix(fullName) {
    // List of common titles and prefixes to ignore
    const titlesAndPrefixes = [
        "M",
        "Mr",
        "MMe",
        "Monsieur",
        "Madame",
        "Mademoiselle",
        "Mr",
        "Mrs",
        "Ms",
        "Miss",
        "Dr",
        "Prof",
        "Sir",
        "Lady",
        "Lord",
    ];

    // separate from prof designations
    const namePortion = fullName.split(",")[0];

    // remove spaces before and after
    const workingName = namePortion.trim();

    // Split the full name into words
    const words = workingName.split(" ");

    // Check if the first word is a title or prefix, and skip it if so

    if (words.length < 1) {
        return null;
    }
    
    if (titlesAndPrefixes.includes(words[0].replace(".", ""))) {
        return words[0];
    }

    return null;

}
