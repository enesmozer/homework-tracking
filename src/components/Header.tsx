import { Button, Typography } from "antd";
import { useNavigate } from "react-router";

const { Title } = Typography;
function Header() {
  const navigate = useNavigate();
  const loginUser = JSON.parse(localStorage.getItem("loginUser") || "{}");
  return (
    <header className="header">
      <Title className="header-right">Home Tracking System</Title>
      {Object.keys(loginUser).length > 0 ? (
        <Button
          className="header-left"
          type="text"
          onClick={() => {
            localStorage.removeItem("loginUser");
            navigate("/login");
          }}
        >
          Logout
        </Button>
      ) : (
        <></>
      )}
    </header>
  );
}
export default Header;
