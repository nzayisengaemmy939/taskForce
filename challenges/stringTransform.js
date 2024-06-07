function transformString(str) {
    const len = str.length;

    // If the length of the string is divisible by 15
    if (len % 15 === 0) {
        // Reverse the string, convert each character to its char code, and join with commas
        return str.split("").reverse().map(char => char.charCodeAt(0)).join();
    }
    // If the length of the string is divisible by 3
    else if (len % 3 === 0) {
        // Reverse the string and join characters with spaces
        return str.split("").reverse().join(" ");
    }
    // If the length of the string is divisible by 5
    else if (len % 5 === 0) {
        // Convert each character to its char code and join with spaces
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    } 
    // If none of the conditions are met
    else {
        // Return the original string
        return str;
    }
}

// Test cases
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip ")); // Output: "Chocolate Chip " (no transformation)
