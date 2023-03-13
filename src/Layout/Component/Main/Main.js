import React, { useContext, useState, createContext, useEffect } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { Container, Row } from "react-bootstrap";

import { LayoutContext } from "Layout/LayoutNavBar";
import Navigator from "@/Layout/Component/Navigator";
import { ReactComponent as IconClose } from "@/assets/icon/closeBold.svg";
import { ReactComponent as IconFilter } from "@/assets/icon/filter.svg";

import styles from "./Main.module.scss";

const cl = classNames.bind(styles);

export const contextIsReRenderMain = createContext(null);
export default function Main({
  children,
  isBlog = false,
  handleBlurContent = () => {},
}) {
  const navBarRight = useContext(LayoutContext);
  const [isReRenderMain, setIsReRenderMain] = useState(false);
  const [hasShowNavFixed, setHasShowNavFixed] = useState(false);
  const onChangeFilterInNav = () => {
    setIsReRenderMain((prev) => !prev);
  };

  const handleClickIcon = (e) => {
    e.stopPropagation();
    setHasShowNavFixed((prev) => !prev);
    handleBlurContent(!hasShowNavFixed);
  };

  const handleHiddenNavFixed = () => {
    setHasShowNavFixed(false);
    handleBlurContent(false);
  };

  const handleStopPropagation = (e) => e.stopPropagation();

  useEffect(() => {
    document.body.addEventListener("click", handleHiddenNavFixed);
    return () =>
      document.body.removeEventListener("click", handleHiddenNavFixed);
  }, [hasShowNavFixed]);

  return (
    <contextIsReRenderMain.Provider value={isReRenderMain}>
      <main className={cl("main")}>
        <div className={cl("main-wrap")}>
          <Container>
            <Row>
              <div
                className={
                  navBarRight
                    ? cl("navbar", "navbar-right") + " col-0 col-lg-3"
                    : cl("navbar", { translateX: hasShowNavFixed }) +
                      " col-0 col-lg-3"
                }
                onClick={handleStopPropagation}
              >
                <Navigator
                  isBlog={isBlog}
                  onChangeFilterInNav={onChangeFilterInNav}
                />
                <div className={cl("icon")} onClick={handleClickIcon}>
                  {!hasShowNavFixed && (
                    <IconFilter fill="currentcolor" width={20} height={20} />
                  )}
                  {hasShowNavFixed && (
                    <IconClose fill="currentcolor" width={25} height={25} />
                  )}
                </div>
              </div>
              <div className={cl("content") + " col-12 col-lg-9"}>
                {children}
              </div>
            </Row>
          </Container>
        </div>
      </main>
    </contextIsReRenderMain.Provider>
  );
}

Main.propTypes = {
  children: PropTypes.node,
  isBlog: PropTypes.bool,
  handleBlurContent: PropTypes.func,
};
