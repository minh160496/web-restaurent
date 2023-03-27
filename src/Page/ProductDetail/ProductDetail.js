import React, { createContext, useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";
import { Col, Container, Row } from "react-bootstrap";

import MyButton from "Component/MyButton";
import LayoutNavBar from "Layout/LayoutNavBar";
import Img from "Component/Img";
import ChooseQuanlity from "Component/ChooseQuanlity";
import ProductDesc from "./ProductDesc";
import ProductSame from "./ProductSame";

import { pathObj } from "Routers";
import { contextProducts } from "App";

import styles from "./ProductDetail.module.scss";
import ButtonAdd from "./ButtonAdd";

export const contextReRenderSame = createContext(null);
export const contextReRenderPageDetail = createContext(null);

const cl = classNames.bind(styles);
export default function ProductDetail() {
  const products = useContext(contextProducts);
  const [reRender, setIsReRender] = useState({ value: false });

  const handleReRenderDetailPage = () => {
    setIsReRender((prev) => ({ ...prev, value: true }));
  };
  const [id, setId] = useState(() => {
    const id = new URLSearchParams(window.location.href).get("id");
    return id;
  });
  const onReRender = () => {
    const id = new URLSearchParams(window.location.href).get("id");
    setId(id);
  };
  const product = products ? products[id - 1] : null;
  const category = product ? product.category.split("/")[0] : null;
  useEffect(() => {
    const id = new URLSearchParams(window.location.href).get("id");
    setId(id);
  }, [reRender]);

  useEffect(() => {
    window.scroll(0, 0);
  }, [id]);

  useEffect(() => {
    document.title = pathObj.productDetails.title;
  }, []);

  return (
    <contextReRenderPageDetail.Provider
      value={{ func: handleReRenderDetailPage, value: reRender }}
    >
      <div className={cl("product-detail")}>
        <LayoutNavBar navBarRight isBlog path={pathObj.productDetails.path}>
          {product && (
            <div className={cl("main")}>
              <Container className="p-0">
                <Row>
                  <Col className={"col-12 col-md-5 col-xl-4"}>
                    <div className={cl("main__left")}>
                      <Img
                        className={cl("image")}
                        src={product.src}
                        width="100%"
                        heigh="auto"
                      />
                    </div>
                  </Col>
                  <Col className="col-12 col-md-7 col-xl-8">
                    <div className={cl("main__right")}>
                      <Container className="p-0">
                        <div className={cl("title")}>
                          <h2 className={cl("product-name") + " stylized"}>
                            {product.name}
                          </h2>
                        </div>

                        <div className={cl("price")}>
                          <div className={cl("price-online")}>
                            <span>{product.price + ".000đ"}</span>
                          </div>
                          {product.oldPrice && (
                            <>
                              <div className={cl("price-offline")}>
                                <span>Giá tại cửa hàng: </span>
                                {"  "} <span>{product.oldPrice + ".000đ"}</span>
                              </div>
                              <div className={cl("price-save")}>
                                <span>Tiết kiệm: </span>{" "}
                                <span>
                                  {Number(product.oldPrice) -
                                    Number(product.price) +
                                    ".000" +
                                    "đ"}
                                </span>
                              </div>
                            </>
                          )}
                        </div>

                        <div className={cl("num")}>
                          <div className={cl("num__title")}>
                            <span>Số lượng</span>
                          </div>
                          <div className={cl("num__content")}>
                            <ChooseQuanlity id={product.id} isToCart={false} />
                          </div>
                        </div>

                        <div className={cl("order")}>
                          <Row>
                            <Col className="col-12 col-sm-6">
                              <ButtonAdd
                                id={product.id}
                                className={cl("btn")}
                              />
                            </Col>
                            <Col className="col-12 col-sm-6">
                              <MyButton
                                className={cl("btn")}
                                link={pathObj.orderTable.path}
                              >
                                Đặt bàn tại đây
                              </MyButton>
                            </Col>
                          </Row>
                        </div>
                      </Container>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <div className={cl("product-desc")}>
                    <ProductDesc />
                  </div>
                </Row>
                <Row>
                  <div className={cl("product-same")}>
                    <contextReRenderSame.Provider value={onReRender}>
                      <ProductSame category={category} />
                    </contextReRenderSame.Provider>
                  </div>
                </Row>
              </Container>
            </div>
          )}
        </LayoutNavBar>
      </div>
    </contextReRenderPageDetail.Provider>
  );
}
