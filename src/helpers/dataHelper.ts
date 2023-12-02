interface ImenuItem {
  label: string;
  url?: string;
  id?: string;
}

interface IfeatureData {
  bg: string;
  img: string;
  title: string;
  text: string;
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

  const featureData: IfeatureData[] = [
    {
      bg: "#F4F4F4",
      img: "/assets/feature1.png",
      title: "Powerful Settings",
      text: "Provide excellent customer service. Answer more tickets.",
    },
    {
      bg: "#FFFFFF",
      img: "/assets/feature2.png",
      title: "User Friendly",
      text: "Use Timeline to plan projects right how the pieces fit together.",
    },
    {
      bg: "#F4F4F4",
      img: "/assets/feature3.png",
      title: "Integrated platform",
      text: "Vivamus massa eleifend etiam nequeodio feugiat dolor est.",
    },
  ];

  return { menuItemData, featureData };
}
