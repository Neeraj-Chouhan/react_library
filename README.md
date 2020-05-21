# simple-react-loader

> this is simple react loader

[![NPM](https://img.shields.io/npm/v/simple-react-loader.svg)](https://www.npmjs.com/package/simple-react-loader) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save simple-react-loader
```

## Demo
https://neeraj-chouhan.github.io/react-loader-example/

## Loader Type 


|SNO | Type|
|--- | ---|
|1 | pulse|
|2 | save|
|3 | refresh|
	
	
	


## Usage

```jsx
import React from 'react'
import { Loader } from 'simple-react-loader'

const App = () => {

  return  ( 
  <div>
    
  <h1>this is simple loader..</h1>
  
  <Loader showLoader={true} type="pulse" />


  </div> )
}

export default App
```

## License

MIT © [Neeraj-Chouhan](https://github.com/Neeraj-Chouhan)
