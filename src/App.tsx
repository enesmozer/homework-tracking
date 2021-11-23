import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import  Header  from "./components/Header";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const loginUser = JSON.parse(localStorage.getItem("loginUser") || "{}");

  useEffect(() => {
    if (!Object.keys(loginUser).length) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Header />
  )
}
export default App;
