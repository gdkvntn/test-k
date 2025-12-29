import { Link, Outlet } from 'react-router';
import './App.css';

function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link> | <Link to="/react">React</Link> |{' '}
          <Link to="/router-dom">Router DOM</Link>|{' '}
          <a href="/test/">Test</a>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
