import React from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import { ReactComponent as IconArrowRight } from "@/assets/icon/arrowRight.svg";

import { pathObj } from "Routers";

import styles from "./SubHeader.module.scss";

const cl = classNames.bind(styles);
export default function SubHeader({ path }) {
  return (
    <nav className={cl("sub-header")}>
      {path !== "home" && (
        <Container>
          <div className={cl("sub-header-content") + " flex align-center"}>
            <ul className="flex align-center">
              <li>
                <Link to="/">
                  <span className={cl("content__item")}>Trang chủ</span>
                </Link>
              </li>
              {path
                .split("/")
                .filter((item) => item.length > 0)
                .map((item, index) => (
                  <React.Fragment key={index}>
                    <li>
                      <div className={cl("icon")}>
                        <IconArrowRight
                          fill="currentcolor"
                          width={10}
                          height={10}
                        />
                      </div>
                    </li>
                    <li>
                      <Link to={pathObj[item].path}>
                        <span className={cl("content__item")}>
                          {pathObj[item].title}
                        </span>
                      </Link>
                    </li>
                  </React.Fragment>
                ))}
            </ul>
          </div>
        </Container>
      )}
    </nav>
  );
}

SubHeader.propTypes = {
  path: PropTypes.string,
};
