import React from "react";
import classNames from "classnames/bind";
import { Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import NavigatorItemWrapper from "./NavigatorItemWrapper";
import Img from "Component/Img";

import { BLOGS, midPath } from "CONST";
import { pathObj } from "Routers";

import styles from "./Navigator.module.scss";
const cl = classNames.bind(styles);
export default function Blogs() {
  const getBlogsFromStorage = () => {
    if (localStorage.getItem(BLOGS)) {
      const blogs = JSON.parse(localStorage.getItem(BLOGS));
      return blogs;
    }
    return [];
  };
  const blogs = getBlogsFromStorage();
  const conectPath = (pathFrom, pathLast) => {
    return pathFrom + midPath + pathLast;
  };
  return (
    <>
      {blogs.length > 0 && (
        <NavigatorItemWrapper filterName="Bài viết liên quan">
          <div className={cl("blogs__content")}>
            <Container className="p-0">
              {blogs.map((blog) => (
                <NavLink
                  to={conectPath(pathObj.blogDetail.path, blog.id)}
                  key={blog.id}
                >
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
      )}
    </>
  );
}
