import React, { useState, createContext, useEffect, useCallback } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { Container, Row } from "react-bootstrap";

import Navigator from "@/Layout/Component/Navigator";
import { ReactComponent as IconClose } from "@/assets/icon/closeBold.svg";
import { ReactComponent as IconFilter } from "@/assets/icon/filter.svg";

import styles from "./Main.module.scss";

export const contextIsReRenderMain = createContext(null);

const cl = classNames.bind(styles);
export default function Main({
  navBarRight,
  children,
  isBlog = false,
  handleBlurContent = () => {},
}) {
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

  const handleHiddenNavFixed = useCallback(() => {
    setHasShowNavFixed(false);
    handleBlurContent(false);
  }, [handleBlurContent]);

  const handleStopPropagation = (e) => e.stopPropagation();

  useEffect(() => {
    document.body.addEventListener("click", handleHiddenNavFixed);
    return () =>
      document.body.removeEventListener("click", handleHiddenNavFixed);
  }, [hasShowNavFixed, handleHiddenNavFixed]);

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
                {!isBlog && (
                  <div className={cl("icon")} onClick={handleClickIcon}>
                    {!hasShowNavFixed && (
                      <IconFilter fill="currentcolor" width={25} height={25} />
                    )}
                    {hasShowNavFixed && (
                      <IconClose fill="currentcolor" width={30} height={30} />
                    )}
                  </div>
                )}
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
  navBarRight: PropTypes.bool,
  handleBlurContent: PropTypes.func,
};
