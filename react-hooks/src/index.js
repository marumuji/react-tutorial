import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Counter from './Counter';
// import Effect from './Effect';
// import Counter from './UseReducerCounter';
// import Counter2 from './UseReducerCounter2';
import UseReducerAxios from './UseReducerAxios';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    {/* <Counter/> */}
    {/* <Effect/> */}
    {/*<Counter2/> */}
    {<UseReducerAxios/>}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
