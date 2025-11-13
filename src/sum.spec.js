const {sum} = require("./sum");

describe('sum', () => {
    it('should return sum of 2', () => {
        expect(sum(1, 2)).toBe(3);
    });

    it('should throw error if first argument is undefined', () => {
        expect(() => sum(undefined, 2)).toThrow("Input must not be empty");
    });

    it('should throw error if second argument is undefined', () => {
        expect(() => sum(1, undefined)).toThrow("Input must not be empty");
    });
});
