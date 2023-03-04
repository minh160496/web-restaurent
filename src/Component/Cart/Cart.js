import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Img from "Component/Img";
import LaybelProduct from "./LaybelProduct";
import Toolip from "Component/Toolip";
import MyButton from "Component/MyButton";
import { ReactComponent as IconEye } from "assets/icon/eye.svg";
import { ReactComponent as IconBag } from "assets/icon/bagFill.svg";
import { ReactComponent as IconHeart } from "assets/icon/heart.svg";

import styles from "./Cart.module.scss";

const cl = classNames.bind(styles);
export default function Cart({ product }) {
  const perSales = Math.floor(
    (1 - product.price / product.oldPrice).toFixed(2) * 100
  );
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
          <div className={cl("thumbnail__icon", "thumbnail__icon-view")}>
            <IconEye fill="currentcolor" width={20} height={20} />
          </div>
        </Toolip>
        <Toolip content="Đặt món">
          <div className={cl("thumbnail__icon", "thumbnail__icon-bag")}>
            <IconBag fill="currentcolor" width={20} height={20} />
          </div>
        </Toolip>
        <Toolip content="Thêm vào yêu thích">
          <div className={cl("thumbnail__like")}>
            <IconHeart
              className={cl("icon-like")}
              fill="currentcolor"
              width={24}
              height={24}
            />
          </div>
        </Toolip>
        <div className={cl("thumbnail-blur")}></div>
      </div>

      <Link to="/" className={cl("cart-name")}>
        <h4>{product.name}</h4>
      </Link>

      <div className={cl("cart-price") + " flex align-center justify-around"}>
        <div className={cl("current-price")}>
          <span>{product.price + ".000"}</span>
        </div>
        {product.oldPrice && (
          <div className={cl("old-price")}>
            <span>{product.oldPrice + ".000"}</span>
          </div>
        )}
      </div>

      <div className={cl("cart-button")}>
        <MyButton className={cl("btn")}>Xem chi tiết</MyButton>
      </div>
    </div>
  );
}

Cart.propTypes = {
  product: PropTypes.object,
};
