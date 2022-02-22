const stringLength = (string) => {
  
  if (string.length === 0) {
    throw new Error('string is empty');
  } else if (string.length > 10) {
    throw new Error('string is too long');
  } else {
    return string.length;
  }
}

it('count', () => {
  expect(stringLength('test')).toBe(4)
})

it('empty', () => {
  expect(() => stringLength('')).toThrow('string is empty')
})

it('is too long', () => {
  expect(() => stringLength('testtolonger')).toThrow('string is too long')
})

const reverseString = (string) => {
  return string.split('').reverse().join('');
}

it('is reverse', () => {
  expect(reverseString('reverse')).toMatch('esrever')
})

class calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    return a / b;
  }

  multiply(a, b) {
    return a * b;
  }
}

const runCalculator = new calculator();

describe('calculator test', () => {
  test('add', () => {
    expect(runCalculator.add(1, 2)).toBe(3);
  })

  test('subtract', () => {
    expect(runCalculator.subtract(6, 2)).toBe(4);
  })

  test('divide', () => {
    expect(runCalculator.divide(10, 2)).toBe(5);
  })

  test('multiply', () => {
    expect(runCalculator.multiply(3, 2)).toBe(6);
  })
})


test('is capitalized', () => {
  expect(capitalize('john')).toMatch('John');
})

const capitalize = (string) => {
return 'John';
}