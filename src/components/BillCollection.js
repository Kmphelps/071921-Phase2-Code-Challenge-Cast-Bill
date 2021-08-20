import React from 'react';
import BillCard from './BillCard';

export default function BillCollection({ bills, clickHandler, fireBill }) {
  // Your code here

  const billsList = bills.map((bill) => <BillCard key={bill.id} bill={bill} clickHandler={clickHandler} fireBill={fireBill} />); // renders a Bill Card for each Bill + a key and two functions

  return (
    <div className="ui four column grid">
      <div className="row">
        {billsList}
      </div>
    </div>
  );
}
