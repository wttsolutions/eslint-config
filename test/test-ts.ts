// This error not catched by typescript-eslint (only tsc)
let a = 4
a += 'R_OK'

function test1(p: number) {
  return p + 'sadf'
}

function test2(p) {
  return [p, 0]
}

// emit @typescript-eslint/no-unused-vars
const v1 = 10;


// emit @typescript-eslint/no-misused-promises
const promise2 = Promise.resolve('value');
if (promise2) {
  console.log(`123`)
}

console.log(a, test1('a'), test2(1), promise2)

// CODE TO TEST PRETTIER:
/* eslint-disable */
let   someVariable = {
  b: 11,
name: 'John',}
/* eslint-enable */
