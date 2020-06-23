import React from 'react';
import './App.css';
import BaiTapDanLayout from './components/BaiTapDanLayout/BaiTapDanLayout';
import DataBinding from './components/DataBinding/DataBinding';
import EventBinding from './components/DataBinding/EventBinding';
import State from './components/State/State';
import ExState from './components/State/ExState';

function App() {
  return (
    <div className="App">
      {/* <BaiTapDanLayout /> */}
      {/* <DataBinding /> */}
      {/* <EventBinding /> */}
      {/* <State /> */}
      <ExState />
    </div>
  );
}

export default App;
