# Project 0 | Lecture Notes

Notes by : [Milind Mishra](https://bento.me/milindmishra/)

## Module Pattern

### Header Notes for Module Pattern

- Syntax like `module.exports = { }` is used to export the module. This is called module pattern.
- Other syntaxes like import {useEffect} from 'react' are also used to export the module which are a part of ES6 Modules syntax.
- In ES6 Modules syntax, we can export the module in two ways:
  - `export default` : This is used to export the module as default.
  - `export` : This is used to export the module as named export.
- In ES6 Modules syntax, we can import the module in two ways:
  - `import` : This is used to import the module as default.
  - `import { }` : This is used to import the module as named export.

### Module Pattern in Node JS

- Module Pattern is a mechanism for splitting JS Program into separate managable chunks called as module, that may be imported when needed.
- Sidenote, just like in C++ header files, there are bunch of code written in a file, and we can import that file in another file and use the code written in that file. For example Stack in STL is implemented in a header file, and we can import that header file in our program and use the stack.
- In Node JS, we can use the module pattern to split our code into separate files and import them when needed.
- For illustration purposes, lets say we need to implement Stack using Linked List. We can split our code into two files, one for the implementation of Stack and another for the implementation of Linked List. We can then import the Linked List file in the Stack file and use the Linked List implementation in the Stack file. This is how we can use the module pattern in Node JS.
- In other programming languages, in java as well we prepare class, library and use them in other class.
- In the world of JavaScript we prepare packages. We prepare them in the form of modules. We can use them in other modules.
- Usecase : We can prepare a module for all the searching algorithms, one for sorting algorithms, one for data structures and use them in other modules.
- At interviews its common to be asked to prepare a module for a particular functionality and use it in other modules.

### 2 Mechanisms for module creation in JavaScript

- In JavaScript, we can create modules in two ways:
  - CJS (Common JS) : This is the default module system in Node JS.
  - ESM (ES6 Modules) : This is the default module system in the browser. This is also supported in Node JS from version 13.2.0.
- ESM stands for ECMAScript Modules.
- Adding `type: "module"` in package.json of a node.js application converts its module system to ESM.
- In ESM, we can export the module in two ways:
  - `export default` : This is used to export the module as default.
  - `export` : This is used to export the module as named export.
- Examples of ESM Syntax :

```js
// Exporting a default function
export default function add(x, y) {
  return x + y;
}
// Importing from react library
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './styles.css';

import App from './App';
```

- Since React uses ESM we can import the module in two ways:
  - `import React from 'react'` : This is used to import the module as default.
  - `import {useEffect} from 'react'` : This is used to import the module as named export.

### DRY Principle (Don't Repeat Yourself)

- DRY Principle stands for Don't Repeat Yourself.
- In programming, we should not repeat the code. We should write the code once and use it multiple times. This is called DRY Principle.
- Technically we write functions and use them multiple times. This is how we follow the DRY Principle.
- If something can be repeated, it should be written as a function and used multiple times.
- We can segregate the code into different files and use them in other files.

### Example of Module Pattern

- Lets make a `searching.js` file that contains the implementation of Linear Search and Binary Search.

```js
// Linear Search
const linearSearch = (arr, x) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return -1;
};

// Binary Search assuming array is sorted
const binarySearch = (arr, x) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === x) {
      return mid;
    } else if (arr[mid] < x) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

// Exporting the module in Common JS Syntax
module.exports = {
  linearSearch: linearSearch,
  binarySearch: binarySearch
};

// shorthand syntax when thw key value pair is same
module.exports = {linearSearch, binarySearch};

// named export in Common JS Syntax
module.exports = {linear : linearSearch, binary : binarySearch};

// In ES6 Modules Syntax
export default {linearSearch, binarySearch};
```

> There exists a global object called `module` in Node JS. This object contains a property called `exports` which is an object. We can add properties to this object and export them. This is how we export the module in Common JS Syntax.

- Inorder to use this module in another file, we can import it using the following syntax:
- Using it in the file lets say `index.js` in the same level.

> The global require function is used to import the module in Node JS. This function takes the path of the module as an argument and returns the module.

```js
// Importing the module in Common JS Syntax
const searchingFunctions = require('./searching');

console.log(searchingFunctions); // { linearSearch: [Function: linearSearch], binarySearch: [Function: binarySearch] }

// in order to use the functions we need to access them using the dot notation
console.log(searchingFunctions.linearSearch([1, 2, 3, 4, 5], 3)); // 2
console.log(searchingFunctions.binarySearch([1, 2, 3, 4, 5], 3)); // 2

const {linearSearch, binarySearch} = require('./searching'); // using object destructuring

// In ES6 Modules Syntax
// import {linearSearch, binarySearch} from './searching';

console.log(linearSearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
```

- This is how we are able to get the functions defined in another file and use them in our file.
- Benifits of destructuring :
  - We can import only the functions that we need.
  - We can import the functions with different names.
- Destructuring is essentially unpacking the object and assigning the properties to the variables.
- In the above example, we are unpacking the object and assigning the properties to the variables `linearSearch` and `binarySearch`.

- The require function accepts both absolute and relative paths.
- Absolute path : The path of the file from the root of the project.
- Relative path : The path of the file from the current file.

> NOTE : In order to use ES6 Modules Syntax in Node JS, we need to add `"type": "module"` in the package.json file. Then the whole application will be converted to ESM. You can only use one kind of module system in a project. You cannot mix both the module systems.

- Alias in require imports, we can use alias to import the module.

```js
const  { linearSearch : ls, binarySearch: bs } = require('./searching');
```

- In the above example, we are importing the functions with different names. This is useful when we have a lot of imports in a file. We can use alias to make the code more readable.

### Example using more algorithms packed in `sorting.js`

```js
// Bubble Sort
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

// Selection Sort
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
};

// Insertion Sort
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
};

// Exporting the module in Common JS Syntax
// another way to export the module
module.exports.bubbleSort = bubbleSort;
module.exports.selectionSort = selectionSort;
module.exports.insertionSort = insertionSort;

// also another intresting export pattern people do is using a IIFE (Immediately Invoked Function Expression)
module.exports.quickSort  = (function () {
  const quickSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
  };
  return quickSort;
})();

// rather a normal function as well
module.exports.mergeSort = function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

```

- In the above example, we have exported the module in a different way. We can export the module in any way we want.

> Same drill to use them in `index.js` file.

```js
const { bubbleSort, selectionSort, insertionSort, quickSort, mergeSort } = require('./sorting');

console.log(bubbleSort([5, 4, 3, 2, 1])); // [ 1, 2, 3, 4, 5 ]
console.log(selectionSort([5, 4, 3, 2, 1])); // [ 1, 2, 3, 4, 5 ]
console.log(insertionSort([5, 4, 3, 2, 1])); // [ 1, 2, 3, 4, 5 ]
console.log(quickSort([5, 4, 3, 2, 1])); // [ 1, 2, 3, 4, 5 ]
console.log(mergeSort([5, 4, 3, 2, 1])); // [ 1, 2, 3, 4, 5 ]
```

- Lets say we dont want to export the messy object but rather just a function that can be used to sort the array. We can do that by using a function that returns the object.

```js
// sorting.js
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

// Here we are exporting a function out of the module, now the export global becomes a function instead of an object.
module.exports = bubbleSort;
// these kind of export is called default export or a named export
// more common in ESM 
```

- Simmilarly using it in `index.js`

```js
const bubbleSort = require('./sorting');

// use it as a function
console.log(bubbleSort([5, 4, 3, 2, 1])); // [ 1, 2, 3, 4, 5 ]
```

- We may export anything that we may require in the future. We can export a function, a class, an object, a string, a number, an array, a boolean, etc.

> Note : We cannot technically have multiple default exports in a module. But we can have multiple named exports in a module.

## ES6 Modules

- Converting the Common JS Syntax to ES6 Modules Syntax.
- We need to add `"type": "module"` in the `package.json` file. Then the whole application will be converted to ESM. You can only use one kind of module system in a project. You cannot mix both the module systems.

### There are two ways to convert the Common JS Syntax to ES6 Modules Syntax

- By default Node.js will treat following as Common JS Syntax.
  - Files with `.cjs` extension.
  - Files with `.js` extension if the `package.json` file does not have `"type": "module"` or nearest parent `package.json` file has `"type": "commonjs"`.
  - Files with extension that is *not* `.mjs` or `.cjs` or `.js` or `.json` or `.node`. (when nearest parent `package.json` file contains a top level field `"type"` with a value of `"module"`. Those files are recognised as Common JS Syntax included via `require()`. not when used as command line entry point of the program.)

> Calling `require()` always uses the Common JS module loader. Calling the `import()` keyword always uses the ES6 module loader.

- Package.json

```json
{
  type: "module"
}
```

- On using require in .mjs file will throw an error.

```js
// index.mjs
require('./sorting'); // throws an error
```

- Error : `SyntaxError: Cannot use import statement outside a module`

- On using import in .js file will throw an error.

```js
// index.js
import bubbleSort from './sorting'; // throws an error
```

- Error : `SyntaxError: Cannot use import statement outside a module`

- On using import in .cjs file will throw an error.

```js
// index.cjs
import bubbleSort from './sorting'; // throws an error
```

- Error : `SyntaxError: Cannot use import statement outside a module`

- A common gotcha, that if you use module.exports you need to import them as .js files otherwise js does not find them,

### Default exports and Named exports in ESM

- Default exports and Named exports are the same as in Common JS Syntax.

```js
// sorting.js
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

// Here we are exporting a function out of the module, now the export global becomes a function instead of an object.
export default bubbleSort;
// these kind of export is called default export or a named export
// more common in ESM 
```

- Simmilarly using it in `index.js`

```js
import bubbleSort from './sorting';

// use it as a function
console.log(bubbleSort([5, 4, 3, 2, 1])); // [ 1, 2, 3, 4, 5 ]
```

- We can also export multiple things from a module.

```js
// sorting.js
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
};

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
};


// Here we are exporting a function out of the module, now the export global becomes a function instead of an object.
export default bubbleSort;
export { selectionSort, insertionSort };
// these kind of export is called default export or a named export
```

- Simmilarly using it in `index.js`

```js
import bubbleSort, { selectionSort, insertionSort } from './sorting';

// use it as a function
console.log(bubbleSort([5, 4, 3, 2, 1])); // [ 1, 2, 3, 4, 5 ]
console.log(selectionSort([5, 4, 3, 2, 1])); // [ 1, 2, 3, 4, 5 ]
console.log(insertionSort([5, 4, 3, 2, 1])); // [ 1, 2, 3, 4, 5 ]
```

- We may export anything that we may require in the future. We can export a function, a class, an object, a string, a number, an array, a boolean, etc.

> NOTE :  When you have a default export you can technically access it without destructuring it, just like in the above sinppet the `bubbleSort` function is exported as a default export, so we can access it without destructuring it, while rest of the two named exports are destructured and accessed.

- We can also export a function as a named export.

```js
// sorting.js
export const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

export const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
};

export const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
};
```

- Simmilarly using it in `index.js`

```js
import { bubbleSort, selectionSort, insertionSort } from './sorting';

// use it as a function
console.log(bubbleSort([5, 4, 3, 2, 1])); // [ 1, 2, 3, 4, 5 ]
console.log(selectionSort([5, 4, 3, 2, 1])); // [ 1, 2, 3, 4, 5 ]
console.log(insertionSort([5, 4, 3, 2, 1])); // [ 1, 2, 3, 4, 5 ]
```

- If you may need to export in object fashion like selectionSort, insertionSort and rest you may use the named export and if you may need to export only one function like bubbleSort you may use the default export. Note, that there can be only one default export in a module.

- Module is a jargon for a file in JS. So, we can say that a module is a file in JS.

- We can also export a class.

```js
// lets say we make a class for a person

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
  }
}

export default Person;
```

- Simmilarly using it in `index.js`

```js
import Person from './person';

const person = new Person('John', 25);
person.sayHi(); // Hi, I am John and I am 25 years old.
```

- We can also export a class as a named export.

```js
// class for a person
export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
  }
}
```

- Simmilarly using it in `index.js`

```js
import { Person } from './person';

const person = new Person('John', 25);
person.sayHi(); // Hi, I am John and I am 25 years old.
```