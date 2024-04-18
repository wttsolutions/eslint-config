// emit react/jsx-no-comment-textnodes error
const component1 = (
  <div>// incorrect comment</div>
);

// emit react/no-unknown-property
const component2 = (
  <div unknown="property"></div>
);

console.log(component1, component2);  // eslint-disable-line

// CODE TO TEST PRETTIER:
/* eslint-disable */
let   someVariable = {
  b: 11,
name: 'John',}
/* eslint-enable */
