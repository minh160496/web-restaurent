const provins = [
  {
    id: 1,
    name: "Hà Nội",
    codeName: "THN",
    districts: [
      {
        id: 1,
        name: "Hoàng Mai",
        codeName: "QHM",
        towns: [
          { id: 1, name: "Hoàng Liệt", codeName: "PHL", shipExpense: 30 },
          { id: 2, name: "Giáp Bát", codeName: "PGB", shipExpense: 33 },
          { id: 3, name: "Đại Kim", codeName: "PĐK", shipExpense: 35 },
        ],
      },
      {
        id: 2,
        name: "Cầu Giấy",
        codeName: "QCG",
        towns: [
          { id: 1, name: "Dịch Vọng", codeName: "PDV", shipExpense: 45 },
          { id: 2, name: "Dịch Vọng Hậu", codeName: "PDVH", shipExpense: 40 },
          { id: 3, name: "Mai Dich", codeName: "PMG", shipExpense: 42 },
        ],
      },
      {
        id: 3,
        name: "Nam Từ Liêm",
        codeName: "QNTL",
        towns: [
          { id: 1, name: "Cầu Diễn", codeName: "PCD", shipExpense: 25 },
          { id: 2, name: "Mễ Trì", codeName: "PMT", shipExpense: 27 },
          { id: 3, name: "Đại Mỗ", codeName: "PDM", shipExpense: 29 },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Hồ Chí Minh",
    codeName: "THCM",
    districts: [
      {
        id: 1,
        name: "Bình Thạnh",
        codeName: "QBT",
        towns: [
          { id: 1, name: "Phường 1", codeName: "P1", shipExpense: 55 },
          { id: 2, name: "Phường 2", codeName: "P2", shipExpense: 48 },
          { id: 3, name: "Phường 3", codeName: "P3", shipExpense: 53 },
        ],
      },
      {
        id: 2,
        name: "Bình Tân",
        codeName: "QBT",
        towns: [
          { id: 1, name: "Bình Hưng Hòa", codeName: "PBHH", shipExpense: 48 },
          { id: 2, name: "Bình Trị Đông", codeName: "PBTD", shipExpense: 42 },
          { id: 3, name: "Tân Tạo", codeName: "PTT", shipExpense: 41 },
        ],
      },
      {
        id: 3,
        name: "Vò Gấp",
        codeName: "QGV",
        towns: [
          { id: 1, name: "Phường 1", codeName: "P1", shipExpense: 47 },
          { id: 2, name: "Phường 2", codeName: "P2", shipExpense: 43 },
          { id: 3, name: "Phường 3", codeName: "P3", shipExpense: 41 },
        ],
      },
    ],
  },
];

export const createOptionProvins = () => {
  const optionProvins = [];
  for (let i in provins) {
    const provin = {
      value: provins[i].codeName,
      label: provins[i].name,
      name: "provin",
    };
    if (provin) {
      optionProvins.push(provin);
    }
  }
  return optionProvins;
};
export const createOptionDistricts = (codeName) => {
  const provin = provins.find((provin) => provin.codeName === codeName);
  if (provin) {
    const optionDistricts = [];
    if (provin.districts) {
      const districts = provin.districts;
      for (let i in districts) {
        if (districts[i]) {
          const district = {
            value: districts[i].codeName,
            label: districts[i].name,
            name: "district",
          };
          if (district) {
            optionDistricts.push(district);
          }
        }
      }
    }
    return optionDistricts;
  }
};
export const createOptionTowns = (codeNameProvin, codeNameDistrict) => {
  if (codeNameProvin && codeNameDistrict) {
    const provinOption = provins.find(
      (provin) => provin.codeName === codeNameProvin
    );
    const districtOption = provinOption.districts.find(
      (district) => district.codeName === codeNameDistrict
    );
    const townList = districtOption.towns;
    const townOptions = [];
    for (let i in townList) {
      if (townList[i]) {
        const towns = {
          value: townList[i].codeName,
          label: townList[i].name,
          name: "town",
          shipExpense: townList[i].shipExpense,
        };
        townOptions.push(towns);
      }
    }
    return townOptions;
  }
};
