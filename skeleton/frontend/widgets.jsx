import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tab from './tab';


document.addEventListener("DOMContentLoaded", () => {

  const root = document.getElementById("root");

  ReactDOM.render(<Clock/>, root);
  ReactDOM.render(<Tab />, root);
});
