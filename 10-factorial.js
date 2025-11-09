const factorial = (n) => {
    // This checks if n factorial is NaN and returns 1.
    if (isNaN(n)) {
        return 1;
    }

    // Standard base case: Factorial of 0 or 1 is 1.
    // This also implicitly handles negative integers, returning 1, which prevents infinite recursion.
    if (n <= 1) {
        return 1;
    }

    // Recursive step: n * factorial(n - 1)
    return n * factorial(n - 1);
};

// This line gets the first argument from the command line.
const firstArgument = process.argv[2];

// Converts the argument to an integer. If conversion fails (or argument is missing),

const num = parseInt(firstArgument, 10);

// Compute the factorial using the recursive function
const result = factorial(num);

// Print the final result
console.log(result);