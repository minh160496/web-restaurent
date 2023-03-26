import React, { useState, useContext } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Img from "Component/Img";
import LaybelProduct from "./LaybelProduct";
import Toolip from "Component/Toolip";
import MyButton from "Component/MyButton";
import ModalProduct from "./ModalProduct";
import { ReactComponent as IconEye } from "assets/icon/eye.svg";

import ButtonAdd from "Page/ProductDetail/ButtonAdd";
import ThumbnailLike from "./ThumbnailLike";

import { contextReRenderSame } from "Page/ProductDetail/ProductDetail";
import { pathObj } from "Routers";
import { midPath } from "CONST";

import styles from "./Card.module.scss";

const cl = classNames.bind(styles);
export default function Card({ product, isDetail }) {
  const [modalProductShow, setModalProductShow] = useState(false);
  const reRenderDetail = useContext(contextReRenderSame);
  const perSales = Math.floor(
    (1 - product.price / product.oldPrice).toFixed(2) * 100
  );
  const pathParam = midPath + product.id;
  const handleFastView = () => {
    setModalProductShow(true);
  };
  return (
    <div className={cl("cart-product")}>
      <div className={cl("cart-thumbnail")}>
        <Img src={product.src} width="100%" heigh="auto" />
        {product.oldPrice && (
          <div className={cl("thumbnail__laybel")}>
            <LaybelProduct perSales={perSales} />
          </div>
        )}

        <Toolip content="Xem nhanh">
          <div
            className={cl("thumbnail__icon", "thumbnail__icon-view")}
            onClick={handleFastView}
          >
            <IconEye fill="currentcolor" width={20} height={20} />
          </div>
        </Toolip>
        <Toolip content="Đặt món">
          <div className={cl("thumbnail__icon", "thumbnail__icon-bag")}>
            <ButtonAdd id={product.id} isIcon="true" />
          </div>
        </Toolip>
        <Toolip content="Yêu thích" offset={[150, 40]}>
          <div className={cl("thumbnail-like")}>
            <ThumbnailLike id={product.id} />
          </div>
        </Toolip>
        <div onClick={() => isDetail && reRenderDetail()}>
          <Link
            to={pathObj.productDetails.path + pathParam}
            className={cl("thumbnail-blur")}
          ></Link>
        </div>
      </div>
      <div onClick={() => isDetail && reRenderDetail()}>
        <Link
          to={pathObj.productDetails.path + pathParam}
          className={cl("cart-name") + " d-block"}
        >
          <h4>{product.name}</h4>

          <div
            className={cl("cart-price") + " flex align-center justify-around"}
          >
            <div className={cl("current-price")}>
              <span>{product.price + ".000"}</span>
            </div>
            {product.oldPrice && (
              <div className={cl("old-price")}>
                <span>{product.oldPrice + ".000"}</span>
              </div>
            )}
          </div>
        </Link>
      </div>
      <div className={cl("cart-button")}>
        <MyButton
          className={cl("btn")}
          link={pathObj.productDetails.path + pathParam}
          onClick={() => isDetail && reRenderDetail()}
        >
          Xem chi tiết
        </MyButton>
      </div>
      <ModalProduct
        product={product}
        show={modalProductShow}
        onHide={() => setModalProductShow(false)}
      />
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.object,
  isDetail: PropTypes.bool,
};
