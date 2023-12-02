import MenuItems from "./MenuItems";

const Navbar = (): JSX.Element => {
  return (
    <nav id="navbar">
      <div id="navbar__container">
        <div className="section-logo">
          <img src="/assets/Logo_with_text.png" alt="" />
        </div>

        {/* ==============menu items components================= */}
        <MenuItems />
      </div>
    </nav>
  );
};

export default Navbar;
