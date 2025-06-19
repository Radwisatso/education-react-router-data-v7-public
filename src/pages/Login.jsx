import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();

  function auth() {
    localStorage.setItem("access_token", "ini token loh");
    navigate("/")
  }

  return <button onClick={auth}>Login dulu</button>;
}
