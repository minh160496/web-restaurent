import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import { ReactComponent as IconSearch } from "@/assets/icon/search.svg";
import Toolip from "Component/Toolip";

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
            <div className={cl("icon") + " flex"} onClick={onClick}>
              <IconSearch fill="currentcolor" width={20} height={20} />
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
