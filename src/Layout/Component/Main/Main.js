import React, { useContext, useState } from "react";
import classNames from "classnames/bind";
import { Container, Row } from "react-bootstrap";

import { LayoutContext } from "Layout/LayoutNavBar";
import Navigator from "@/Layout/Component/Navigator";
import { ReactComponent as IconFilter } from "@/assets/icon/filter.svg";

import styles from "./Main.module.scss";

const cl = classNames.bind(styles);
export default function Main({ children }) {
  const navBarRight = useContext(LayoutContext);
  const [hasNavBarFix, setHasNavBarFix] = useState(false);
  return (
    <main className={cl("main")}>
      <div className={cl("main-wrap")}>
        <Container>
          <Row>
            <div
              className={
                navBarRight
                  ? cl("navbar", "navbar-right") + " col-3"
                  : cl("navbar") + " col-3"
              }
            >
              <Navigator />
            </div>
            <div className={cl("content") + " col-9"}>{children}</div>
          </Row>
        </Container>
        <div
          className={cl("main-fixed", {
            show: hasNavBarFix,
          })}
        >
          <div
            className={cl("icon-filter-wrapper")}
            onClick={() => setHasNavBarFix(!hasNavBarFix)}
          >
            <IconFilter fill="currentcolor" />
          </div>
          <div className={cl("navbar-fixed")}>
            <Navigator />
          </div>
        </div>
      </div>
    </main>
  );
}
