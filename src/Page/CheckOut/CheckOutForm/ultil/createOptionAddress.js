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
          { id: 1, name: "Hoàng Liệt", codeName: "PHL" },
          { id: 2, name: "Giáp Bát", codeName: "PGB" },
          { id: 3, name: "Đại Kim", codeName: "PĐK" },
        ],
      },
      {
        id: 2,
        name: "Cầu Giấy",
        codeName: "QCG",
        towns: [
          { id: 1, name: "Dịch Vọng", codeName: "PDV" },
          { id: 2, name: "Dịch Vọng Hậu", codeName: "PDVH" },
          { id: 3, name: "Mai Dich", codeName: "PMG" },
        ],
      },
      {
        id: 3,
        name: "Nam Từ Liêm",
        codeName: "QNTL",
        towns: [
          { id: 1, name: "Cầu Diễn", codeName: "PCD" },
          { id: 2, name: "Mễ Trì", codeName: "PMT" },
          { id: 3, name: "Đại Mỗ", codeName: "PDM" },
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
          { id: 1, name: "Phường 1", codeName: "P1" },
          { id: 2, name: "Phường 2", codeName: "P2" },
          { id: 3, name: "Phường 3", codeName: "P3" },
        ],
      },
      {
        id: 2,
        name: "Bình Tân",
        codeName: "QBT",
        towns: [
          { id: 1, name: "Bình Hưng Hòa", codeName: "PBHH" },
          { id: 2, name: "Bình Trị Đông", codeName: "PBTD" },
          { id: 3, name: "Tân Tạo", codeName: "PTT" },
        ],
      },
      {
        id: 3,
        name: "Vò Gấp",
        codeName: "QGV",
        towns: [
          { id: 1, name: "Phường 1", codeName: "P1" },
          { id: 2, name: "Phường 2", codeName: "P2" },
          { id: 3, name: "Phường 3", codeName: "P3" },
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
        const districtOption = {
          value: townList[i].codeName,
          label: townList[i].name,
          name: "town",
        };
        townOptions.push(districtOption);
      }
    }
    return townOptions;
  }
};
