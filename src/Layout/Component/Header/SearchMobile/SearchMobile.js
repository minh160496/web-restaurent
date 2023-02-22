import React, { useEffect, useState, useRef } from "react";
import classnames from "classnames/bind";
import Tippy from "@tippyjs/react";
import PropTypes from "prop-types";

import History from "../History/History";
import InputSearch from "Component/Input/Input";

import { getAPIHistory } from "apiServices/apiHistory";
import { useDebounce } from "hook";

import styles from "@/Layout/Component/Header/Header.module.scss";

const cl = classnames.bind(styles);
export default function SearchMobile({ headerWrapperElement, isMobile }) {
  const [data, setData] = useState([]);
  const [isPromted, setIsPromted] = useState(false);

  //getApi
  useEffect(() => {
    async function fetchData() {
      const data = await getAPIHistory();
      setData(data);
    }

    fetchData();
  }, []);

  //logic khi promptInput search
  const handlePromtInput = (e) => {
    handleSearchMobile(e);
    const valueInput = e.target.value;
    setValuePrompInput(valueInput);
    valueInput === " " && setValuePrompInput("");
    headerWrapperElement.style.overflow = "visible";
    if (valueInput.trim()) {
      setIsPromted(true);
    } else {
      setIsPromted(false);
    }
  };

  //logic tim kiem
  const [result, setResult] = useState([]);

  const handleSearchMobile = useDebounce((e) => {
    //dùng kỹ thuật debounce
    const text = e.target.value.trim().toLowerCase();
    if (text) {
      const result = data.filter((item) =>
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
    setIsPromted(false);
    setValuePrompInput("");
  };

  //ham xu ly logic khi click vao o search di den trang chi tiet san pham tim kiem
  const handleToResult = () => {};
  return (
    <div className="tippy-history pos-relative">
      <Tippy
        visible={isPromted && isMobile}
        interactive //cho phép select nội dung bên trong
        placement="auto-start"
        content={<History data={result} />}
        arrow={false}
        theme="light"
        offset={[0, 10]}
        onClickOutside={handleHiddenPropper}
      >
        <InputSearch
          className={
            cl("header__input-search") + " width-full flex align-center"
          }
          value={valuePrompInput}
          placeholder="Nhập tên món ăn..."
          onChange={handlePromtInput}
          onClick={handleToResult}
        />
      </Tippy>
    </div>
  );
}

SearchMobile.propTypes = {
  headerWrapperElement: PropTypes.object,
};
