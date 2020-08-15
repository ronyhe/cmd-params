const R = require("ramda");

/* eslint-disable no-unused-vars */
const Program = {
  name: 'Steph',
  version: '0.0.2',
  description: 'The steph compiler',
  positionalArgs: [{
    name: 'source'
  }],
  namedArgs: {
    ramdaImport: {
      options: [{
        none: "Don't add a ramda import",
        node: 'Add const R = require("ramda")',
        es6: 'Add import * as R from "ramda"'
      }],
      default: 'none',
      aliases: ['ri']
    }
  }
};
const isNamedArgument = R.test(/--?\S+/);
const isPositive = R.flip(R.gte)(0);
const pairWith = R.flip(R.pair);
const splitAtOrDont = R.curry(index => R.ifElse(R.always(isPositive(index)), R.splitAt(index), pairWith([])));