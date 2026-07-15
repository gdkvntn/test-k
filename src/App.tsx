import { Link, Outlet, useLocation } from 'react-router';
import './App.css';

const navItems = [
  { label: 'Home', to: '/', type: 'spa' },
  { label: 'About', to: '/about', type: 'spa' },
  { label: 'Catalog', to: '/test-kcatalog', type: 'reload' },
];

function App() {
  const location = useLocation();

  return (
    <div className="site-shell">
      <header className="topbar">
        <Link className="brand" to="/">
          <span className="brand-mark">n</span>
          nordly
        </Link>
        <nav aria-label="Основная навигация">
          {navItems.map((item) =>
            item.type === 'spa' ? (
              <Link className={location.pathname === item.to ? 'active' : ''} key={item.to} to={item.to}>
                {item.label}
              </Link>
            ) : (
              <a className={location.pathname.endsWith(item.to) ? 'active' : ''} key={item.to} href={`${import.meta.env.BASE_URL}test-kcatalog`}>
                {item.label}
              </a>
            ),
          )}
          <a href="https://www.google.com">Google ↗</a>
        </nav>
        <button className="cart" type="button" aria-label="Shopping cart">Cart <span>0</span></button>
      </header>
      <main><Outlet /></main>
      <footer><span>nordly</span><span>Simple things for good days</span></footer>
    </div>
  );
}

export default App;
