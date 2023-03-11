import React, { useState } from "react";
import classNames from "classnames/bind";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import NavigatorItemWrapper from "./NavigatorItemWrapper";
import Img from "Component/Img";

import { BLOGS } from "CONST";

import styles from "./Navigator.module.scss";
const cl = classNames.bind(styles);
export default function Blogs() {
  const [blogs, setBlogs] = useState(() => {
    const blogs = JSON.parse(localStorage.getItem(BLOGS));
    if (blogs) return blogs;
    return [];
  });
  return (
    <NavigatorItemWrapper filterName="Bài viết liên quan">
      <div className={cl("blogs__content")}>
        <Container className="p-0">
          {blogs.map((blog) => (
            <NavLink to={blog.path} key={blog.id}>
              <div className={cl("item") + " flex align-center"}>
                <Row>
                  <div className={cl("item__img") + " col-6"}>
                    <Img
                      className={cl("image")}
                      src={blog.content.img_src[1].src}
                      width="100%"
                      heigh="auto"
                    />
                  </div>
                  <div className={cl("item-text") + " col-6"}>
                    <span>{blog.title}</span>
                  </div>
                </Row>
              </div>
            </NavLink>
          ))}
        </Container>
      </div>
    </NavigatorItemWrapper>
  );
}
