//script that prints a square
const sizeOfSquare = parseInt(process.argv[2], 10);
if (isNaN(sizeOfSquare)) {
    console.log("Missing size");
    //process.exit(0);
}
else if (sizeOfSquare > 0) {
    const char = 'X';
    //console.log(char);
    // process.exit(0);

    for (let i = 0; i < sizeOfSquare; i++) {
        let row = '';

        // Inner loop to build a row of 'X' characters
        for (let j = 0; j < sizeOfSquare; j++) {
            row += char;
        }

        // Print the complete row
        console.log(row);
    }
}