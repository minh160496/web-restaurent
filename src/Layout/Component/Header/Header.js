import React, { useEffect, useState } from "react";
import classnames from "classnames/bind";
import { Container, Row } from "react-bootstrap";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "./Tippy.scss";
import { Offcanvas, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import MyButton from "Component/MyButton";
import styles from "./Header.module.scss";
import { useDebounce } from "hook";
import History from "./History";
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
                <MyButton transparent onClick={handleShow}>
                  <IconMenu fill="currentcolor" width={20} height={20} />
                </MyButton>

                <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                  </Offcanvas.Body>
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

                <div className={cl("bag", "header__navbar__item")}>
                  <div className={cl("icon")}>
                    <IconBag fill="currentcolor" width={20} height={20} />
                  </div>
                </div>

                <div className={cl("map", "header__navbar__item")}>
                  <div className={cl("icon")}>
                    <IconMap fill="currentcolor" width={20} height={20} />
                  </div>
                </div>

                <div className={cl("header__button", "header__navbar__item")}>
                  <MyButton sizeXL>Đặt bàn</MyButton>
                </div>
              </div>
            </div>

            <Tippy
              visible={result.length > 0}
              interactive //cho phép select nội dung bên trong
              placement="bottom-start"
              content={<History data={result} />}
            >
              <div
                className={
                  cl("header__input-search") + " width-full flex align-center"
                }
              >
                <input
                  type="text"
                  className={cl("input")}
                  placeholder="Nhập tên món ăn"
                  onChange={handleSearch}
                />
                <div className={cl("icon") + " flex"}>
                  <IconSearch fill="currentcolor" width={20} height={20} />
                </div>
              </div>
            </Tippy>
          </div>
        </Row>
      </Container>
    </header>
  );
}
