import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Container, Row } from "react-bootstrap";
import classnames from "classnames/bind";
import { motion } from "framer-motion";

import { listBodyItem } from "../OffCanvas";
import styles from "./DropDown.module.scss";
import Img from "Component/Img";

const cl = classnames.bind(styles);
export default function DropDown({ ID }) {
  const data = listBodyItem[ID - 1];
  const [child, setChild] = useState(1);
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, translateY: 100 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.1,
        ease: [0.5, 0.3, 0.2, 1],
      }}
    >
      <Container>
        <div className={cl("dropdown")}>
          <Row>
            <div className="col-9">
              <div className={cl("dropdown-text")}>
                <Container>
                  <Row>
                    {data.child.map((item, index) => (
                      <div
                        className="col-4 p-0"
                        key={index}
                        onMouseOver={() => setChild(item.id)}
                      >
                        <div className={cl("dropdown__item")}>
                          <div className={cl("item__title")}>
                            <Link to="/">
                              <h3>{item.fiel}</h3>
                            </Link>
                          </div>
                          <div className={cl("item__list")}>
                            <ul>
                              {item.child.map((item, index) => (
                                <li key={index}>
                                  <Link to="/">
                                    <div className={cl("list-link")}>
                                      <span>{item.fiel}</span>
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Row>
                </Container>
              </div>
            </div>

            <div className="col-3">
              <div className={cl("dropdown__img")}>
                <Img src={child.src} width="100%" heigh="auto" />
              </div>
            </div>
          </Row>
        </div>
      </Container>
    </motion.div>
  );
}

DropDown.propTypes = {
  childList: PropTypes.array,
};
