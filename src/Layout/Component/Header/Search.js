import React, { useEffect, useState, useRef } from "react";
import classnames from "classnames/bind";
import Tippy from "@tippyjs/react";

import Toolip from "Component/Toolip";
import { useDebounce } from "hook";
import History from "./History";
import { ReactComponent as IconSearch } from "assets/icon/search.svg";
import styles from "./Header.module.scss";
import { getAPIHistory } from "apiServices/apiHistory";

const cl = classnames.bind(styles);
export default function Search({ headerWrapperElement }) {
  useEffect(() => {
    window.addEventListener("resize", handleSearhHistoryMobile);
  }, []);

  //getApi
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getAPIHistory();
      setData(data);
    }

    fetchData();
  }, []);

  //logic khi promptInput search
  const handlePromtInput = (e) => {
    handleSearch(e);
    setValuePrompInput(e.target.value);
    e.target.value === " " && setValuePrompInput("");
    headerWrapperElement.style.overflow = "visible";
  };

  //logic tim kiem
  const [result, setResult] = useState([]);

  const tippyHistoryRef = useRef();

  const handleSearhHistoryMobile = () => {
    if (window.innerWidth >= 992 && tippyHistoryRef.current) {
      tippyHistoryRef.current.style.display = "none";
    } else {
      tippyHistoryRef.current.style.display = "block";
    }
  };

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
    <div className="tippy-history pos-relative" ref={tippyHistoryRef}>
      <Tippy
        visible={result.length > 0}
        interactive //cho phép select nội dung bên trong
        placement="auto-start"
        content={<History data={result} />}
        arrow={false}
        theme="light"
        offset={[0, 10]}
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
            onChange={handlePromtInput}
          />
          <Toolip
            place="bottom-end"
            content="Tìm kiếm"
            className="tippy-search"
          >
            <div className={cl("icon") + " flex"} onClick={handleToResult}>
              <IconSearch fill="currentcolor" width={20} height={20} />
            </div>
          </Toolip>
        </div>
      </Tippy>
    </div>
  );
}
