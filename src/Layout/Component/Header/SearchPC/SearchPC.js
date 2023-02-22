import React, { useState } from "react";
import classnames from "classnames/bind";

import { ReactComponent as IconSearch } from "assets/icon/search.svg";
import PropperPC from "Component/PropperPC/PropperPC";
import FormSearchPC from "./FormSearchPC";

import styles from "@/Layout/Component/Header/SearchPC/SearchPC.module.scss";

const cl = classnames.bind(styles);
export default function SearchPC() {
  const [hasMouseOver, setHasMouseOver] = useState(false);
  return (
    <PropperPC
      mouseOver
      isMobileHidden
      content={<FormSearchPC hasMouseOver={hasMouseOver} />}
    >
      <div className={cl("icon", "icon-search")}>
        <IconSearch
          fill="currentcolor"
          width={20}
          height={20}
          onMouseMove={() => setHasMouseOver(true)}
          onMouseLeave={() => setHasMouseOver(false)}
        />
      </div>
    </PropperPC>
  );
}
