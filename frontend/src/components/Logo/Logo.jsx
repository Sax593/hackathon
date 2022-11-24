import "./logo.css";
import logo from "@assets/logo.png";

export default function Logo() {
  return (
    <div>
      <img className="logo" src={logo} alt="Logo" />
    </div>
  );
}
