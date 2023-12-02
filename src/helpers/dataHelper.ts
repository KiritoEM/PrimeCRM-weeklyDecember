interface ImenuItem {
  label: string;
  url?: string;
  id?: string;
}

interface IcolorData {
  primary: Iprimary[];
  secondary: Isecondary[];
}

interface Iprimary {
  bg: string;
  label: string;
  palet: string;
}

interface Isecondary {
  bg: string;
  label: string;
  palet: string;
}

export default function dataHelper() {
  const menuItemData: ImenuItem[] = [
    { label: "Solution", url: "/" },
    { label: "Industries" },
    { label: "Products" },
    { label: "Ressources" },
    { label: "Pricing" },
    { label: "Login", id: "btn-login" },
  ];

  const colorData: IcolorData = {
    primary: [
      { bg: "#49DEFF", label: "Primary - 01", palet: "49DEFF" },
      { bg: "#4FFFDF", label: "Primary - 02", palet: "4FFFDF" },
      { bg: "#303030", label: "Primary - 02", palet: "303030" },
    ],
    secondary: [
      { bg: "#4E4E4E", label: "Secondary - 01", palet: "4E4E4E" },
      { bg: "#DEDEDE", label: "Secondary - 02", palet: "DEDEDE" },
      { bg: "#F4F4F4", label: "Secondary - 03", palet: "F4F4F4" },
      { bg: "#F9F9F9", label: "Secondary - 04", palet: "F9F9F9" },
    ],
  };

  return { menuItemData, colorData };
}
