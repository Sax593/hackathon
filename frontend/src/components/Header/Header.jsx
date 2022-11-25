import "./header.css";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";

export default function Header() {
  return (
    <div className="header">
      <Logo />
      <NavBar />
    </div>
  );
}
