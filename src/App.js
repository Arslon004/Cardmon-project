import { Suspense, lazy, useState } from "react";
import { v4 } from "uuid";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Loading from "./components/loading/Loading";
import { toast } from "react-toastify";

const Layout = lazy(() => import("./components/layout"));
const HomePage = lazy(() => import("./pages/HomePage"));
const HomeMorePage = lazy(() => import("./pages/HomeMorePage"));

const TransactionsPage = lazy(() => import("./pages/TransactionsPage"));
const DebtsPage = lazy(() => import("./pages/DebtsPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

function App() {
  const [search,setSearch]=useState("");
  const [selected, setSelected] = useState(null);
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [totalAmounts, setTotalAmounts] = useState([
    {
      id: "1",
      name: "Arslon",
      deadline: "2023-09-21",
      amount: 1000,
      phone: "+998 88 100 79 82",
      desc: "Arslon Bozorov Nurbobo o'g'li",
      paid: true,
    },
    {
      id: "2",
      name: "G'afur",
      deadline: "2022-09-28",
      amount: 2000,
      phone: "+998 88 100 88 99",
      desc: "G'afur Valiyev Sobir o'g'li",
      paid: false,
    },
    {
      id: "3",
      name: "Nodir",
      deadline: "2018-10-11",
      amount: 1000,
      phone: "+998 77 888 99 00",
      desc: "Xoliyorov Nodir Aliyor o'g'li",
      paid: false,
    },
  ]);
  const [totalAmount, setTotalAmount] = useState({
    name: "",
    deadline: "",
    amount: "",
    phone: "",
    desc: "",
    paid: false,
  });
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setTotalAmount({
      name: "",
      deadline: "",
      amount: "",
      phone: "",
      desc: "",
      paid: false,
    });
    setShow(true);
    setSelected(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let form = e.target;
    if (form.checkValidity()) {
      let newAmount = {
        ...totalAmount,
        amount: +totalAmount.amount,
        id: selected ? totalAmount.id : v4(),
      };
      if (selected === null) {
        setTotalAmounts([...totalAmounts, newAmount]);
        toast.success("Added successfully");
      } else {
        let updatedAmounts = totalAmounts.map((amount) => {
          if (amount.id === selected) {
            if (JSON.stringify(amount) !== JSON.stringify(newAmount)) {
              toast.success("Updated successfully");
              return newAmount;
            } else {
              toast.info("No changes detected");
              return amount;
            }
          } else {
            return amount;
          }
        });
        setTotalAmounts(updatedAmounts);
      }
      handleClose();
    } else {
      setValidated(true);
    }
  };

  const handleAmount = (e) => {
    setTotalAmount({ ...totalAmount, [e.target.id]: e.target.value });
  };

  const editAmount = (id) => {
    setSelected(id);
    let amount = totalAmounts.find((totalAmount) => totalAmount.id === id);
    setTotalAmount(amount);
    setShow(true);
  };

  const deleteAmount = (id) => {
    let isDelete = window.confirm("Are you sure you want to delete this row?");
    if (isDelete) {
      let newAmount = totalAmounts.filter(
        (totalAmount) => totalAmount.id !== id
      );
      setTotalAmounts(newAmount);
      toast.success("Delete successfully");
    }
  };

  const handleSearch=(e)=>{
    setSearch(e.target.value.trim().toLowerCase())
  }
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Layout />}>
            <Route
              path="home"
              element={
                <HomePage
                  totalAmounts={totalAmounts}
                  validated={validated}
                  show={show}
                  handleClose={handleClose}
                  handleShow={handleShow}
                  handleSubmit={handleSubmit}
                  totalAmount={totalAmount}
                  handleAmount={handleAmount}
                  editAmount={editAmount}
                  selected={selected}
                  deleteAmount={deleteAmount}
                  handleSearch={handleSearch}
                  search={search}
                />
              }
            />
            <Route path="home/:homeId" element={<HomeMorePage totalAmounts={totalAmounts} />} />
            <Route path="transaction" element={<TransactionsPage />} />
            <Route path="debts" element={<DebtsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
