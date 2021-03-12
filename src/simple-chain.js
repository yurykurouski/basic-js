const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    value !== '' ? this.chain.push(`( ${value} )`) : this.chain.push('( )');
    return this
  },

  removeLink(position) {
    if (isNaN(position) || this.chain.length === 0) {
      this.chain = [];
      throw new Error;
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
