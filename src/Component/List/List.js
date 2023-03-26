import React, { useContext, useEffect, useState, createContext } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import LayoutNavBar from "Layout/LayoutNavBar";
import Head from "./Head";
import Content from "./Content";
import Loading from "Component/Animation/Loading";

import { contextProducts } from "App";
import { BLOGS, PRODUCT_ID_FAVORITES, PRODUCT_ID_SEARCHS } from "CONST";
import { pathObj } from "Routers";

import styles from "./List.module.scss";

const cl = classNames.bind(styles);
export const contextHasReRenderContent = createContext(null);
export default function List({ path = pathObj.list.path, isBlog = false }) {
  const products = useContext(contextProducts);
  const [productsCurrent, setProductsCurrent] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState(null);
  const [hasReRenderContent, setHasReRenderContent] = useState(false);
  const [hasLoading, setHasLoading] = useState(true);

  const handleReRenderContent = () => {
    setHasReRenderContent((prev) => !prev);
  };

  useEffect(() => {
    if (!isBlog) {
      if (path === pathObj.outStanding.path) {
        const productsCurrent = products
          ? products.filter((product) => product.isOutStanding)
          : [];
        setProductsCurrent(productsCurrent);
        const newTitle = pathObj.outStanding.title;
        setTitle(newTitle);
      }

      if (path === pathObj.list.path) {
        setProductsCurrent(products);
        setTitle("Tất cả món ăn");
      }

      if (path === pathObj.every.path) {
        const productsCurrent = products
          ? products.filter((product) => product.every)
          : [];
        setProductsCurrent(productsCurrent);
        const newTitle = pathObj.every.title;
        setTitle(newTitle);
      }

      if (path === pathObj.appetizers.path) {
        const productsCurrent = products
          ? products.filter((product) => product.category.includes("Khai vị"))
          : [];
        setProductsCurrent(productsCurrent);
        const newTitle = pathObj.appetizers.title;
        setTitle(newTitle);
      }

      if (path === pathObj.mainDishes.path) {
        const productsCurrent = products
          ? products.filter((product) => product.category.includes("Món chính"))
          : [];
        setProductsCurrent(productsCurrent);
        const newTitle = pathObj.mainDishes.title;
        setTitle(newTitle);
      }

      if (path === pathObj.soups.path) {
        const productsCurrent = products
          ? products.filter((product) =>
              product.category.includes(pathObj.soups.title)
            )
          : [];
        setProductsCurrent(productsCurrent);
        const newTitle = pathObj.soups.title;
        setTitle(newTitle);
      }

      if (path === pathObj.riceNoodles.path) {
        const productsCurrent = products
          ? products.filter((product) =>
              product.category.includes(pathObj.riceNoodles.title)
            )
          : [];
        setProductsCurrent(productsCurrent);
        const newTitle = pathObj.riceNoodles.title;
        setTitle(newTitle);
      }

      if (path === pathObj.cakeDesserts.path) {
        const productsCurrent = products
          ? products.filter((product) =>
              product.category.includes(pathObj.cakeDesserts.title)
            )
          : [];
        setProductsCurrent(productsCurrent);
        const newTitle = pathObj.cakeDesserts.title;
        setTitle(newTitle);
      }

      if (path === pathObj.drinks.path) {
        const productsCurrent = products
          ? products.filter((product) =>
              product.category.includes(pathObj.drinks.title)
            )
          : [];
        setProductsCurrent(productsCurrent);
        const newTitle = pathObj.drinks.title;
        setTitle(newTitle);
      }

      if (path === pathObj.salads.path) {
        const productsCurrent = products
          ? products.filter((product) =>
              product.category.includes(pathObj.salads.title)
            )
          : [];
        setProductsCurrent(productsCurrent);
        const newTitle = pathObj.salads.title;
        setTitle(newTitle);
      }

      if (path === pathObj.gois.path) {
        const productsCurrent = products
          ? products.filter((product) =>
              product.category.includes(pathObj.gois.title)
            )
          : [];
        setProductsCurrent(productsCurrent);
        const newTitle = pathObj.gois.title;
        setTitle(newTitle);
      }

      if (path === pathObj.beefs.path) {
        const productsCurrent = products
          ? products.filter((product) =>
              product.category.includes(pathObj.beefs.title)
            )
          : [];
        setProductsCurrent(productsCurrent);
        const newTitle = pathObj.beefs.title;
        setTitle(newTitle);
      }

      if (path === pathObj.kitchens.path) {
        const productsCurrent = products
          ? products.filter((product) =>
              product.category.includes(pathObj.kitchens.title)
            )
          : [];
        setProductsCurrent(productsCurrent);
        const newTitle = pathObj.kitchens.title;
        setTitle(newTitle);
      }

      if (path === pathObj.porks.path) {
        const productsCurrent = products
          ? products.filter((product) =>
              product.category.includes(pathObj.porks.title)
            )
          : [];
        setProductsCurrent(productsCurrent);
        const newTitle = pathObj.porks.title;
        setTitle(newTitle);
      }

      if (path === pathObj.fishs.path) {
        const productsCurrent = products
          ? products.filter((product) =>
              product.category.includes(pathObj.fishs.title)
            )
          : [];
        setProductsCurrent(productsCurrent);
        const newTitle = pathObj.fishs.title;
        setTitle(newTitle);
      }

      if (path === pathObj.canhs.path) {
        const productsCurrent = products
          ? products.filter((product) =>
              product.category.includes(pathObj.canhs.title)
            )
          : [];
        setProductsCurrent(productsCurrent);
        const newTitle = pathObj.canhs.title;
        setTitle(newTitle);
      }

      if (path === pathObj.tiems.path) {
        const productsCurrent = products
          ? products.filter((product) =>
              product.category.includes(pathObj.tiems.title)
            )
          : [];
        setProductsCurrent(productsCurrent);
        const newTitle = pathObj.tiems.title;
        setTitle(newTitle);
      }

      if (path === pathObj.sups.path) {
        const productsCurrent = products
          ? products.filter((product) =>
              product.category.includes(pathObj.sups.title)
            )
          : [];
        setProductsCurrent(productsCurrent);
        const newTitle = pathObj.sups.title;
        setTitle(newTitle);
      }

      if (path === pathObj.rices.path) {
        const productsCurrent = products
          ? products.filter((product) =>
              product.category.includes(pathObj.rices.title)
            )
          : [];
        setProductsCurrent(productsCurrent);
        const newTitle = pathObj.rices.title;
        setTitle(newTitle);
      }

      if (path === pathObj.noodles.path) {
        const productsCurrent = products
          ? products.filter((product) =>
              product.category.includes(pathObj.noodles.title)
            )
          : [];
        setProductsCurrent(productsCurrent);
        const newTitle = pathObj.noodles.title;
        setTitle(newTitle);
      }

      if (path === pathObj.porridges.path) {
        const productsCurrent = products
          ? products.filter((product) =>
              product.category.includes(pathObj.porridges.title)
            )
          : [];
        setProductsCurrent(productsCurrent);
        const newTitle = pathObj.porridges.title;
        setTitle(newTitle);
      }

      if (path === pathObj.dessertds.path) {
        const productsCurrent = products
          ? products.filter((product) =>
              product.category.includes(pathObj.dessertds.title)
            )
          : [];
        setProductsCurrent(productsCurrent);
        const newTitle = pathObj.dessertds.title;
        setTitle(newTitle);
      }

      if (path === pathObj.cakes.path) {
        const productsCurrent = products
          ? products.filter((product) =>
              product.category.includes(pathObj.cakes.title)
            )
          : [];
        setProductsCurrent(productsCurrent);
        const newTitle = pathObj.cakes.title;
        setTitle(newTitle);
      }

      if (path === pathObj.coffees.path) {
        const productsCurrent = products
          ? products.filter((product) =>
              product.category.includes(pathObj.coffees.title)
            )
          : [];
        setProductsCurrent(productsCurrent);
        const newTitle = pathObj.coffees.title;
        setTitle(newTitle);
      }

      if (path === pathObj.milkTeas.path) {
        const productsCurrent = products
          ? products.filter((product) =>
              product.category.includes(pathObj.milkTeas.title)
            )
          : [];
        setProductsCurrent(productsCurrent);
        const newTitle = pathObj.milkTeas.title;
        setTitle(newTitle);
      }

      if (path === pathObj.milkTeas.path) {
        const productsCurrent = products
          ? products.filter((product) =>
              product.category.includes(pathObj.milkTeas.title)
            )
          : [];
        setProductsCurrent(productsCurrent);
        const newTitle = pathObj.milkTeas.title;
        setTitle(newTitle);
      }
    }

    if (path === pathObj.productSearchs.path) {
      const productIdSearchJsons = localStorage.getItem(PRODUCT_ID_SEARCHS);
      const productIdSearchs = productIdSearchJsons
        ? JSON.parse(productIdSearchJsons)
        : [];
      const productSearchs = products
        ? products.filter((product) => productIdSearchs.includes(product.id))
        : [];
      setProductsCurrent(productSearchs);
      const newTitle = pathObj.productSearchs.title;
      setTitle(newTitle);
    }

    if (path === pathObj.favorites.path) {
      const productIdFavoriteJsons = localStorage.getItem(PRODUCT_ID_FAVORITES);
      const productIdFavorites = productIdFavoriteJsons
        ? JSON.parse(productIdFavoriteJsons)
        : [];
      const productFavorites = products
        ? products.filter((product) => productIdFavorites.includes(product.id))
        : [];
      setProductsCurrent(productFavorites);
      const newTitle = pathObj.favorites.title;
      setTitle(newTitle);
    }

    if (title === "Menu") setTitle("Tất cả món ăn");

    if (isBlog) {
      const blogsCurr = localStorage.getItem(BLOGS)
        ? JSON.parse(localStorage.getItem(BLOGS))
        : [];
      setBlogs(blogsCurr);
      const newTitle = pathObj.blogs.title;
      setTitle(newTitle);
    }
  }, [products, hasReRenderContent, path, isBlog]);

  useEffect(() => {
    if (products && products.length > 0) {
      setHasLoading(false);
    }
  }, [products, blogs, hasReRenderContent, path, isBlog]);

  return (
    <contextHasReRenderContent.Provider value={handleReRenderContent}>
      <LayoutNavBar path={path} isBlog={isBlog}>
        <div className={cl("list")}>
          {!hasLoading && (
            <>
              <Head title={title} isBlog={isBlog} />
              <Content
                setTitle={(title) => setTitle(title)}
                products={productsCurrent}
                blogs={blogs}
                isReRender={!!hasReRenderContent}
              />
            </>
          )}
          {hasLoading && (
            <div className={cl("loading")}>
              <Loading />
            </div>
          )}
        </div>
      </LayoutNavBar>
    </contextHasReRenderContent.Provider>
  );
}

List.propTypes = {
  path: PropTypes.string,
  isBlog: PropTypes.bool,
};
