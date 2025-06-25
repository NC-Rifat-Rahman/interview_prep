/* Ramda.js and lodash libraries have their own buit-in functions
for compose and pipe functions. lodash calls pipe "flow". */

/* The higher order function "reduce" takes a list of values and applies
function to each of these values, accumulating the single result */

/* To get the compose order from right to left as we see with nested function calls
in our example above, we need reduceRight... */

const compose = (...fns) => val => fns.reduceRight((prev,fn)=> fn(prev),val);

const compResult = compose(multiply5,subtract1,add2)(4);

const pipe = (...fns) => val => fns.reduce((prev,fn)=>(prev),val);

const pipeResult = pipe(add2,subtract1,multiply5)(4);

const divideBy = (divisor,num) => num / divisor;

const pipeResult3 = pipe(
    add2,
    subtract1,
    multiply5,
    x=>divideBy(2,x)
)(5);

// or you could curry the divideBy function for a custom unary function
const divBy = (divisor) => (num) => num / divisor;
