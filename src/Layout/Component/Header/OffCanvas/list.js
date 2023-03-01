export const listBodyItem = [
  { id: 1, fiel: "Trang chủ", path: "/" },
  { id: 2, fiel: "Giới thiệu", path: "/about" },
  {
    id: 3,
    fiel: "Menu",
    path: "/menu",
    child: [
      {
        id: 1,
        fiel: "Khai vị",
        src: "https://bizweb.dktcdn.net/thumb/large/100/469/097/collections/1-78911269-4e8f-48de-82ff-8db32236d4c0.png?v=1666620332610",
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
        src: "https://bizweb.dktcdn.net/thumb/large/100/469/097/collections/1-78911269-4e8f-48de-82ff-8db32236d4c0.png?v=1666620332610",
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
        src: "https://bizweb.dktcdn.net/thumb/large/100/469/097/collections/1-78911269-4e8f-48de-82ff-8db32236d4c0.png?v=1666620332610",
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
        src: "https://bizweb.dktcdn.net/thumb/large/100/469/097/collections/1-78911269-4e8f-48de-82ff-8db32236d4c0.png?v=1666620332610",
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
        src: "https://bizweb.dktcdn.net/thumb/large/100/469/097/collections/1-78911269-4e8f-48de-82ff-8db32236d4c0.png?v=1666620332610",
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
        src: "https://bizweb.dktcdn.net/thumb/large/100/469/097/collections/1-78911269-4e8f-48de-82ff-8db32236d4c0.png?v=1666620332610",
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
  { id: 4, fiel: "Món ăn nổi bật", path: "/hightlight" },
  { id: 5, fiel: "Món ngon mỗi ngày", path: "/delicous" },
  { id: 6, fiel: "Tin tức", path: "/news" },
  { id: 7, fiel: "Liên hệ", path: "/contact" },
];

export const listFootItem = [
  { fiel: "Đăng Nhập", path: "/login" },
  { fiel: "Đăng Ký", path: "/signin" },
  { fiel: "Món ăn yêu thích", path: "/favorite" },
];
