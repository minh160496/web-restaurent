import React from "react";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import Img from "Component/Img";
import { Link } from "react-router-dom";

const cl = classNames.bind(styles);
export default function History({ data }) {
  return (
    <div className={cl("history")}>
      <h2 className={cl("history__title")}>Kết quả tìm kiếm:</h2>
      <div className={cl("history__body")}>
        {data.map((item) => (
          <Link to="/" key={item.id} className="block width-full">
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
        <span>Xem tất cả</span>
      </div>
    </div>
  );
}
