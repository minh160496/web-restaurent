import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";
import { Container, Row, Col } from "react-bootstrap";

import Card from "Component/Card/index";

import { getAPIMenu } from "apiServices/apiMenu";
import { contextProducts } from "App";

import styles from "./TabProduct.module.scss";

const cl = classNames.bind(styles);
export default function TabProduct() {
  const products = useContext(contextProducts);
  const [menuProducts, setMenuProducts] = useState([]);
  const [IDsProduct, setIDsProduct] = useState([]);
  const [productsFilter, setProductsFilter] = useState([]);
  const [filterTypeID, setFilterTypeID] = useState(1);

  useEffect(() => {
    async function getMenuListFromAPI() {
      const menuProducts = await getAPIMenu();
      setMenuProducts(menuProducts);
    }
    getMenuListFromAPI();
  }, []);

  useEffect(() => {
    if (menuProducts && menuProducts[filterTypeID - 1]) {
      setIDsProduct(menuProducts[filterTypeID - 1].listIdProducts);
    }
    const productsFilter = products
      ? products.filter((item) => IDsProduct.includes(item.id))
      : [];
    setProductsFilter(productsFilter);
  }, [filterTypeID, menuProducts, IDsProduct]);

  return (
    <section className={cl("tab-product")}>
      <Container>
        <div className={cl("tab-product__title")}>
          <h1 className="stylized title-big stylized-after ">
            Thực đơn của chúng tôi
          </h1>
        </div>
        <div className={cl("tab-product__filter")}>
          {menuProducts &&
            menuProducts.map((currentMenuProduct) => (
              <div
                className={cl("filter__item", {
                  active: filterTypeID === currentMenuProduct.id,
                })}
                key={currentMenuProduct.id}
                onClick={() => setFilterTypeID(currentMenuProduct.id)}
              >
                <span>{currentMenuProduct.type}</span>
              </div>
            ))}
        </div>

        <div className={cl("tab-product__content")}>
          <Row>
            {productsFilter &&
              productsFilter.map((product) => (
                <Col
                  className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2"
                  key={product.id}
                >
                  <div className={cl("cart-wrapper")}>
                    <Card product={product} />
                  </div>
                </Col>
              ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}
