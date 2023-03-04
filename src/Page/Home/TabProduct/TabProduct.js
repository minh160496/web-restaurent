import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";
import { Container, Row, Col } from "react-bootstrap";

import Cart from "Component/Cart";

import { getAPIMenu } from "apiServices/apiMenu";
import { contextProducts } from "App";

import styles from "./TabProduct.module.scss";

const cl = classNames.bind(styles);
export default function TabProduct() {
  const products = useContext(contextProducts);
  const [menuProducts, setMenuProducts] = useState([]);
  const [IDsProduct, setIDsProduct] = useState([]);
  const [ProductsFilter, setProductsFilter] = useState([]);
  const [filterTypeID, setFilterTypeID] = useState(1);

  useEffect(() => {
    async function getMenuListFromAPI() {
      const menuProducts = await getAPIMenu();
      setMenuProducts(menuProducts);
    }
    getMenuListFromAPI();
  }, []);

  useEffect(() => {
    if (menuProducts[filterTypeID - 1]) {
      setIDsProduct(menuProducts[filterTypeID - 1].listIdProducts);
    }
    const ProductsFilter = products.filter((item) =>
      IDsProduct.includes(item.id)
    );
    setProductsFilter(ProductsFilter);
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
          {menuProducts.map((currentMenuProduct) => (
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
            {ProductsFilter.map((product) => (
              <Col className="col-6 col-md-4 col-lg-2" key={product.id}>
                <div className={cl("cart-wrapper")}>
                  <Cart product={product} />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}
