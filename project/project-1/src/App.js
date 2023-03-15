import "./App.css";
import { ExpenseItem } from "./components/ExpenseItem";

function App() {
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
  return (
    <div className="App">
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
