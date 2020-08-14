/* eslint-disable no-unused-vars */
const Program = {
    name: 'Steph',
    version: '0.0.2',
    description: 'The steph compiler',
    positionalArgs: [
        {
            name: 'source'
        }
    ],
    namedArgs: {
        ramdaImport: {
            options: [
                {
                    none: "Don't add a ramda import",
                    node: 'Add const R = require("ramda")',
                    es6: 'Add import * as R from "ramda"'
                }
            ],
            default: 'none',
            aliases: ['ri']
        }
    }
}

const isNamedArgument = test(/--?\S+/)

const isPositive = flip(gte)(0)

const pairWith = flip(pair)

const splitAtOrDont = index =>
    ifElse(always(isPositive(index)), splitAt(index), pairWith([]))
