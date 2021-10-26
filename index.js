import { once } from './fnOnce.js';
import { add } from './arithmetic.js';

const onceAdd = once(add);
console.log(onceAdd(1,2)); // Outputs 3
console.log(onceAdd(2,5)); // Outputs 3 instead of 7
console.log(onceAdd(3,3)); // Outputs 3 instead of 6
