import MenuItems from "./MenuItems";
import MenuItemsResponsive from "./MenuItemsResponsive";
import ButtonToogle from "./ButtonToogle";
import Overlay from "./Overlay";
import { useNav } from "../../hooks/useNav";

const Navbar = (): JSX.Element => {
  const { openOverlay, menuToogle } = useNav();
  return (
    <nav id="navbar">
      <div id="navbar__container">
        <div className="section-logo">
          <img src="/assets/Logo_with_text.png" alt="" />
        </div>
        {/* ==============menu items components================= */}
        <MenuItems />
        <ButtonToogle toogle={menuToogle} />
      </div>
      <MenuItemsResponsive />
      <Overlay overlay={openOverlay} />
    </nav>
  );
};

export default Navbar;
