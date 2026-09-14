import { NavLink } from "react-router-dom";

const Header = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Jobs", path: "/jobs" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="relative z-50 flex h-[58px] items-center justify-between bg-[#243945] px-6 md:px-10 lg:px-[108px]">
      {/* Logo */}
      <NavLink
        to="/"
        className="flex items-center gap-2 text-[15px] font-semibold tracking-wide text-white"
      >
        <div className="relative h-7 w-7">
          <span className="absolute left-0 top-[5px] h-[19px] w-[12px] border-2 border-white" />
          <span className="absolute left-[7px] top-0 h-[19px] w-[12px] border-2 border-white" />
        </div>

        <span>ISTAIX</span>
      </NavLink>

      {/* Desktop Navigation */}
      <nav className="hidden items-center gap-8 md:flex">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `text-[14px] transition ${
                isActive
                  ? "font-medium text-white"
                  : "text-white/90 hover:text-white"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* CTA */}
      <NavLink
        to="/contact"
        className="rounded-[4px] bg-[#8da8b8] px-6 py-2.5 text-[13px] font-medium text-white transition hover:bg-[#a1b8c6]"
      >
        Get started
      </NavLink>
    </header>
  );
};

export default Header;