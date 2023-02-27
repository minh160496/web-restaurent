import React, { useState } from "react";
import PropTypes, { node } from "prop-types";
import classnames from "classnames/bind";

import PropperPC from "Component/PropperPC/PropperPC";
import { ReactComponent as IconDown } from "@/assets/icon/downFill.svg";
import { ReactComponent as IconUp } from "@/assets/icon/upFill.svg";

import DropDownChild from "./DropDownChild";

import styles from "./DropDown.module.scss";

const cl = classnames.bind(styles);
export default function DropDown({ name, childList }) {
  const [hasMouseOver, setMouseOver] = useState(false);
  return (
    <div
      className={cl("dropdown")}
      onMouseOver={() => setMouseOver(true)}
      onMouseOut={() => setMouseOver(false)}
    >
      <PropperPC
        visible={true}
        dropDown
        content={<DropDownChild childList={childList} />}
      >
        <div className={cl("dropdown-1") + " flex align-center"}>
          <h3>{name}</h3>
          {!hasMouseOver && (
            <div className={cl("icon")}>
              <IconDown fill="currentcolor" width={15} height={15} />
            </div>
          )}
          {hasMouseOver && (
            <div className={cl("icon")}>
              <IconUp fill="currentcolor" width={15} height={15} />
            </div>
          )}
        </div>
      </PropperPC>
    </div>
  );
}

DropDown.propTypes = {
  name: PropTypes.string,
  childList: PropTypes.array,
};
