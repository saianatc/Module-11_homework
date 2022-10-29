const countDown = require('./index.js')

describe ("test function", () => {
    it ("positive number", () => {
        expect(countDown(9)).toBe("9 8 7 6 5 4 3 2 1");
    }),
    it ("negative number", () => {
        expect (countDown(-9)).toBe("-9 -8 -7 -6 -5 -4 -3 -2 -1")
    }),
    it ("null", () => {
        expect(countDown(0)).toBe("0")
    })

});