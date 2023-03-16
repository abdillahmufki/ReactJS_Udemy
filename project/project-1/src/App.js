import "./App.css";
import Expenses from "./components/Expenses/Expenses";
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
  return (
    <div className="App">
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
