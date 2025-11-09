//JavaScript script that converts a string argument to an integer
const firstArgument = process.argv[2];
const convertedNumber = parseInt(firstArgument, 10);
if (isNaN(convertedNumber)) {
    console.log("Not a number");
} else {
    console.log(`My Number: ${convertedNumber}`);
}
