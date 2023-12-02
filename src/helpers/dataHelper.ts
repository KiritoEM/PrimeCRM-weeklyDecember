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

  const colorData : IcolorData = {
     primary:[
        {bg :"#49DEFF", label:"Primary - 01", palet:"49DEFF"},
        {bg :"#4FFFDF", label:"Primary - 01", palet:"4FFFDF"},
        {bg :"#303030", label:"Primary - 01", palet:"303030"},
     ],
     secondary:[
        {bg :"", label:"", palet:""}
     ]
  }

  return { menuItemData };
}
