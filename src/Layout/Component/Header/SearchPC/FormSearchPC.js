import React, { useContext, useState } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import InputSearch from "Component/Input/Input";
import PropperPC from "Component/PropperPC/PropperPC";
import History from "../History";

import { useDebounce } from "hook";
import { contextProducts } from "App";

import styles from "./SearchPC.module.scss";

const cl = classNames.bind(styles);
export default function FormSearchPC({ hasMouseOver }) {
  const products = useContext(contextProducts);
  const [result, setResult] = useState([]);
  const [valuePromtInput, setValuePromtInput] = useState("");
  const [isPromted, setIsPromted] = useState(false);

  const handlePromtInput = (e) => {
    const valueInput = e.target.value;
    setValuePromtInput(valueInput);
    if (!valueInput.trim()) {
      setValuePromtInput("");
      setIsPromted(false);
    }
    if (valueInput.trim()) {
      setIsPromted(true);
    }
  };

  const handleGetHistory = useDebounce((e) => {
    const valueInput = e.target.value.trim().toLowerCase();
    if (valueInput) {
      const result = products.filter((item) =>
        item.name.toLowerCase().includes(valueInput)
      );
      setResult(result);
    } else {
      setResult([]);
    }
  }, 500);

  return (
    <div className={cl("form-search-pc")}>
      <div className={cl("form-search__title")}>
        <h2>TÌM KIẾM MÓN ĂN CỦA BẠN</h2>
      </div>
      <PropperPC visible={isPromted} content={<History data={result} />}>
        <div className={cl("form-search__body")}>
          <InputSearch
            value={valuePromtInput}
            placeholder="Nhập món ăn yêu thích của bạn..."
            onChange={(e) => {
              handlePromtInput(e);
              handleGetHistory(e);
            }}
          />
        </div>
      </PropperPC>
    </div>
  );
}

FormSearchPC.propTypes = {
  hasMouseOver: PropTypes.bool,
};
