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
  id?: string;
}

interface Ifunctioning {
  headerPoints: IfunctioningPoints[];
  mobileIcons: IiconesMobile[];
}

interface IfunctioningPoints {
  img: string;
  title: string;
  text: string;
}

interface IiconesMobile {
  icons: string;
}

interface Istatistic {
  stat: string;
  label: string;
  id?: string;
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
        title: "Services",
        id: "last",
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
        id: "last",
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
        id: "last",
      },
    ],
  };

  const functioningData: Ifunctioning = {
    headerPoints: [
      {
        img: "/assets/01.png",
        text: "CentraHub CRM automatically logs in any reactions made by your leads, prospects",
        title: "Download Our App",
      },
      {
        img: "/assets/02.png",
        text: "Customers making it easier for your sales team members audience they make contact.",
        title: "List Your Company Detail",
      },
      {
        img: "/assets/03.png",
        text: "customers, making it easier for your sales team members audience before make contact.",
        title: "Enjoy Your Business",
      },
    ],
    mobileIcons: [
      { icons: "/assets/playstore.png" },
      { icons: "/assets/applestore.png" },
    ],
  };

  const statisticsData: Istatistic[] = [
    { label: "User Rating", stat: "4.9<span>/</span>5", id: "elt-1" },
    { label: "Customers", stat: "350<span>K</span>+", id: "elt-2" },
    { label: "Team Members  ", stat: "99<span>+</span>", id: "elt-3" },
    { label: "Current Users", stat: "41<span>M</span>", id: "elt-4" },
  ];

  const pricingData: any = {
    stater: [
      { text: "Outbound email and <b>in-product</b>" },
      { text: "messaging" },
      { text: "<b>Push messages</b> & notifications" },
      { text: "Custom bots" },
      { text: "Mobile Carousels" },
      { text: "<b>Multi-channel</b> campaigns" },
      { text: "A/B testing & control groups" },
    ],
    pro: [
      { text: "Outbound email and <b>in-product</b>" },
      { text: "messaging" },
      { text: "<b>Push messages</b> & notifications" },
      { text: "Custom bots" },
      { text: "Mobile Carousels" },
      { text: "<b>Multi-channel</b> campaigns" },
      { text: "A/B testing & control groups" },
      { text: "Website traffic analytics" },
      { text: "Campaign reporting" },
      { text: "<b>Custom reporting</b>" },
      { text: "Salesforce integration" },
    ],
  };

  return {
    menuItemData,
    featureData,
    choiceData,
    clienData,
    productsData,
    functioningData,
    statisticsData,
    pricingData,
  };
}
