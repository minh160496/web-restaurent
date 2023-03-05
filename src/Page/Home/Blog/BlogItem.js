import React from "react";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";

import Img from "Component/Img";
import LinkMore from "Component/LinkMore";

import styles from "./Blog.module.scss";

const cl = classnames.bind(styles);
export default function BlogItem() {
  return (
    <div className={cl("blog__item")}>
      <div className={cl("item__img")}>
        <Link to="/">
          <Img
            src="https://bizweb.dktcdn.net/100/469/097/articles/canh-ca-nau-me-2-7edb.jpg?v=1666608800047"
            width="100%"
            heigh="auto"
          />
          <div className={cl("item-absolute")}>
            <span>24/20/2022</span>
          </div>
        </Link>
      </div>
      <div className={cl("item__content")}>
        <div className={cl("author")}>
          <span>Đăng bởi: Admin Dola</span>
        </div>
        <div className={cl("title")}>
          <Link to="/">
            <h2>Mách công thức làm canh cá nấu mẻ thơm nhất Việt Nam</h2>
          </Link>
        </div>
        <div className={cl("desc")}>
          <p>
            Canh cá nấu mẻ là món ăn dân dã, quen thuộc trong mỗi mâm cơm gia
            đình Việt. Mùa hè nắng nóng như thế này nhỉ
          </p>
        </div>
      </div>
      <div className={cl("item__link")}>
        <LinkMore />
      </div>
    </div>
  );
}
