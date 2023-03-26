import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { Container } from "react-bootstrap";

import LayoutDefault from "Layout/LayoutDefault";
import Img from "Component/Img";
import Loading from "Component/Animation/Loading";

import getAPIBlogs from "apiServices/apiBlogs";
import { pathObj } from "Routers";

import styles from "./BlogDetail.module.scss";

const cl = classNames.bind(styles);
export default function BlogDetail() {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const id = new URLSearchParams(window.location.href).get("id");
    async function getBlogsFromApi() {
      const blogs = await getAPIBlogs();
      const blog = blogs ? blogs.find((blog) => blog.id === Number(id)) : null;
      if (blog) setBlog(blog);
    }
    getBlogsFromApi();
  }, []);

  useEffect(() => {
    if (blog) setLoading(false);
  }, [blog]);
  return (
    <div className={cl("blog-detail")}>
      <LayoutDefault path={pathObj.blogDetail.path}>
        <div className={cl("wrapper")}>
          <Container>
            <div className={cl("blog__main")}>
              {!loading && (
                <>
                  <div className={cl("head")}>
                    <div className={cl("title")}>
                      <h2>{blog && blog.title}</h2>
                    </div>
                    <div className={cl("author")}>
                      <span>{blog && "Tác giả: " + blog.author}</span>
                    </div>
                    <div className={cl("time")}>
                      <span>{blog && "Ngày đăng: " + blog.time}</span>
                    </div>
                  </div>
                  <div className={cl("main")}>
                    <div className={cl("desc")}>
                      <p>{blog && blog.content.desc}</p>
                    </div>
                    <div className="desc__image">
                      <div className={cl("image")}>
                        <Img
                          src={blog && blog.content.img_src[0].src}
                          width="100%"
                          heigh="auto"
                        />
                      </div>
                      <div className={cl("image__desc")}>
                        <h3>Dream Restaurant</h3>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </Container>
          {loading && (
            <div className={cl("loading")}>
              <Loading />
            </div>
          )}
        </div>
      </LayoutDefault>
    </div>
  );
}
