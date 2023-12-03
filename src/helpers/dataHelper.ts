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

interface IchoiceData {
  img: string;
  title: string;
  text: string;
  id?: string;
}

interface IclientData {
  line1: Iline[];
  line2: Iline[];
  line3: Iline[];
}

interface Iline {
  img_src: string;
  class?: string;
}

interface Iproducts {
  need: IproductItem[];
  industry: IproductItem[];
  solution: IproductItem[];
}

interface IproductItem {
  img: string;
  title: string;
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

  const choiceData: IchoiceData[] = [
    {
      img: "/assets/choiceicon-1.png",
      id: "col-1",
      text: "cards and make more sales while chatting",
      title: "CRM Security",
    },
    {
      img: "/assets/choiceicon-2.png",
      text: "Show off your goods in elegant product cards and mak.",
      title: "Marketing Hub",
    },
  ];

  const clienData: IclientData = {
    line1: [
      { img_src: "/assets/client1.png", class: "img-first" },
      { img_src: "/assets/client2.png" },
      { img_src: "/assets/client3.png" },
      { img_src: "/assets/client4.png", class: "img-last" },
    ],
    line2: [
      { img_src: "/assets/client5.svg", class: "img-first" },
      { img_src: "/assets/client6.png" },
      { img_src: "/assets/client7.png" },
      { img_src: "/assets/client8.png" },
      { img_src: "/assets/client9.png", class: "img-last" },
    ],
    line3: [
      { img_src: "/assets/client10.png", class: "img-first" },
      { img_src: "/assets/client11.png" },
      { img_src: "/assets/client12.png" },
      { img_src: "/assets/client13.png", class: "img-last" },
    ],
  };

  const productsData: Iproducts = {
    need: [
      {
        img: "/assets/products-icon1.png",
        title: "Sales",
      },
      {
        img: "/assets/products-icon2.png",
        title: "Marketing",
      },
      {
        img: "/assets/products-icon3.png",
        title: "Sales",
      },
    ],

    industry: [
      {
        img: "/assets/products-icon4.png",
        title: "Automotive",
      },
      {
        img: "/assets/products-icon5.png",
        title: "Real estate",
      },
      {
        img: "/assets/products-icon6.png",
        title: "Education",
      },
    ],
    solution: [
      {
        img: "/assets/products-icon7.png",
        title: "Project Management",
      },
      {
        img: "/assets/products-icon8.png",
        title: "Delivery Management",
      },
      {
        img: "/assets/products-icon9.png",
        title: "Loyalty Management",
      },
      {
        img: "/assets/products-icon10.png",
        title: "Professional Management",
      },
    ],
  };

  return { menuItemData, featureData, choiceData, clienData, productsData };
}
