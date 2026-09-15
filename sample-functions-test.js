const myFunctions = require('./sample-functions.js');

// div function tests

test('div -- basic division', () => {
  const target = 5;
  const result = myFunctions.div(10, 2);
  expect(result).toBe(target);
});

test('div -- division to decimal', () => {
  const target = 0.3333333333333333;
  const result = myFunctions.div(1, 3);
  expect(result).toBe(target);
});

test('div -- negative dividend', () => {
  const target = -5;
  const result = myFunctions.div(-10, 2);
  expect(result).toBe(target);
});

test('div -- negative divisor', () => {
  const target = -5;
  const result = myFunctions.div(10, -2);
  expect(result).toBe(target);
});

test('div -- both operands negative', () => {
  const target = 5;
  const result = myFunctions.div(-10, -2);
  expect(result).toBe(target);
});

test('div -- zero dividend', () => {
  const target = 0;
  const result = myFunctions.div(0, 5);
  expect(result).toBe(target);
});

test('div -- divide by zero', () => {
  const result = myFunctions.div(5, 0);
  expect(result).toBe(Infinity);
});

// containsNumbers tests

test('containsNumbers -- numbers in the middle', () => {
  const target = true;
  const result = myFunctions.containsNumbers('abc123');
  expect(result).toBe(target);
});

test('containsNumbers -- no numberss', () => {
  const target = false;
  const result = myFunctions.containsNumbers('abcdef');
  expect(result).toBe(target);
});

test('containsNumbers -- start digit', () => {
  const target = true;
  const result = myFunctions.containsNumbers('1abc');
  expect(result).toBe(target);
});

test('containsNumbers -- end digit', () => {
  const target = true;
  const result = myFunctions.containsNumbers('abc1');
  expect(result).toBe(target);
});

test('containsNumbers -- only digits', () => {
  const target = true;
  const result = myFunctions.containsNumbers('123');
  expect(result).toBe(target);
});

test('containsNumbers -- empty', () => {
  const target = false;
  const result = myFunctions.containsNumbers('');
  expect(result).toBe(target);
});

test('containsNumbers -- single non-digit character', () => {
  const target = false;
  const result = myFunctions.containsNumbers('a');
  expect(result).toBe(target);
});

test('containsNumbers -- single digit character', () => {
  const target = true;
  const result = myFunctions.containsNumbers('7');
  expect(result).toBe(target);
});

// bug: isNaN('e') is false because Number("e") is treated as exponential notation. Arithmetic characters are also not NaN on their own, and hence return True.
test('containsNumbers -- string with only "e" doesnt contain numbers', () => {
  const target = false;
  const result = myFunctions.containsNumbers('e');
  expect(result).toBe(target);
});

test('containsNumbers -- whitespace shouldnt be considered as number ', () => {
  const target = false;
  const result = myFunctions.containsNumbers('   ');
  expect(result).toBe(target);
});
