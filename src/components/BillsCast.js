import React from 'react';
import BillCard from "./BillCard";

export default function BillsCast({ bills, clickHandler, fireBill }) {

  const castedBills = bills.map((bill) => <BillCard key={bill.id} bill={bill} clickHandler={clickHandler} fireBill={fireBill}/>) // renders a Bill Card for each Bill + a key and two functions

  return (
    <div className="ui segment inverted blue bill-cast">
      <div className="ui five column grid">
        <div className="row bill-cast-row">
        {castedBills}
        </div>
      </div>
    </div>
  );
}

