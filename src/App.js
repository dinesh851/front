import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [toggleValue, setToggleValue] = useState(false);
  const [dropdown1Value, setDropdown1Value] = useState('');
  const [dropdown2Value, setDropdown2Value] = useState('');
  const [dropdown3Value, setDropdown3Value] = useState('');
  
  const handleToggleChange = (e) => {
    setToggleValue(e.target.checked);
  };
  
  const handleDropdown1Change = (e) => {
    

    setDropdown1Value(e.target.value);
  };
  
  const handleDropdown2Change = (e) => {
    setDropdown2Value(e.target.value);
  };
  
  const handleDropdown3Change = (e) => {
    setDropdown3Value(e.target.value);
  };
  
  const handleButtonClick = (e) => {
    // handle button click event
    fetch('http://127.0.0.1:5000/buy')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const bb = JSON.stringify(data)
      const lala = document.getElementById('data')
      lala.innerHTML = bb
      const tableBody = document.getElementById("order-table");
       
      data.forEach(order => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${order.dname}</td>
          <td>${order.trantype}</td>
          <td>${order.qty}</td>
          <td>${order.avgprc}</td>
          <td>${order.exch_tm}</td>
          <td>${order.status}</td>
        `;
        tableBody.appendChild(row);
      });
    })
    .catch(error => console.error(error))
  };
  let daata = {
    ltp: 55,
    hii: 44
  };
  const handleButtonClick1 = (e) => {
    fetch('http://127.0.0.1:5000/api/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(daata)
    })
    .then(response => {
      // handle the response from Flask API
      console.log(response);
      console.log("message received");
    })
    .catch(error => {
      // handle any errors
      console.error(error);
    });
  };
  return (  
     
    <div>
       <br></br>      
       
      <div class="dropdown-div">
        <label>INDEX</label>
      <select value={dropdown1Value} onChange={handleDropdown1Change}>
        <option value="">Select an option</option>
        <option value="option1">Bankn Nifty</option>
        <option value="option2">Nifty</option>
        <option value="option3">Nifty</option>
      </select>
      <label>EXPIRY</label>
      <select value={dropdown2Value} onChange={handleDropdown2Change}>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <label>STRIKE</label>
      
      <select value={dropdown3Value} onChange={handleDropdown3Change}>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <button onClick={handleButtonClick1}>MTM : 1000</button>
      <button onClick={handleButtonClick}>banknity 4800 ce :555</button>
      </div>
        
       <div class="button-div">
      <button onClick={handleButtonClick}>BUY 1</button>
      <button onClick={handleButtonClick1}>BUY 2</button>
      <button onClick={handleButtonClick}>BUY 4</button>
      <button onClick={handleButtonClick}>CLOSE</button>
      <button onClick={handleButtonClick}>Button 5</button>
      </div>
      <h1>Postion Book</h1>
      <div class="table-div">
      <table>
        <thead>
          <tr>
            <th>instrument</th>
            <th>quantity</th>
            <th>avg_price</th>
            <th>ltp</th>
            <th>mtm</th>
            <th>pnl</th>
          </tr>
        </thead>
        <tbody  >
           
        </tbody>
      </table> 
      </div>
      <h1>Trade Book</h1>

      <div class="table-div">
      <table>
        <thead>
          <tr>
            <th>dname</th>
            <th>trantype</th>
            <th>qty</th>
            <th>avgprc</th>
            <th>exch_tm</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody id="order-table">
         
        </tbody>
      </table>
      </div>
      <div id='data' >
        blabla
      </div>
    </div>
   
  );
}

export default App;
