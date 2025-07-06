import { useEffect, useState } from "react";

function NavBar() {
  const [active, setActive] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sections = ["home", "projects", "about", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActive(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const handleLinkClick = (section: string) => {
    setIsMobileMenuOpen(false);
    setActive(section);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-pink-600 hover:text-pink-800 transition-colors duration-200"
        >
          Ogadimma Chibuike💕
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-gray-800 font-medium">
          {sections.map((s) => (
            <li key={s}>
              <a
                href={`#${s}`}
                className={`capitalize relative pb-1 transition-all duration-300 ${
                  active === s ? "text-pink-600" : "hover:text-pink-500"
                }`}
              >
                {s}
                <span
                  className={`absolute left-0 -bottom-0.5 h-[2px] w-full transition-all duration-300 ${
                    active === s ? "bg-pink-500" : "bg-transparent"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-800 text-2xl focus:outline-none cursor-pointer"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden mx-4 mt-2 p-6 bg-white shadow-lg rounded-xl space-y-4 animate-fade-in-up">
          {sections.map((s) => (
            <li key={s}>
              <a
                href={`#${s}`}
                onClick={() => handleLinkClick(s)}
                className={`block capitalize font-medium text-gray-800 transition-all duration-300 ${
                  active === s
                    ? "text-pink-600 underline underline-offset-4"
                    : "hover:text-pink-500"
                }`}
              >
                {s}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
