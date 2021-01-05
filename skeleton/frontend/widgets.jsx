import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tab from './tab';
import Weather from './weather';



document.addEventListener("DOMContentLoaded", () => {

  const root = document.getElementById("root");

  const tabArr = [{ title: "tab1", content: "I am the first tab" }, { title: "tab2", content: "I am the second pane" }, { 
  title: "tab3", content: "I am the third tab"}]
  

  const widgets = [< Clock />, < Tab tabs = { tabArr } />, <Weather />]

  ReactDOM.render(widgets, root);
});
