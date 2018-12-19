1.
mkdir minimal-react-boilerplate
cd minimal-react-boilerplate

2.
npm init -y

3. optional
npm config list

4.
mkdir dist
cd dist
vi dist/index.html
<!DOCTYPE html>
<html>
  <head>
    <title>The Minimal React Webpack Babel Setup</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="/bundle.js"></script>
  </body>
</html>

5.
webpack: module bundler and build tool
webpack-dev-server: server the app in a localhost
webpack-cli: configure Webpack setup in a config file
npm install --save-dev webpack webpack-dev-server webpack-cli

6.
package.json
"scripts": {
  "start": "webpack-dev-server --config ./webpack.config.js --mode development",
  ...
},
...

7.
vi webpack.config.js
module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  serve: {
    port: 8081
  }
};

8.
mkdir src
cd src
vi src/index.js
console.log('My Minimal React Webpack Babel Setup');

9.
babel: enables old and new JavaScript language feature in most browser
npm install --save-dev @babel/core @babel/preset-env

10.
babel-loader: hook Babel with Webpack
npm install --save-dev babel-loader

11.
babel/preset-react: configuration to transfort the React's JSX syntax to vanilla JavaSrcript
npm install --save-dev @babel/preset-react

12.
babel/plugin-proposal-class-properties: this plugin transforms static class properties as well as properties declared with the property initializer syntax
npm install --save-dev @babel/plugin-proposal-class-properties

13.
babel configuration: .babelrc
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties"
  ]
}

14.
react+react-dom: to use react stuff...
npm install --save react react-dom

15.
src/index.js
import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

16.
react-hot-loader: prohibits reloading the entire page, once the app was changed
npm install --save-dev react-hot-loader

webpack.config.js
const webpack = require('webpack');
module.exports = {
  ...,
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
}

src/index.js
...
module.hot.accept();

17.
@babel/preset-flow: enables flow
npm install --save-dev @babel/preset-flow

{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/flow"
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties"
  ]
}

18.
flow-bin: used to check the types
npm install --save-dev flow-bin

package.json
"prepublish": "npm run build",
"flow": "flow"

usage:
1. the first time, run: npm run flow init
2. after running flow with init the first time, run: npm run flow

19.
flow-runtime: enables flow with prop-types at runtime
npm install flow-runtime
npm install --save-dev babel-plugin-flow-runtime
npm install --save-dev @babel/plugin-proposal-decorators

.babelrc
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/flow"
  ],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    "@babel/plugin-proposal-class-properties",
    ["flow-runtime", {
      "assert": true,
      "annotate": true
    }]
  ]
}

20.
add flow anotation to each file, which should be flow checked

// @flow

21.
add support for jest/enzyme testing using flow

A) npm install --save-dev jest

B) npm install -g flow-typed

C) flow-typed install jest@23.6.0 #

D) npm i --save-dev enzyme enzyme-adapter-react-16 enzyme-to-json

E) npm i --save-dev babel-jest babel-plugin-transform-flow-strip-types

F) npm i --save-dev babel-core@^7.0.0-bridge.0 @babel/core regenerator-runtime

G) package.json

{
  "scripts": {
    "test": "jest"
  },
  "jest": {
    "setupTestFrameworkScriptFile": "<rootDir>__tests__/setup/setupEnzyme.js",
    "testPathIgnorePatterns": [
      "<rootDir>/__tests__/setup/"
    ]
  }
}

H) .flowconfig

[libs]
./flow-types/

I) .babelrc

"plugins": [
  "transform-flow-strip-types"
]

22.
npm test
