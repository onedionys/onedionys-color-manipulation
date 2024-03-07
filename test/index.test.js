// colorManipulation.test.js

const assert = require('assert');
const manipulateColor = require('../src/colorManipulation');

describe('Color Manipulation Tests', function() {
    it('Should return a lighter color', function() {
        const originalColor = "#0066CC";
        const manipulatedColor = manipulateColor(originalColor, 20);
        assert.strictEqual(manipulatedColor, "#147ae0");
    });

    it('Should return a darker color', function() {
        const originalColor = "#FFA500";
        const manipulatedColor = manipulateColor(originalColor, -30);
        assert.strictEqual(manipulatedColor, "#e18700");
    });
});
