const readline = require('readline');

let cardType; // Declare cardType outside the function

function validateCreditCard(cardNumber) {
    // Remove spaces and dashes from the card number
    const cleanCardNumber = cardNumber.replace(/[\s-]/g, '');

    // Check if the card number contains only digits and is not empty
    if (!/^\d+$/.test(cleanCardNumber) || cleanCardNumber.length === 0) {
        return false;
    }

    // Set cardType based on card type detection logic
    if (/^4/.test(cleanCardNumber)) {
        cardType = "Visa";
    } else if (/^5[1-5]/.test(cleanCardNumber)) {
        cardType = "Mastercard";
    } else if (/^5061|5067/.test(cleanCardNumber)) {
        cardType = "Verve";
    }
    else {
        cardType = "Unknown";
    }

    // Luhn algorithm for credit card number validation
    let sum = 0;
    let doubleDigit = false;

    for (let i = cleanCardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cleanCardNumber[i]);

        if (doubleDigit) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        doubleDigit = !doubleDigit;
    }

    return (sum % 10 === 0);
}

// Create a readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Welcome to payFlash!");

// Ask the user to input the card number
rl.question('Please enter your credit card number to validate it: ', (cardNumber) => {
    if (validateCreditCard(cardNumber)) {
        console.log(`Valid ${cardType} card number`);
    } else {
        console.log("Invalid card number");
    }

    // Close the readline interface
    rl.close();
});
