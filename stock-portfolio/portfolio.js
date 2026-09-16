class Portfolio {
  constructor() {
    this.holdings = new Map();
  }

  isEmpty() {
    return this.holdings.size === 0;
  }

  buy(symbol, shares) {
    const current = this.holdings.get(symbol)|| 0;
    this.holdings.set(symbol, current + shares);
  }

  sell(symbol, shares) {
    const current = this.holdings.get(symbol)|| 0;
    if (shares > current) {
      throw new Error('Not possible to sell this number of shares.');
    }
    const remaining = current-shares;
    if (remaining === 0) {
      this.holdings.delete(symbol);
    } else {
      this.holdings.set(symbol, remaining);
    }
  }

  count() {
    return this.holdings.size;
  }

  sharesOf(symbol) {
    return this.holdings.get(symbol)|| 0;
  }
}

module.exports = Portfolio;
