import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Traktir Nasi Padang Sekampung",
    amount: 1000000,
    date: new Date(2023, 3, 15),
  },
  {
    id: "e2",
    title: "Beli Mobil baru",
    amount: 500000,
    date: new Date(2023, 3, 15),
  },
  {
    id: "e3",
    title: "Modif Motor",
    amount: 1030000,
    date: new Date(2023, 3, 15),
  },
  {
    id: "e4",
    title: "Holliday ke Bali",
    amount: 1067000,
    date: new Date(2023, 3, 15),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    }); // setExpenses
  };
  return (
    <div className="App">
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
