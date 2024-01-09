// this error not catched by typescript-eslint (only tsc)
let a = 4
a += 'R_OK'

function test1(p: number) {
  return p + 'sadf'
}

function test2(p) {
  return [p, 0]
}

// emit @typescript-eslint/no-unused-vars
const promise = new Promise((resolve, reject) => resolve('value'));


// emit @typescript-eslint/no-misused-promises
const promise2 = Promise.resolve('value');
if (promise2) {
  console.log(`123`)
}

console.log(a, test1('a'), test2(1), promise, promise2)

// emit react/jsx-no-comment-textnodes error
const component1 = (
  <div>// incorrect comment</div>
);

// emit react/no-unknown-property
const component2 = (
  <div unknown="property"></div>
);

console.log(component1, component2)
