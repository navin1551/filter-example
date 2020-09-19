import React from 'react';
import './App.css';

function App() {
  const selectItems = ['item1', 'item2', 'item3']

  const style = {
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px'
  }

  return (
    <div className="App">
      <h1>Select Filter</h1>
      <div style={{ marginBottom: '50px' }}>
        <select>
          <option>No Filter</option>
          {selectItems.map(item => {
            return <option value={item}>{item}</option>
          })}
        </select>
      </div>

      <div style={style}>
        <span>item1</span>
        <span>item1</span>
        <span>item1</span>
        <span>item1</span>
      </div>

      <div style={style}>
        <span>item2</span>
        <span>item2</span>
        <span>item2</span>
        <span>item2</span>
      </div>

      <div style={style}>
        <span>item3</span>
        <span>item3</span>
        <span>item3</span>
        <span>item3</span>
      </div>
    </div>
  );
}

export default App;

