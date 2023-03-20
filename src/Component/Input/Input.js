import React, { forwardRef, useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import Toolip from "Component/Toolip";
import { ReactComponent as IconSearch } from "@/assets/icon/search.svg";

import { contextHasReRenderContent } from "Component/List/List";
import { contextProducts } from "App";
import { pathObj } from "Routers";
import { PRODUCT_ID_FAVORITES, PRODUCT_ID_SEARCHS } from "CONST";

import styles from "./Input.module.scss";

const cl = classNames.bind(styles);
const InputSearch = forwardRef(
  (
    {
      value = "",
      className = "",
      placeholder = "Nhập vào ô này...",
      onChange = () => {},
      onClick = () => {},
      onInput = () => {},
    },
    ref
  ) => {
    const products = useContext(contextProducts) || [];
    const handleRenderContent =
      useContext(contextHasReRenderContent) || (() => {});
    const handleClick = () => {
      onClick();
      const productSearchs =
        products &&
        products.filter(
          (product) =>
            product.name &&
            product.name.toUpperCase().includes(value.toUpperCase())
        );
      const productIdSearchs = productSearchs.map(
        (productSearch) => productSearch.id
      );
      localStorage.setItem(
        PRODUCT_ID_SEARCHS,
        JSON.stringify(productIdSearchs)
      );
      handleRenderContent();
    };
    return (
      <div
        className={className + " " + cl("input-search") + " flex align-center"}
        ref={ref}
      >
        <input
          value={value}
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          onInput={onInput}
        />
        <div className={cl("hidden-on-PC")}>
          <Toolip
            place="bottom-end"
            content="Tìm kiếm"
            className="tippy-search"
          >
            <div className={cl("icon") + " flex"} onClick={handleClick}>
              <Link to={pathObj.productSearchs.path}>
                <IconSearch fill="currentcolor" width={20} height={20} />
              </Link>
            </div>
          </Toolip>
        </div>
      </div>
    );
  }
);

export default InputSearch;

InputSearch.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onInput: PropTypes.func,
  ref: PropTypes.object,
};
