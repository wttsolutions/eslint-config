/* test eslint errors */

const a = 1;

/* simulate no-var warning */
var b = 'value';

/* simulate no-console error */
console.log(a, b);

// CODE TO TEST PRETTIER:
/* eslint-disable */
let   someVariable = {
  b: 11,
name: 'John',}
/* eslint-enable */
