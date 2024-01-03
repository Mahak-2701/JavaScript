// Program that prints first 15 terms of the fibonacci sequence
function fibonacci(n) {
    const sequence = [0, 1]; // Initialize the sequence with the first two terms

    for (let i = 2; i < n; i++) {
        const nextTerm = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextTerm);
    }

    return sequence;
}

