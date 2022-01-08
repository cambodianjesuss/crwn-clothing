/* eslint-disable react/jsx-no-undef */
/**
 * Redux Notes
 */

// 1) Installing dependencies and middleware
// npm install redux redux-logger react-redux

// 2) Import the redux provider into our index.js (main app file) to give access to reducers and store
// #index.js

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

// 2a) Provider is the component we want to wrap around our entire application
// #index.js

// eslint-disable-next-line no-undef
ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root"),
);

// 3) Once we wrapped our all with the Provider component, we need to create a store and pass it

// 3a) Before we create our store with middleware, we will create actions and reduces for our store
