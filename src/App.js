import React, { useEffect, useState, createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classNames from "classnames/bind";
import "normalize.css"; //reset css
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "Routers";

import { getAPIProducts } from "apiServices/apiProducts";

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
      setProducts(products);
    }

    getProductsFromAPI();
  }, []);
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
