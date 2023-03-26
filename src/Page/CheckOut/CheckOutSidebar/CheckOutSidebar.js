import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import MyButton from "Component/MyButton";
import Img from "Component/Img";
import ModalAlert from "Page/Login/ModalAlert";
import { ReactComponent as IconArrow } from "assets/icon/arrowLeft.svg";

import { handleUnitMoney } from "Component/CalculatorTotal";
import { pathObj } from "Routers";
import { contextProducts } from "App";
import {
  getDiscountMoney,
  PriceTotalProduct,
  TotalAll,
} from "Component/CalculatorTotal";
import {
  CART_NUM,
  DISCOUNT_CODE,
  discountCodes,
  SHIP_EXPENSE,
  DISCOUNT_USER,
} from "CONST";

import styles from "./CheckOutSidebar.module.scss";

const cl = classNames.bind(styles);
export default function CheckOutSidebar({ onClickSubmit }) {
  const products = useContext(contextProducts);
  function getCartProducts() {
    const cartProducts = [];
    const cartNumJson = localStorage.getItem(CART_NUM);
    const cartNum = cartNumJson ? JSON.parse(cartNumJson) : {};
    const listIds = Object.keys(cartNum).filter((id) => cartNum[id].isToCart);
    let idNew = 1;
    listIds.map((id) => {
      const cartProduct = {
        id: idNew,
        productId: id,
        num: cartNum[id].value,
      };
      cartProducts.push(cartProduct);
      idNew++;
    });
    return cartProducts;
  }
  const cartProducts = getCartProducts();
  //logic lấy ra phí ship
  const shipExpenseObjJson = localStorage.getItem(SHIP_EXPENSE);
  const shipExpenseObj = shipExpenseObjJson
    ? JSON.parse(shipExpenseObjJson)
    : { shipExpense: 0, isChoose: false };
  const shipExpense = shipExpenseObj.isChoose ? shipExpenseObj.shipExpense : 0;
  const shipExpenseMoney = handleUnitMoney(shipExpense + "000");
  const handleOrder = () => {
    onClickSubmit();
  };

  //logic form discount
  const [discountPromt, setDiscountPromt] = useState({
    valuePromt: "",
  });
  const [disCountUser, setDiscountUser] = useState(0);
  const [isModalShow, setIsModalShow] = useState(false);
  const [isModalErrorShow, setIsModalErrorShow] = useState(false);
  const handleAddDiscount = (valuePromt) => {
    const discountCodeJson = localStorage.getItem(DISCOUNT_CODE);
    const discountCodes = JSON.parse(discountCodeJson);
    const discountCodeUserPromt = discountCodes.find(
      (discountCode) => discountCode.code === valuePromt.trim()
    );
    if (discountCodeUserPromt) {
      localStorage.setItem(DISCOUNT_USER, discountCodeUserPromt.discountValue);
      setDiscountUser(discountCodeUserPromt.discountValue);
      setIsModalShow(true);
    } else {
      setDiscountUser(0);
      setIsModalErrorShow(true);
    }
  };

  const handleChangeDiscount = (e) => {
    setDiscountPromt({ valuePromt: e.target.value.trim() });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddDiscount(discountPromt.valuePromt);
  };

  useEffect(() => {
    localStorage.setItem(DISCOUNT_CODE, JSON.stringify(discountCodes));
  }, []);
  return (
    <>
      {cartProducts && cartProducts.length > 0 && (
        <aside className={cl("sidebar")}>
          <div className={cl("title")}>
            <h1>Đơn hàng</h1>
          </div>
          <div className={cl("main")}>
            <div className={cl("list")}>
              <ul>
                {cartProducts &&
                  cartProducts.map((cartProduct) => (
                    <li
                      className={
                        cl("item") + " flex align-center justify-between"
                      }
                      key={cartProduct.id}
                    >
                      <div className={cl("product") + " flex align-center"}>
                        <div className={cl("image")}>
                          <Img
                            src={
                              products[+cartProduct.productId - 1] &&
                              products[+cartProduct.productId - 1].src
                            }
                            width={"100%"}
                            heigh={"auto"}
                          />
                          <div className={cl("num-product")}>
                            {cartProduct.num}
                          </div>
                        </div>
                        <h4 className={cl("name")}>
                          {products[+cartProduct.productId - 1] &&
                            products[+cartProduct.productId - 1].name}
                        </h4>
                      </div>
                      <span className={cl("product__price")}>
                        {products[+cartProduct.productId - 1] &&
                          handleUnitMoney(
                            products[+cartProduct.productId - 1].price + "000"
                          )}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
            <div className={cl("discount")}>
              <Form className="flex align-center" onSubmit={handleSubmit}>
                <input
                  type="text"
                  className={cl("discount__input")}
                  value={discountPromt.valuePromt}
                  placeholder="Nhập mã giảm giá (LUCKY20)"
                  onChange={handleChangeDiscount}
                />
                <MyButton className={cl("btn")} type="submit">
                  Áp dụng
                </MyButton>
              </Form>
            </div>
            <div className={cl("price")}>
              <div
                className={
                  cl("provisional") + " flex align-center justify-between"
                }
              >
                <span>Tạm tính: </span>
                <span>
                  <PriceTotalProduct
                    products={products}
                    cartProducts={cartProducts}
                  />
                </span>
              </div>
              {!!disCountUser && (
                <div
                  className={
                    cl("discount-price") + " flex align-center justify-between"
                  }
                >
                  <span>Giảm giá: </span>
                  <span>
                    {"-" +
                      getDiscountMoney(disCountUser, products, cartProducts)}
                  </span>
                </div>
              )}
              {shipExpense > 0 && (
                <div
                  className={cl("ship") + " flex align-center justify-between"}
                >
                  <span>Phí vận chuyển: </span>
                  <span>{shipExpenseMoney}</span>
                </div>
              )}
              <div
                className={cl("total") + " flex align-center justify-between"}
              >
                <span>Tổng cộng: </span>
                <span className={cl("price-total")}>
                  <TotalAll
                    products={products}
                    cartProducts={cartProducts}
                    ship={shipExpense}
                    discount={disCountUser}
                  />
                </span>
              </div>
            </div>
            <div
              className={cl("practice") + " flex align-center justify-between"}
            >
              <Link
                to={pathObj.shoppingCart.path}
                className="flex align-center"
              >
                <IconArrow fill="currentcolor" width={20} height={20} />
                <span>Trở về giỏ hàng</span>
              </Link>
              <MyButton className={cl("btn")} onClick={handleOrder}>
                Đặt hàng
              </MyButton>
            </div>
          </div>
          <ModalAlert
            title="Chúc mừng bạn!"
            content={
              "Bạn được giảm giá " +
              disCountUser * 100 +
              "%" +
              " trên tổng giá trị đơn hàng"
            }
            valueButton="Đóng"
            show={isModalShow}
            onHide={() => setIsModalShow(false)}
          />
          <ModalAlert
            error
            title="Thêm thất bại"
            content={"Mã giảm giá không tồn tại"}
            valueButton="Đóng"
            show={isModalErrorShow}
            onHide={() => setIsModalErrorShow(false)}
          />
        </aside>
      )}
    </>
  );
}

CheckOutSidebar.propTypes = {
  onSubmit: PropTypes.func,
};
