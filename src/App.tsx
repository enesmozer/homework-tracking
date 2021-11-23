import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const loginUser = localStorage.getItem("loginUser");
  useEffect(() => {
    if (!loginUser) navigate("/login");
  }, [loginUser,navigate]);

  return <div className="main"></div>;
}
export default App;
