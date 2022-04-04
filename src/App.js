import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div style={{ padding: '1rem' }}>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> |{" "}
        <Link to="/posts">Blog</Link> |{" "}
        <Link to="/contato">Contato</Link>
      </nav>
      
      <Outlet />

      <div style={{
        position: "absolute",
        bottom: 0,
        height: '2rem',
      }}>
        Footer

      </div>
    </div>
  );
}

export default App;
