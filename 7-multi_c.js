//script that prints x times “C is fun
const numberOfTimes = parseInt(process.argv[2], 10);
if (isNaN(numberOfTimes)) {
    // If the input is not a valid positive number, do nothing
    console.log("Missing number of occurrences");
    process.exit(0);
}
for (let i = 0; i < numberOfTimes; i++) {
    console.log("C is fun");
}