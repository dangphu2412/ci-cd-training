module.exports = {
    sum: (a, b) => {
        if (a === undefined || b === undefined) {
            throw new Error("Input must not be empty");
        }

        return a + b;
    }
}
