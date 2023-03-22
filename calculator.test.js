const mathOperations = require('./calculator');

describe("Calculator tests", () => {

    beforeAll(() => {
        console.log("beforeAll called");
    });
    afterAll(() => {
        console.log("afterAll called");
    });
    beforeEach(() => {
        console.log("beforeEach called");
    });
    afterEach(() => {
        console.log("afterEach called");
    });

    test('adding 1 + 2 should return 3', () => {
        var result = mathOperations.sum(1, 2);
        var string1 = "software testing help - a great resource for testers"

        expect(result).toBe(3);
        expect(result).not.toBe(5);
        expect(string1).not.toMatch(/abc/)

    });
    test('diff 5 - 1 should return 4', () => {
        var result = mathOperations.diff(5, 1);
        expect(result).toBe(4);
    });
    test('product 7 * 3 should return 21', () => {
        var result = mathOperations.product(7, 3);
        expect(result).toBe(22);
    });
})