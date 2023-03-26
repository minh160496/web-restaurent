import React, { useEffect, useState } from "react";
import classnames from "classnames/bind";
import { Container } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";

import Slide from "Component/Slide";
import BlogItem from "./BlogItem";
import Loading from "Component/Animation/Loading";

import getAPIBlogs from "apiServices/apiBlogs";
import { BLOGS } from "CONST";

import styles from "./Blog.module.scss";

const cl = classnames.bind(styles);
export default function Blog() {
  const [blogs, setBlogs] = useState(null);
  const [hasLoading, setHasLoading] = useState(true);

  useEffect(() => {
    async function getBlogsFromAPI() {
      const blogs = await getAPIBlogs();
      if (blogs) {
        const blogsJson = JSON.stringify(blogs);
        localStorage.setItem(BLOGS, blogsJson);
        setBlogs(blogs);
      }
    }
    getBlogsFromAPI();
  }, []);

  useEffect(() => {
    if (blogs) {
      setHasLoading(false);
    }
  }, [blogs]);
  return (
    <section className={cl("blog")}>
      <Container>
        <div className={cl("title")}>
          <h1 className="stylized title-big stylized-after">Tin tức</h1>
        </div>
        <div className={cl("blog__content")}>
          {!hasLoading && (
            <Slide
              sliPerViewSm={1.5}
              sliPerViewMd={1.5}
              sliPerViewLg={2.5}
              sliPerViewXl={4}
            >
              {blogs &&
                blogs.map((blog) => (
                  <SwiperSlide key={blog.id} className="style-bottom-distance">
                    <BlogItem blog={blog} />
                  </SwiperSlide>
                ))}
            </Slide>
          )}
          {hasLoading && (
            <div className={cl("loading")}>
              <Loading />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
