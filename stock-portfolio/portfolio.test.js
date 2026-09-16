const Portfolio = require('./portfolio.js');

//2.1
test('new portfolio has 0 symbols', () => {
  const portfolio = new Portfolio();
  expect(portfolio.count()).toBe(0);
});

//2.2
test('new portfolio is empty', () => {
  const portfolio = new Portfolio();
  expect(portfolio.isEmpty()).toBe(true);
});

test('not empty after buying', () => {
  const portfolio = new Portfolio();
  portfolio.buy('AAPL', 10);
  expect(portfolio.isEmpty()).toBe(false);
});

//2.3
test('buy adds shares to a symbol', () => {
  const portfolio = new Portfolio();
  portfolio.buy('AAPL', 10);
  expect(portfolio.sharesOf('AAPL')).toBe(10);
});

test('buying same symbol twice, stacking shares', () => {
  const portfolio = new Portfolio();
  portfolio.buy('AAPL', 10);
  portfolio.buy('AAPL', 5);
  expect(portfolio.sharesOf('AAPL')).toBe(15);
});

//2.4
test('sell removes shares from a symbol', () => {
  const portfolio = new Portfolio();
  portfolio.buy('AAPL', 10);
  portfolio.sell('AAPL', 4);
  expect(portfolio.sharesOf('AAPL')).toBe(6);
});

//2.5
test('count is unique symbols not total shares', () => {
  const portfolio = new Portfolio();
  portfolio.buy('GME', 5);
  portfolio.buy('RBLX', 10);
  expect(portfolio.count()).toBe(2);
});

test('count stays the same when buying more of a symbol you already possess', () => {
  const portfolio = new Portfolio();
  portfolio.buy('GME', 5);
  portfolio.buy('GME', 3);
  expect(portfolio.count()).toBe(1);
});

//2.6
test('symbol drops out of the portfolio once all shares are sold', () => {
  const portfolio = new Portfolio();
  portfolio.buy('AAPL', 10);
  portfolio.sell('AAPL', 10);
  expect(portfolio.count()).toBe(0);
});

//2.7
test('sharesOf is 0 for a symbol you never bought', () => {
  const portfolio = new Portfolio();
  expect(portfolio.sharesOf('TSLA')).toBe(0);
});

//2.8
test('cant sell more shares than you own', () => {
  const portfolio = new Portfolio();
  portfolio.buy('AAPL', 5);
  expect(() => portfolio.sell('AAPL', 6)).toThrow('Not possible to sell this number of shares.');
});

test('cant sell a symbol you never bought', () => {
  const portfolio = new Portfolio();
  expect(() => portfolio.sell('AAPL', 1)).toThrow('Not possible to sell this number of shares.');
});

//Reflection:
//To be brutally honest, I haven't been able to stick to test-first method the whole way through.
//I found it difficult to write tests for some of the more complex methods, and I often found myself writing the implementation first and then going back to the test file to find edge cases, after which I began writing code to cover said tests.
//However, after doing this exercise, I have a better understanding of TDD and how it can be useful in ensuring that code is well-tested and robust. I also found that writing tests first helped me to think more critically about the design of my code and the potential edge cases.
