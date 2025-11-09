//script that prints the first argument passed to it
const argumentCheck = process.argv[2];
if (argumentCheck) {
    console.log(argumentCheck);
} else {
    console.log("No argument");
}
