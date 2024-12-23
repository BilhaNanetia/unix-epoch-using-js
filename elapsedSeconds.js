// Get the current timestamp in milliseconds since January 1, 1970 (Unix epoch)
const millisecondsElapsed = Date.now();

// Convert the milliseconds to seconds by dividing by 1000 and rounding down to the nearest integer
const secondsElapsed = Math.floor(millisecondsElapsed / 1000);

// Log the number of seconds elapsed to the console
console.log(`Seconds elapsed since January 1, 1970: ${secondsElapsed}`);
