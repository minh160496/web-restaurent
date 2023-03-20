import React, { useContext, useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import ModalAlert from "Page/Login/ModalAlert";
import { ReactComponent as IconHeart } from "assets/icon/heart.svg";

import { PRODUCT_ID_FAVORITES, USER_LOGIN } from "CONST";
import { pathObj } from "Routers";
import { contextHasReRenderContent } from "Component/List/List";

import styles from "./ThumbnailLike.module.scss";

const cl = classNames.bind(styles);
export default function ThumbnailLike({ id }) {
  const anchorRef = useRef(null);
  const [modalShow, setModalShow] = useState(false);
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const handleReRenderContent =
    useContext(contextHasReRenderContent) || (() => {});

  const handleAddFavorites = () => {
    const isLogin = !!localStorage.getItem(USER_LOGIN);
    const productIdFavoriteJsons = localStorage.getItem(PRODUCT_ID_FAVORITES);
    const productIdFavorites = productIdFavoriteJsons
      ? JSON.parse(productIdFavoriteJsons)
      : [];
    if (isLogin) {
      if (!productIdFavorites.includes(id)) {
        const newProductIdFavorites = [...productIdFavorites, id];
        localStorage.setItem(
          PRODUCT_ID_FAVORITES,
          JSON.stringify(newProductIdFavorites)
        );
        setIsFavorite(true);
      } else {
        const indexRemove = productIdFavorites.indexOf(id);
        const newProductIdFavorites = [...productIdFavorites];
        newProductIdFavorites.splice(indexRemove, 1);
        localStorage.setItem(
          PRODUCT_ID_FAVORITES,
          JSON.stringify(newProductIdFavorites)
        );
        setIsFavorite(false);
      }
      setModalShow(true);
    } else {
      if (anchorRef && anchorRef.current) {
        anchorRef.current.click();
      }
    }
  };

  useEffect(() => {
    const ids = localStorage.getItem(PRODUCT_ID_FAVORITES);
    setFavoriteIds(JSON.parse(ids));
    if (!modalShow) {
      handleReRenderContent();
    }
  }, [modalShow]);
  return (
    <>
      <div className={cl("thumbnail__like")} onClick={handleAddFavorites}>
        <IconHeart
          className={cl("icon-like")}
          fill={
            favoriteIds && favoriteIds.includes(id) ? "red" : "currentcolor"
          }
          width={24}
          height={24}
        />
        <a
          href={pathObj.logIn.path}
          style={{ width: 0, height: 0 }}
          ref={anchorRef}
        />
      </div>
      <ModalAlert
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={
          isFavorite
            ? "Dã thêm danh món ăn vào sách yêu thích"
            : "Đã xóa món ăn khỏi danh sách yêu thích"
        }
        content={
          isFavorite
            ? "Hãy chọn thêm những sản phẩm khác"
            : "Hãy chọn một món ăn yêu thích khác bạn nhé"
        }
        valueButton={isFavorite ? "Xem danh sách" : "Xác nhận"}
        link={isFavorite ? pathObj.favorites.path : "#"}
      />
    </>
  );
}

ThumbnailLike.propTypes = {
  id: PropTypes.number,
};
