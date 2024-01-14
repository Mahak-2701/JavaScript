function outerFunction(outerValue) {
    // This inner function has access to outerValue due to closure
    function innerFunction(innerValue) {
        console.log("Outer value: " + outerValue);
        console.log("Inner value: " + innerValue);
    }

    // Returning the inner function, creating a closure
    return innerFunction;
}
