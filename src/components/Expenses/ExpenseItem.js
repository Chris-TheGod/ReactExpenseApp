import React, { useState } from "react";
import { Card } from "../UI/Card";
import { ExpenseDate } from "./ExpenseDate";

export const ExpenseItem = ({ title: props_title, amount, date }) => {
  const [title, setTitle] = useState(props_title);
  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}$</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};
