import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import  Header  from "./components/Header";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const loginUser : string  = localStorage.getItem("loginUser") || "";

  useEffect(() => {
    if (!loginUser.length) {
      navigate("/login");
    }
  }, [navigate, loginUser]);

  return (
    <Header />
  )
}
export default App;
