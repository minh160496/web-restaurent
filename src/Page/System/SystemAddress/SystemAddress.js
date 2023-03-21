import React, { useState } from "react";
import classNames from "classnames/bind";
import { Col, Container, Row } from "react-bootstrap";
import HN from "./Maps/HN";
import DN from "./Maps/DN";
import CT from "./Maps/CT";
import BD from "./Maps/BD";
import HCM from "./Maps/HCM";

import styles from "./SystemAddress.module.scss";

const cl = classNames.bind(styles);
export default function SystemAddress() {
  const data = [
    {
      id: 1,
      name: "Dream Restaurant Sài Gòn",
      address: "Tầng 3, 70 Lữ Gia, Phường 15, Quận 11, Thành phố Hồ Chí Minh",
      hotLine: "1900 6750",
      MapComponent: HCM,
    },
    {
      id: 2,
      name: "Dream Restaurant Bình Dương",
      address:
        "169 / 34 Nguyễn Hữu Cảnh, Phường Phú Thọ, TP.Thủ Dầu Một, Tỉnh Bình Dương",
      hotLine: "1900 6750",
      MapComponent: BD,
    },
    {
      id: 3,
      name: "Dream Restaurant Cần Thơ",
      address:
        "81 đường Phan Huy Chú, KDC Thới Nhựt I, Phường An Khánh, Quận Ninh Kiều, Tp Cần Thơ",
      hotLine: "1900 6750",
      MapComponent: CT,
    },
    {
      id: 4,
      name: "Dream Restaurant Hà Nội",
      address: "Tầng 6 - 266 Đội Cấn, Phường Liễu Giai, Quận Ba Đình, Hà Nội",
      hotLine: "1900 6750",
      MapComponent: HN,
    },
    {
      id: 5,
      name: "Dream Restaurant Đà Nẵng",
      address:
        "181 đường Huỳnh Tấn Phát, Phường Hoà Cường Nam, Quận Hải Châu, TP Đà Nẵng",
      hotLine: " 1900 6750",
      MapComponent: DN,
    },
  ];

  const [MapId, setMapId] = useState(1);
  const handleSetMap = (id) => {
    setMapId(id);
  };
  const Map = data[MapId - 1].MapComponent;
  return (
    <div className={cl("address")}>
      <Container className="p-0">
        <Row>
          <Col className="col-12 col-md-4">
            <div className={cl("list")}>
              <div className={cl("title")}>
                <h2>Hệ thống cửa hàng</h2>
              </div>
              <div className={cl("content")}>
                <ul>
                  {data.map((system) => (
                    <li
                      className={cl("item")}
                      key={system.id}
                      onClick={() => handleSetMap(system.id)}
                    >
                      <div className={cl("name")}>
                        <h3>{system.name}</h3>
                      </div>
                      <div className={cl("location") + " flex align-center"}>
                        <span>Địa chỉ: {system.address}</span>
                      </div>
                      <div className={cl("hotLine")}>
                        <span>Hotline: {system.hotLine}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
          <Col className="col-12 col-md-8">
            <div className={cl("map") + " h-100"}>
              <Map />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
