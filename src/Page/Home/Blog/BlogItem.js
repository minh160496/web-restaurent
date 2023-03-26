import React from "react";
import classnames from "classnames/bind";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Img from "Component/Img";
import LinkMore from "Component/LinkMore";

import { pathObj } from "Routers";
import { midPath } from "CONST";

import styles from "./Blog.module.scss";

const cl = classnames.bind(styles);
export default function BlogItem({ blog }) {
  const conectPath = (pathFrom, pathLast) => {
    return pathFrom + midPath + pathLast;
  };
  const time = blog.time.split(",");
  const timeDay = time[1].trim();
  return (
    <div className={cl("blog__item")}>
      <div className={cl("item__img")}>
        <Link to={conectPath(pathObj.blogDetail.path, blog.id)}>
          <Img src={blog.content.img_src[1].src} width="100%" heigh="auto" />
          <div className={cl("item-absolute")}>
            <span>{timeDay}</span>
          </div>
        </Link>
      </div>
      <div className={cl("item__content")}>
        <div className={cl("author")}>
          <span>Đăng bởi: {blog.author}</span>
        </div>
        <div className={cl("title")}>
          <Link to={conectPath(pathObj.blogDetail.path, blog.id)}>
            <h2>{blog.title}</h2>
          </Link>
        </div>
        <div className={cl("desc")}>
          <p>{blog.content.desc}</p>
        </div>
      </div>
      <div className={cl("item__link")}>
        <LinkMore link={conectPath(pathObj.blogDetail.path, blog.id)} />
      </div>
    </div>
  );
}

BlogItem.propTypes = {
  blog: PropTypes.object,
};
