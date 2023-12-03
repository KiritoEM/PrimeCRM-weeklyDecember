import dataHelper from "../../helpers/dataHelper";

const MenuItemsResponsive = (): JSX.Element => {
  const { menuItemData } = dataHelper();
  return (
    <div className="menu-itemsResponsive d- d-lg-none">
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
