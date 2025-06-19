import { Link } from "react-router";

export default function NavigationBar() {
  return (
    <div style={{
      display: "flex",
      gap: "10px"
    }}>
      <Link to="/">Home</Link>
      <Link to="/about" >About</Link>
    </div>
  );
}
