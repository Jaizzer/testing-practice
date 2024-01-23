import Calculator from './calculator';

let calculator = new Calculator();

test('1 + 2 = 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('1 - 2 = -1', () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
});

test('3 x 23 = 69', () => {
    expect(calculator.multiply(3, 23)).toBe(69);
});

test('45 / 9 = 5', () => {
    expect(calculator.divide(45, 9)).toBe(5);
});

test('1 / 3 is approximately 0.3', () => {
    expect(calculator.divide(1, 3)).toBeCloseTo(0.333);
});

test('Dividing by zero is undefined', () => {
    expect(calculator.divide(1, 0)).toBe(undefined);
});
