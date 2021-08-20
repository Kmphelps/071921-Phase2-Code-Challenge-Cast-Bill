import React, { useEffect, useState } from 'react';
import BillCollection from './components/BillCollection';
import BillsCast from './components/BillsCast';

const API = "http://localhost:8002/bills";

export default function App() {

  const [bills, setBills] = useState([]); 

  
  useEffect(() => { 
    fetch(API) // fetches the array of objects and returns a promise which resolves with a response object
      .then((r) => r.json()) // returns a second promise that resolves with the result of parsing the response body text as JSON 
      .then((json) => setBills(json)); // sets the JSON to the variable
  }, []);

  function castBill(id) {
    setBills(bills.map((bill) => bill.id === id ? { ...bill, casted: true } : bill)) // adds a "casted" property on click 
  }

  function unCastBill(id) {
    setBills(bills.map((bill) => bill.id === id ? { ...bill, casted: false } : bill)) // updates the "casted" property on click
  }

  function fireBill(id) {
    setBills(bills.filter((bill) => bill.id !== id)) // filters out the object with matching id
  }

  return (
    <div>
      <BillsCast bills={bills.filter((bill) => bill.casted)} clickHandler={unCastBill} fireBill={fireBill} />
      <BillCollection bills={bills} clickHandler={castBill} fireBill={fireBill} />
    </div>
  );
}
