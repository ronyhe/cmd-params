const test = require('ava')
const { add1 } = require('../src/example.steph')

test('add1', t => {
    t.deepEqual(add1(5), 6)
})
