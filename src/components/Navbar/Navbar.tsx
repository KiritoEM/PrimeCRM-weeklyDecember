import MenuItems from "./MenuItems";
import MenuItemsResponsive from "./MenuItemsResponsive";

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
      <MenuItemsResponsive />
    </nav>
  );
};

export default Navbar;
