export const listBodyItem = [
  {
    fiel: "Trang chủ",
    path: "/",
  },
  {
    fiel: "Giới thiệu",
    path: "/about",
  },
  {
    fiel: "Menu",
    path: "/menu",
    child: [
      {
        id: 1,
        fiel: "Khai vị",
        child: [
          {
            id: 1,
            fiel: "Salad",
          },
          {
            id: 2,
            fiel: "Gỏi",
          },
        ],
      },
      {
        id: 2,
        fiel: "Món chính",
        child: [
          {
            id: 1,
            fiel: "Món bò",
          },
          {
            id: 2,
            fiel: "Món gà",
          },
          {
            id: 3,
            fiel: "Món heo",
          },
          {
            id: 4,
            fiel: "Món cá",
          },
        ],
      },
      {
        id: 3,
        fiel: "Canh - Tiềm - Súp",
        child: [
          {
            id: 1,
            fiel: "Canh",
          },
          {
            id: 2,
            fiel: "Tiềm",
          },
          {
            id: 3,
            fiel: "Súp",
          },
        ],
      },
      {
        id: 4,
        fiel: "Cơm - Mỳ - Cháo",
        child: [
          {
            id: 1,
            fiel: "Cơm",
          },
          {
            id: 2,
            fiel: "Mỳ",
          },
          {
            id: 3,
            fiel: "Cháo",
          },
        ],
      },
      {
        id: 5,
        fiel: "Bánh và tráng miệng",
        child: [
          {
            id: 1,
            fiel: "Bánh",
          },
          {
            id: 2,
            fiel: "Tráng miệng",
          },
        ],
      },
      {
        id: 6,
        fiel: "Đồ uống",
        child: [
          {
            id: 1,
            fiel: "Cà phê",
          },
          {
            id: 2,
            fiel: "Trà sữa",
          },
        ],
      },
    ],
  },
  {
    fiel: "Món ăn nổi bật",
    path: "/hightlight",
  },
  {
    fiel: "Món ngon mỗi ngày",
    path: "/delicous",
  },
  {
    fiel: "Tin tức",
    path: "/news",
  },
  {
    fiel: "Liên hệ",
    path: "/contact",
  },
];

export const listFootItem = [
  { fiel: "Đăng Nhập", path: "/login" },
  { fiel: "Đăng Ký", path: "/signin" },
  { fiel: "Món ăn yêu thích", path: "/favorite" },
];
