import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const expenses = [
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

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
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
