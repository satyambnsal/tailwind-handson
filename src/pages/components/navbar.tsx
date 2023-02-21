export default function NavBar() {
  return (
    <nav className="bg-gray-900 h-16 flex justify-between px-6">
      <ul className="flex items-center">
        <li className="nav-item active">LOGO</li>
        <li className="nav-item">Dashboard</li>
        <li className="nav-item">Team</li>
        <li className="nav-item">Projects</li>
        <li className="nav-item">Calendar</li>
      </ul>
      <ul className="flex text-white items-center space-x-1">
        <li>Bell Icon</li>
        <li>Avatar Icon</li>
      </ul>
    </nav>
  )
}
