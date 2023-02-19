import React, { useEffect, useState } from "react";
import classnames from "classnames/bind";
import { Container, Row } from "react-bootstrap";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "./Tippy.scss";
import { Offcanvas } from "react-bootstrap";

import MyButton from "Component/MyButton";
import BagNumber from "./BagNumber";
import styles from "./Header.module.scss";
import "./Tippy.scss";
import { useDebounce } from "hook";
import History from "./History";
import Toolip from "Component/Toolip";
import OfCanvas from "src/Layout/Component/OfCanvas";
import { ReactComponent as IconMenu } from "assets/icon/menu.svg";
import { ReactComponent as IconSearch } from "assets/icon/search.svg";
import { ReactComponent as IconBag } from "assets/icon/bag.svg";
import { ReactComponent as IconMap } from "assets/icon/map.svg";

const cl = classnames.bind(styles);
export default function Header() {
  //logic của offcanvas
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //logic ẩn hiện ô search
  const [fixHeight, setFixHeight] = useState(true);

  //getApi
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const api = "https://api-his.vercel.app/history";
      const data = await fetch(api).then((res) => res.json());
      setData(data);
    }

    fetchData();
  }, []);

  //logic tim kiem
  const [result, setResult] = useState([]);

  const handleSearch = useDebounce((e) => {
    //dùng kỹ thuật debounce
    const text = e.target.value.trim().toLowerCase();
    if (text) {
      const result = data.filter((item, index) =>
        item.name.toLowerCase().includes(text)
      );
      setResult(result);
    } else {
      setResult([]);
    }
  }, 500);

  //xu lý ẩn propper khi click ra ngoài và input về value rỗng
  const [valuePrompInput, setValuePrompInput] = useState("");
  const handleHiddenPropper = () => {
    setResult([]);
    setValuePrompInput("");
  };

  //ham xu ly logic khi click vao o search di den trang chi tiet san pham tim kiem
  const handleToResult = () => {};

  return (
    <header className={cl("header")}>
      <Container>
        <Row>
          <div
            className={cl("wrapper", {
              fixHeight: fixHeight ? true : false,
            })}
          >
            <div className={cl("header__navbar") + " flex justify-between"}>
              <div className={cl("header__navbar-text")}>
                <MyButton
                  transparent
                  onClick={handleShow}
                  floatLeft
                  className={cl("menu")}
                >
                  <IconMenu fill="currentcolor" width={20} height={20} />
                </MyButton>

                <Offcanvas show={show} onHide={handleClose}>
                  <OfCanvas />
                </Offcanvas>
              </div>
              <div className={cl("header__navbar-icon") + " flex align-center"}>
                <div
                  className={cl("search", "header__navbar__item")}
                  onClick={() => setFixHeight(!fixHeight)}
                >
                  <div className={cl("icon")}>
                    <IconSearch fill="currentcolor" width={20} height={20} />
                  </div>
                </div>

                <Toolip content="Giỏ hàng">
                  <div
                    className={
                      cl("bag", "header__navbar__item") + " pos-relative"
                    }
                  >
                    <div className={cl("icon")}>
                      <IconBag fill="currentcolor" width={20} height={20} />
                    </div>
                    <BagNumber number={2} />
                  </div>
                </Toolip>

                <Toolip content="Hệ thống cửa hàng">
                  <div className={cl("map", "header__navbar__item")}>
                    <div className={cl("icon")}>
                      <IconMap fill="currentcolor" width={20} height={20} />
                    </div>
                  </div>
                </Toolip>
                <Toolip
                  content="Đặt bàn"
                  place="bottom-end"
                  className="toolip-order"
                >
                  <div className={cl("header__button", "header__navbar__item")}>
                    <MyButton sizeXL>Đặt bàn</MyButton>
                  </div>
                </Toolip>
              </div>
            </div>

            <div className="tippy-history">
              <Tippy
                visible={result.length > 0}
                interactive //cho phép select nội dung bên trong
                placement="auto-start"
                content={<History data={result} />}
                arrow={false}
                theme="light"
                onClickOutside={handleHiddenPropper}
              >
                <div
                  className={
                    cl("header__input-search") + " width-full flex align-center"
                  }
                >
                  <input
                    value={valuePrompInput}
                    type="text"
                    className={cl("input")}
                    placeholder="Nhập tên món ăn..."
                    onChange={(e) => {
                      handleSearch(e);
                      setValuePrompInput(e.target.value);
                    }}
                  />
                  <Toolip
                    place="bottom-end"
                    content="Tìm kiếm"
                    className="tippy-search"
                  >
                    <div
                      className={cl("icon") + " flex"}
                      onClick={handleToResult}
                    >
                      <IconSearch fill="currentcolor" width={20} height={20} />
                    </div>
                  </Toolip>
                </div>
              </Tippy>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}
