// Simple program to take input and output using the process module

// Use the 'on' method of process.stdin to listen for 'data' events
process.stdin.on('data', (data) => {
    // Convert the input data to a string and remove any trailing newline characters
    const input = data.toString().trim();

    // Process the input
    const greeting = `Hello, ${input}!`;

    // Use the 'write' method of process.stdout to display the output
    process.stdout.write(greeting);

    // Exit the program
    process.exit();
});

// Prompt the user to enter their name
process.stdout.write('Enter your name: ');