D3 React
=====================

A starting place for react + d3 experiments, featuring hot-reloading, auto browser refresh, and a centralized redux data store!

### Usage

With Docker
```
docker build -t d3-react .
docker run -d -p 3000:3000 -v $(pwd)/src:/app/src d3-react
open http://localhost:3000
```

or just locally

```
npm install
npm start
open http://localhost:3000
```

### Dependencies

* D3.js
* React
* Webpack
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)

### Resources

* <a href="http://blog.andrewray.me/reactjs-for-stupid-people/">React For Stupid People</a>
* <a href="http://blog.andrewray.me/flux-for-stupid-people/">Flux For Stupid People</a>
* <a href="http://jlongster.com/Removing-User-Interface-Complexity,-or-Why-React-is-Awesome">Removing User Interface Complexity, or Why React is Awesome</a>
* <a href="https://facebook.github.io/react/docs/thinking-in-react.html">Thinking In React</a>
* <a href="https://facebook.github.io/react/docs/component-specs.html">React Lifecycle Method Documentation</a>
* <a href="https://facebook.github.io/react/docs/getting-started.html">Full Documentation</a>
* <a href="https://github.com/gaearon/react-hot-boilerplate">React Hot Boilerplate</a>
* <a href="https://github.com/mbostock/d3/wiki/Gallery">D3 Examples</a>
* <a href="https://github.com/mbostock/d3/wiki/API-Reference">D3 API</a>
