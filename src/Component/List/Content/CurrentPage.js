import React from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";

import Card from "Component/Card";
import BlogItem from "Page/Home/Blog/BlogItem";

import { useFilterFromIndex } from "hook";

import styles from "./Content.module.scss";

const cl = classNames.bind(styles);
export default function CurrentPage({
  productsAll,
  cardNum,
  fromIndex,
  blogs = [],
}) {
  const products = useFilterFromIndex(productsAll, fromIndex, cardNum) || [];
  const isBlog = blogs.length > 0;
  return (
    <>
      {!isBlog &&
        products.map((product) => (
          <Col className="col-6 col-md-4 col-xl-3" key={product.id}>
            <div className={cl("content__card")}>
              <Card product={product} />
            </div>
          </Col>
        ))}
      {isBlog &&
        blogs.map((blog) => (
          <Col className="col-6 col-md-4 col-xl-3" key={blog.id}>
            <div className={cl("content__card")}>
              <BlogItem blog={blog} />
            </div>
          </Col>
        ))}
      ;
    </>
  );
}

CurrentPage.propTypes = {
  productsAll: PropTypes.array,
  cardNum: PropTypes.number,
  fromIndex: PropTypes.number,
  blogs: PropTypes.array,
};
