const {multiply} = require("./multiply");

describe('multiply', () => {
    it('should return multiply of 2', () => {
        expect(multiply(2, 2)).toBe(4);
    });
});
