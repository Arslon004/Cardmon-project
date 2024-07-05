import { Suspense, lazy, useEffect, useState } from "react";
import { v4 } from "uuid";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Loading from "./components/loading/Loading";
import { toast } from "react-toastify";
import DebtsMorePage from "./pages/DebtsMorePage";

const Layout = lazy(() => import("./components/layout"));
const HomePage = lazy(() => import("./pages/HomePage"));
const HomeMorePage = lazy(() => import("./pages/HomeMorePage"));

const TransactionsPage = lazy(() => import("./pages/TransactionsPage"));
const TransactionMorePage = lazy(() => import("./pages/TransactionMorePage"));

const DebtsPage = lazy(() => import("./pages/DebtsPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

function App() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [totalAmounts, setTotalAmounts] = useState(() => {
    const savedAmounts = localStorage.getItem("totalAmounts");
    return savedAmounts
      ? JSON.parse(savedAmounts)
      : [
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
            amount: 3000,
            phone: "+998 77 888 99 00",
            desc: "Xoliyorov Nodir Aliyor o'g'li",
            paid: false,
          },
          {
            id: "4",
            name: "Alisher",
            deadline: "2028-10-11",
            amount: 4000,
            phone: "+998 77 777 99 00",
            desc: "Soliyev Alisher Sobir o'g'li",
            paid: false,
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("totalAmounts", JSON.stringify(totalAmounts));
  }, [totalAmounts]);

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

  const handleSearch = (e) => {
    setSearch(e.target.value.trim().toLowerCase());
  };

  const unPaidAmount = (id) => {
    let newAmount = totalAmounts.find((totalAmount) => totalAmount.id === id);
    if (newAmount) {
      const isConfirmed = window.confirm(
        "Are you sure you want to mark this amount as unpaid?"
      );
      if (isConfirmed) {
        setTotalAmounts(
          totalAmounts.map((totalAmount) =>
            totalAmount.id === id ? { ...totalAmount, paid: true } : totalAmount
          )
        );
        toast.success("Amount marked as unpaid successfully!");
      }
    }
  };

  const paidAmount = (id) => {
    let newAmount = totalAmounts.find((totalAmount) => totalAmount.id === id);
    if (newAmount) {
      const isConfirmed = window.confirm(
        "Are you sure you want to mark this amount as unpaid?"
      );
      if (isConfirmed) {
        setTotalAmounts(
          totalAmounts.map((totalAmount) =>
            totalAmount.id === id
              ? { ...totalAmount, paid: false }
              : totalAmount
          )
        );
        toast.success("Amount marked as unpaid successfully!");
      }
    }
  };

  const deleteTransaction = (id) => {
    let isDelete = window.confirm(
      "Are you sure you want to delete this transaction?"
    );
    if (isDelete) {
      let newAmount = totalAmounts.filter((amount) => amount.id !== id);
      setTotalAmounts(newAmount);
      toast.success("Transaction deleted successfully");
    }
  };
  const deleteDebt = (id) => {
    let isDelete = window.confirm(
      "Are you sure you want to delete this debtor?"
    );
    if (isDelete) {
      let newAmount = totalAmounts.filter(
        (totalAmount) => totalAmount.id !== id
      );
      setTotalAmounts(newAmount);
      toast.success("Debtor deleted successfully");
    }
  };
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
                  unPaidAmount={unPaidAmount}
                  paidAmount={paidAmount}
                />
              }
            />
            <Route
              path="home/:homeId"
              element={<HomeMorePage totalAmounts={totalAmounts} />}
            />
            <Route
              path="transaction"
              element={
                <TransactionsPage
                  deleteTransaction={deleteTransaction}
                  totalAmounts={totalAmounts}
                />
              }
            />
            <Route path="transaction/:transactionId" element={<TransactionMorePage totalAmounts={totalAmounts}/>}/>
            <Route
              path="debts"
              element={
                <DebtsPage
                  deleteDebt={deleteDebt}
                  totalAmounts={totalAmounts}
                />
              }
            />
            <Route path="debts/:debtsId" element={<DebtsMorePage totalAmounts={totalAmounts}/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
