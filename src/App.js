import "bootstrap/dist/css/bootstrap.min.css";
import classNames from "classnames/bind";
import "normalize.css"; //reset css
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import styles from "App.module.scss";
import GlobalStyle from "GlobalStyle";
import LayoutDefault from "Layout/LayoutDefault";
import { routes } from "Routers";

const cl = classNames.bind(styles);
function App() {
  return (
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
  );
}

export default App;
