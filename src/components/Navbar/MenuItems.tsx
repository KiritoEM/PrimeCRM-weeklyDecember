import dataHelper from "../../helpers/dataHelper";

const MenuItems = (): JSX.Element => {
  const { menuItemData } = dataHelper();
  return (
    <div className="section-menuItems d-none d-lg-flex">
      <ul>
        {menuItemData.map((item, index) => (
          <li key={index} id={item.id}>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItems;
