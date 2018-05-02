# Steps to create react app

1. `npm init -y`

1. install dependencies
```
sudo npm i -g webpack webpack-cli
npm i babel-core babel-loader babel-preset-env babel-preset-react react react-dom react-router-dom html-webpack-plugin
npm i style-loader css-loader sass-loader
``` 

1. configure `.babelrc` file
```
{
  "presets": ["env", "react"]
}
```

1. configure `webpack.config.js` file
```
const path = require('path');

const config = {
  mode: 'development', // production
  devtool: 'source-map',
  entry: './main.js', // name of java script file
  output: {
    path: path.resolve(__dirname, './dist'), // puts dist in current working directory
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.css$/, loader: [
        'style-loader', 'css-loader'  // The order of these matters!
      ]}
    ]
  }
};

module.exports = config;
```

1. create minimal `index.html` file
```
<div id="root"></div>
<script src="./dist/bundle.js"></script>
```

1. create minimal `main.js` react file
```
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'

class App extends React.Component { // MyCoolApp is the name of the app
  constructor(props){
    super(props);
  }

  render() { // JSX
    return <div>
      <h1>My Cool App</h1>
      </div>;
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);  // Class and render need to be the same.
}
```

#Setup CSS
in app/main.js file
```

```

