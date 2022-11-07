const { getRectanglePerimeter, getRectangleArea, getRectangleInfo } = require('../js/rectangle');


describe('Generating perimeter', () => {
    test('should calculate the perimeter', () => {
        const expectedResult = getRectanglePerimeter(5, 6);
        expect(expectedResult).toBe(22);
    });

    test('should not calculate if length is not positive', () => {
        const expectedResult = getRectanglePerimeter(0, 4);
        expect(expectedResult).toBe(0);
    });

    test('should not calculate if width is not positive', () => {
        const expectedResult = getRectanglePerimeter(4, -5);
        expect(expectedResult).toBe(0);
    });

    test('should not calculate if any of the paramethers do not exist', () => {
        const expectedResult = getRectanglePerimeter(3);
        expect(expectedResult).toBe(0);
    });
});

describe('Generating area', () => {
    test('should calculate the area', () => {
        const expectedResult = getRectangleArea(6, 8);
        expect(expectedResult).toBe(48);
    });

    test('should not calculate if length is not positive', () => {
        const expectedResult = getRectangleArea(-1, 10);
        expect(expectedResult).toBe(0);
    });

    test('should not calculate if width is not positive', () => {
        const expectedResult = getRectangleArea(8, 0);
        expect(expectedResult).toBe(0);
    });

    test('should not calculate if any of the paramethers do not exist', () => {
        const expectedResult = getRectangleArea(5);
        expect(expectedResult).toBe(0);
    });
});


describe('Generating info', () => {

    test('should generate an error message if any of the paramethers do not exist', () => {
        const expectedResult = getRectangleInfo(5);
        expect(expectedResult).toBe('Please enter valid values');
    });

    test('should generate an error message if length is not positive', () => {
        const expectedResult = getRectangleInfo(-3, 6);
        expect(expectedResult).toBe('Please enter a valid length value');
    });

    test('should generate an error message if width is not positive', () => {
        const expectedResult = getRectangleInfo(3, -2);
        expect(expectedResult).toBe('Please enter a valid width value');
    });

    test('should generate a valid test output if both paramethers are positive', () => {
        const expectedResult = getRectangleInfo(3, 7);
        expect(expectedResult).toBe('The perimeter of a rectangle is 20 and the area is 21');
    });
});

