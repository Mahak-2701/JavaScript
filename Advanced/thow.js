// Uses of throw keyword and errors
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

try {
    const result = divide(10, 2);
    console.log("Result:", result);

    const zeroResult = divide(5, 0); // This will throw an error
    console.log("Zero Result:", zeroResult);
} catch (error) {
    console.error("Caught an error:", error.message);
}

