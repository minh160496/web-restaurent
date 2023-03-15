const pathObj = {
  about: {
    title: "Giới thiệu",
    path: "/about",
  },
  list: {
    title: "Menu",
    path: "/list",
  },
  outStanding: {
    title: "Món ăn nổi bật",
    path: "/outStanding",
  },
  every: {
    title: "Món ngon mỗi ngày",
    path: "/every",
  },
  blogs: {
    title: "Tin tức",
    path: "/blogs",
  },
  contact: {
    title: "Liên hệ",
    path: "/contact",
  },
  appetizers: {
    title: "Khai vị",
    path: "/list/appetizers",
  },
  mainDishes: {
    title: "Món chính",
    path: "/list/mainDishes",
  },
  soups: {
    title: "Canh - Tiềm - Súp",
    path: "/list/soups",
  },
  riceNoodles: {
    title: "Cơm - Mỳ - Cháo",
    path: "/list/riceNoodles",
  },
  cakeDesserts: {
    title: "Bánh và tráng miệng",
    path: "/list/cakeDesserts",
  },
  drinks: {
    title: "Đồ uống",
    path: "/list/drinks",
  },
  salads: {
    title: "Salad",
    path: "/list/appetizers/salads",
  },
  gois: {
    title: "Gỏi",
    path: "/list/appetizers/gois",
  },
  beefs: {
    title: "Món bò",
    path: "/list/mainDishes/beefs",
  },
  kitchens: {
    title: "Món gà",
    path: "/list/mainDishes/kitchens",
  },
  porks: {
    title: "Món heo",
    path: "/list/mainDishes/porks",
  },
  fishs: {
    title: "Món cá",
    path: "/list/mainDishes/fishs",
  },
  canhs: {
    title: "Canh",
    path: "/list/soups/canhs",
  },
  tiems: {
    title: "Tiềm",
    path: "/list/soups/tiems",
  },
  sups: {
    title: "Súp",
    path: "/list/soups/sups",
  },
  rices: {
    title: "Cơm",
    path: "/list/riceNoodles/rices",
  },
  noodles: {
    title: "Mỳ",
    path: "/list/riceNoodles/noodles",
  },
  porridges: {
    title: "Cháo",
    path: "/list/riceNoodles/porridges",
  },
  dessertds: {
    title: "Tráng miệng",
    path: "/list/cakeDesserts/dessertds",
  },
  cakes: {
    title: "Bánh",
    path: "/list/cakeDesserts/cakes",
  },
  coffees: {
    title: "Cà phê",
    path: "/list/drinks/coffees",
  },

  milkTeas: {
    title: "Trà sữa",
    path: "/list/drinks/milkTeas",
  },

  logIn: {
    title: "Đăng nhập",
    path: "/logIn",
  },

  signIn: {
    title: "Đăng nhập",
    path: "/signIn",
  },
};

export const listBodyItem = [
  { id: 1, fiel: "Trang chủ", path: "/" },
  { id: 2, fiel: "Giới thiệu", path: "/about" },
  {
    id: 3,
    fiel: pathObj.list.title,
    path: pathObj.list.path,
    child: [
      {
        id: 1,
        fiel: pathObj.appetizers.title,
        path: pathObj.appetizers.path,
        src: "https://bizweb.dktcdn.net/thumb/large/100/469/097/collections/untitled-1.png?v=1666620246267",
        child: [
          {
            id: 1,
            fiel: pathObj.salads.title,
            path: pathObj.salads.path,
          },
          {
            id: 2,
            fiel: pathObj.gois.title,
            path: pathObj.gois.path,
          },
        ],
      },
      {
        id: 2,
        fiel: pathObj.mainDishes.title,
        path: pathObj.mainDishes.path,
        src: "https://bizweb.dktcdn.net/thumb/large/100/469/097/collections/1.png?v=1666620272107",
        child: [
          {
            id: 1,
            fiel: pathObj.beefs.title,
            path: pathObj.beefs.path,
          },
          {
            id: 2,
            fiel: pathObj.kitchens.title,
            path: pathObj.kitchens.path,
          },
          {
            id: 3,
            fiel: pathObj.porks.title,
            path: pathObj.porks.path,
          },
          {
            id: 4,
            fiel: pathObj.fishs.title,
            path: pathObj.fishs.path,
          },
        ],
      },
      {
        id: 3,
        fiel: pathObj.soups.title,
        path: pathObj.soups.path,
        src: "https://bizweb.dktcdn.net/thumb/large/100/469/097/collections/untitled-1-68773ce4-f7bf-467f-a64d-dbff8c604ff6.png?v=1666620299497",
        child: [
          {
            id: 1,
            fiel: pathObj.canhs.title,
            path: pathObj.canhs.path,
          },
          {
            id: 2,
            fiel: pathObj.tiems.title,
            path: pathObj.tiems.path,
          },
          {
            id: 3,
            fiel: pathObj.sups.title,
            path: pathObj.sups.path,
          },
        ],
      },
      {
        id: 4,
        fiel: pathObj.riceNoodles.title,
        path: pathObj.riceNoodles.path,
        src: "https://bizweb.dktcdn.net/thumb/large/100/469/097/collections/untitled-1-68773ce4-f7bf-467f-a64d-dbff8c604ff6.png?v=1666620299497",
        child: [
          {
            id: 1,
            fiel: pathObj.rices.title,
            path: pathObj.rices.path,
          },
          {
            id: 2,
            fiel: pathObj.noodles.title,
            path: pathObj.noodles.path,
          },
          {
            id: 3,
            fiel: pathObj.porridges.title,
            path: pathObj.porridges.path,
          },
        ],
      },
      {
        id: 5,
        fiel: pathObj.cakeDesserts.title,
        path: pathObj.cakeDesserts.path,
        src: "https://bizweb.dktcdn.net/thumb/large/100/469/097/collections/1-7c22e7c5-38e6-4fda-a282-b3dc868fb522.png?v=1666620355433",
        child: [
          {
            id: 1,
            fiel: pathObj.cakes.title,
            path: pathObj.cakes.path,
          },
          {
            id: 2,
            fiel: pathObj.dessertds.title,
            path: pathObj.dessertds.path,
          },
        ],
      },
      {
        id: 6,
        fiel: pathObj.drinks.title,
        path: pathObj.drinks.path,
        src: "https://bizweb.dktcdn.net/thumb/large/100/469/097/collections/untitled-1-c6e94da2-4486-4107-a0b0-b63a126ef892.png?v=1666620374890",
        child: [
          {
            id: 1,
            fiel: pathObj.coffees.title,
            path: pathObj.coffees.path,
          },
          {
            id: 2,
            fiel: pathObj.milkTeas.title,
            path: pathObj.milkTeas.path,
          },
        ],
      },
    ],
  },
  { id: 4, fiel: pathObj.outStanding.title, path: pathObj.outStanding.path },
  { id: 5, fiel: pathObj.every.title, path: pathObj.every.path },
  { id: 6, fiel: pathObj.blogs.title, path: pathObj.blogs.path },
  { id: 7, fiel: pathObj.contact.title, path: pathObj.contact.path },
];

export const listFootItem = [
  { fiel: "Đăng Nhập", path: pathObj.logIn.title },
  { fiel: "Đăng Ký", path: pathObj.signIn.title },
  { fiel: "Món ăn yêu thích", path: "/favorite" },
];
