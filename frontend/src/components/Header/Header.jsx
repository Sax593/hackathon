import "./header.css";
import Logo from "@components/Logo/Logo";
import NavBar from "@components/NavBar/NavBar";

export default function Header() {
  return (
    <div className="header">
      <Logo />
      <NavBar />
    </div>
  );
}
