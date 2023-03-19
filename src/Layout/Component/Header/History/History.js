import React from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Img from "Component/Img";

import { pathObj } from "Routers";

import styles from "@/Layout/Component/Header/History/History.module.scss";

const cl = classNames.bind(styles);
export default function History({ data }) {
  return (
    <div className={cl("history")}>
      <h2 className={cl("history__title")}>Kết quả tìm kiếm:</h2>
      <div className={cl("history__body")}>
        {data.map((item) => (
          <Link
            to={pathObj.productDetails.path + `?&id=${item.id}`}
            key={item.id}
            className="block width-full"
          >
            <div className={cl("history__body__item") + " flex align-center"}>
              <div className={cl("item__img")}>
                <Img
                  className="width-full"
                  width={60}
                  heigh={60}
                  src={item.src}
                />
              </div>
              <div className={cl("item__inf")}>
                <div className={cl("inf__name")}>
                  <h3>{item.name}</h3>
                </div>
                <div className={cl("inf__price") + " flex align-center"}>
                  <span className={cl("price") + " inline-block"}>
                    {(item.price && item.price + ".000₫") || "Liên hệ"}
                  </span>
                  {item.oldPrice && (
                    <span className={cl("old-price") + " inline-block"}>
                      {(item.price && item.oldPrice + ".000₫") || "Liên hệ"}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className={cl("history__foot")}>
        {data.length > 0 && (
          <Link to={pathObj.list.path}>
            <span>Xem tất cả</span>
          </Link>
        )}
        {data.length === 0 && <span>Không có kết quả nào</span>}
      </div>
    </div>
  );
}

History.propTypes = {
  data: PropTypes.array,
};
