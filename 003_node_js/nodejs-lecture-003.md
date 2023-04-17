# Streams in NodeJs | Lecture Notes

Notes by : [Milind Mishra](https://bento.me/milindmishra/)

## Some more Modules in Node Js

- We are going to talk about how we can start reading files in Node Js.
- Node Js as a runtime environment is that we have essentially brought the capablities of the javascript browser into your os and we can do a lot of things with it, like read files and write files and do a lot of things.
- We are going to talk about how we can start reading files in Node Js, with respect to ES6 Moduling and Common JS Moduling.

> Sidenote : We remember from the previous lessons that ES6 Moduling is the new way of doing things and Common JS Moduling is the old way of doing things. And ES6 Moduling can be enables in a file by renaming the extension of the file to .mjs and Common JS Moduling can be enabled in a file by renaming the extension of the file to .cjs.

- To start with a project we can `npm init` or `npm init -y` (supresses the questions) to create a package.json file for our project.
- We can install the fs module using `npm install fs` and we can import it in our file using `import fs from 'fs'` or `const fs = require('fs')` depending on the type of moduling we are using.
- You can add property type with value module, this would make the current folder/project as ES Module Type.

> A level up the directory where *package.json* exists would not support the ES6 Moduling.

- Global `__dirname` variable is available in Node Js, which gives the path of the current directory.

> Sidenote : We can use `__dirname` to get the path of the current directory and we can use `__filename` to get the path of the current file. But ES6 Moduling does not support `__dirname` and `__filename` variables. So we can use `import.meta.url` to get the path of the current file. And generally people shifting from an Express code base to a react code base they would face the change in the module type and hence support for `__dirname` and `__filename` variables vanishes, this is a thing to note.

## Reading files in Node Js

- The `fs module` helps us to read files in Node Js. We can use `fs.readFile` to read a file in Node Js.
- The best part is that fs is an inbuilt module in Node Js, so we do not need to install it.
- The modules gives us support to two types of functions one being callback supported and the other being promise supported. So user may use fsPromises or fs as per their choice.