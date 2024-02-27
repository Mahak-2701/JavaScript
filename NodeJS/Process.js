// Importing the NodeJS type for process
import * as process from 'process';

// Accessing properties of process
console.log('Process ID:', process.pid);
console.log('Node Version:', process.version);
console.log('Platform:', process.platform);
console.log('Current Working Directory:', process.cwd());

// Handling process events
process.on('exit', (code) => {
    console.log(`Exiting with code ${code}`);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
});

// Exiting the process after a delay
setTimeout(() => {
    console.log('Exiting after a delay');
    process.exit(0);
}, 3000);