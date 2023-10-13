import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <aside className="sidebar">
        <nav className="navigation">
          <ul className="links-list">
            <li className="links-list__item">
              <Link to="/">Home</Link>
            </li>
            <li className="links-list__item">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="links-list__item">
              <Link to="/bookmarks">Bookmarks</Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  )
}

export default Sidebar
