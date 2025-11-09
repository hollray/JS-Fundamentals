//This Javascript file checks if it contains arguments

const argumentCount = process.argv.length - 2;

if (argumentCount === 0) {
    console.log("No argument");
} else if (argumentCount === 1) {
    console.log("Argument found");
}
else {
    console.log("Arguments found");
}