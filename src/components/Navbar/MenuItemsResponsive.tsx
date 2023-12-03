import dataHelper from "../../helpers/dataHelper";
import { useNav } from "../../hooks/useNav";

const MenuItemsResponsive = (): JSX.Element => {
  const { openMenu } = useNav();
  const { menuItemData } = dataHelper();
  return (
    <div
      className={`menu-itemsResponsive d- d-lg-none ${
        openMenu ? "open-menu" : "close-menu"
      }`}
    >
      <div className="item-container">
        <ul>
          {menuItemData.map((item, index) => (
            <li key={index} id={item.id}>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuItemsResponsive;
