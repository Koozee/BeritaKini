import { Link, useLocation } from "react-router-dom";


const navItems = [
  { name: "Beranda", path: "/" },
  { name: "Terbaru", path: "/terbaru" },
  { name: "Hiburan", path: "/hiburan-categories" },
  { name: "Gaya Hidup", path: "/gayahidup-categories" },
  { name: "Olahraga", path: "/olahraga-categories" },
  { name: "Nasional", path: "/nasional-categories" },
  { name: "Internasional", path: "/internasional-categories" },
];
const Navbar = ({scrollUp}) => {
  const location = useLocation();

  return (
    <nav className="hidden lg:block">
      <ul className="flex flex-wrap gap-6">
        {navItems.map((item) => (
          <li
            key={item.path}
            className={`font-medium hover:underline hover:underline-offset-4 hover:text-blue-400 transition-all duration-300 ease-in-out ${scrollUp ? '' : 'text-white'} ${
              location.pathname === item.path
                ? "text-blue-600"
                : "text-slate-600"
            }`}
          >
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Navbar, navItems };
