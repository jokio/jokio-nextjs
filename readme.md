# jokio-nextjs
[![Build Status](https://travis-ci.org/jokio/jokio-nextjs.svg?branch=master)](https://travis-ci.org/jokio/jokio-nextjs)
[![npm version](https://badge.fury.io/js/jokio-nextjs.svg)](https://badge.fury.io/js/jokio-nextjs)
[![engine: jokio](https://img.shields.io/badge/engine-%F0%9F%83%8F%20jokio-44cc11.svg)](https://github.com/jokio/jokio)

nextjs middleware for jokio

## Example:

folder structure
```
|src
|- index.ts
|- pages
|-- index.js
```

src/index.ts
```js
import { run } from 'jokio'
import { nextjs, express } from '../index';

run(
  express(),
  nextjs({ pagesDirectory: './src/' }),
)
```

src/pages/index.js
```js
export default props => <div>Hello World</div>
```
