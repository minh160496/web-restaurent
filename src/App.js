import React, { useEffect, useState, createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classNames from "classnames/bind";
import "normalize.css"; //reset css
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "Routers";

import { getAPIProducts } from "apiServices/apiProducts";
import { CART_NUM } from "CONST";

import GlobalStyle from "GlobalStyle";
import styles from "App.module.scss";

// import LayoutDefault from "Layout/LayoutDefault";

const cl = classNames.bind(styles);
export const contextProducts = createContext(null);
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProductsFromAPI() {
      const products = await getAPIProducts();
      if (products) setProducts(products);
    }

    getProductsFromAPI();
  }, []);

  //tạo ra cartNum ban đầu lưu vào storage
  useEffect(() => {
    if (
      localStorage.getItem(CART_NUM) === "{}" ||
      !localStorage.getItem(CART_NUM)
    ) {
      const cartNum = {};
      products.forEach((product) => {
        cartNum[product.id] = { value: 1, isToCart: false };
      });
      localStorage.setItem(CART_NUM, JSON.stringify(cartNum));
    }
  });
  return (
    <contextProducts.Provider value={products}>
      <GlobalStyle>
        <div className={cl("App")}>
          <Router>
            <Routes>
              {routes.map((routerItem, index) => (
                <Route
                  key={index}
                  path={routerItem.path}
                  element={<routerItem.element />}
                />
              ))}
            </Routes>
          </Router>
        </div>
      </GlobalStyle>
    </contextProducts.Provider>
  );
}

export default App;
