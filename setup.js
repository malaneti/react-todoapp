mkdir react-hello-world
cd react-hello-world
npm init
npm install webpack -save
touch webpack.config.js

project: npm install webpack --save-dev

global: npm install webpack -g

webpack  - //to get bundle.js file, if webpack config is set up

npm i babel-loader babel-preset-es2015 babel-preset-react -S

touch .babelrc
{
  "presets" : ["es2015", "react"]
}

update webpack to use-babel loader while bundling the file 