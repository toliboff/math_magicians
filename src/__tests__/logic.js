import calculate from '../logic/calculator';

describe('calculate', () => {
  test('sums up two values. should return 5', () => {
    const plus = {
      total: 2,
      next: 3,
      operation: '+',
    };

    expect(+calculate(plus, '=').total).toBe(5);
  });

  test('subtraction. should return 1', () => {
    const subtract = {
      total: 10,
      next: 9,
      operation: '-',
    };

    expect(+calculate(subtract, '=').total).toBe(1);
  });

  test('multiple. should return 25', () => {
    const multiple = {
      total: 5,
      next: 5,
      operation: 'x',
    };

    expect(+calculate(multiple, '=').total).toBe(25);
  });
});
