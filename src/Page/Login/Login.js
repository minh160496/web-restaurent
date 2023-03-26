import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import LayoutDefault from "Layout/LayoutDefault";
import Form from "Component/Form";
import Loading from "Component/Animation/Loading";
import ModalAlert from "./ModalAlert";

import { pathObj } from "Routers";
import { USER_LOGIN, USER_SIGNIN } from "CONST";

import styles from "./Login.module.scss";

const cl = classNames.bind(styles);
export default function Login({ hasLogin = true }) {
  const [isLoginSucsess, setIsLoginSucsess] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);
  const [isSignInSucsess, setIsSignInSucsess] = useState(false);
  const [isSignInDuplicateEmail, setIsSignInDuplicateEmail] = useState(false);
  const [modalErrorLoginShow, setModalErrorLoginShow] = useState(false);
  const [modalSignInSucsess, setModalSignInSucsess] = useState(false);
  const [modalSignInDuplicateEmail, setModalSignInDuplicateEnail] =
    useState(false);
  const [isWait, setIsWait] = useState(false);
  const userSignInsJson = localStorage.getItem(USER_SIGNIN);
  const userSignIns = userSignInsJson ? JSON.parse(userSignInsJson) : [];
  const anchorRef = useRef(null);

  const handleDataLogin = (data) => {
    setIsWait(true);
    const userLogin = userSignIns.find((user) => {
      return user.email === data.email && user.password === data.password;
    });

    if (userLogin) {
      const timeOut = setTimeout(() => {
        setIsLoginSucsess(true);
        setIsLoginError(false);
        const userLoginSave = {
          email: userLogin.email,
          firstName: userLogin.firstName,
          lastName: userLogin.lastName,
          isLogin: true,
        };
        localStorage.setItem(USER_LOGIN, JSON.stringify(userLoginSave));
        setIsWait(false);
        window.clearTimeout(timeOut);
      }, 2000);
    } else {
      const timeOut = setTimeout(() => {
        setIsWait(false);
        setIsLoginSucsess(false);
        setIsLoginError(true);
        setModalErrorLoginShow(true);
        window.clearTimeout(timeOut);
      }, 2500);
    }
  };
  const handleDataSingIn = (data) => {
    const userSignInsJson = localStorage.getItem(USER_SIGNIN);
    const userSignInEds = userSignInsJson ? JSON.parse(userSignInsJson) : [];
    const duplicateEmail = userSignInEds.find(
      (userSignIn) => userSignIn.email === data.email
    );
    setIsWait(true);
    if (!duplicateEmail) {
      userSignIns.push(data);
      localStorage.setItem(USER_SIGNIN, JSON.stringify(userSignIns));
      const timeOut = setTimeout(() => {
        setIsWait(false);
        setIsSignInSucsess(true);
        setModalSignInSucsess(true);
        window.clearTimeout(timeOut);
      }, 2500);
    } else {
      const timeOut = setTimeout(() => {
        setIsWait(false);
        setIsSignInDuplicateEmail(true);
        setModalSignInDuplicateEnail(true);
        window.clearTimeout(timeOut);
      }, 2500);
    }
  };

  useEffect(() => {
    if (anchorRef.current) {
      anchorRef.current.click();
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = pathObj.logIn.title;
  }, []);

  return (
    <div className={cl("login")}>
      <LayoutDefault path={hasLogin ? pathObj.logIn.path : pathObj.signIn.path}>
        <Container>
          <div className={cl("wrapper")}>
            <div className={cl("form-main")}>
              <div className={cl("head")}>
                <Container className="p-0">
                  <Row>
                    <Col className="col-6">
                      <Link className="d-block" to={pathObj.logIn.path}>
                        <div className={cl("login-head", { active: hasLogin })}>
                          <h2>Đăng nhập</h2>
                        </div>
                      </Link>
                    </Col>
                    <Col className="col-6">
                      <Link className="d-block" to={pathObj.signIn.path}>
                        <div
                          className={cl("signin-head", { active: !hasLogin })}
                        >
                          <h2>Đăng ký</h2>
                        </div>
                      </Link>
                    </Col>
                  </Row>
                </Container>
              </div>
              {hasLogin && (
                <div className={cl("main")}>
                  <div className={cl("title")}>
                    <h1>Đăng Nhập</h1>
                  </div>
                  <div className={cl("content")}>
                    <Form
                      email
                      password
                      valueButton="Đăng nhập"
                      buttonCenter
                      handleDataForm={handleDataLogin}
                    />
                  </div>
                </div>
              )}
              {!hasLogin && (
                <div className={cl("main")}>
                  <div className={cl("title")}>
                    <h1>Đăng ký</h1>
                  </div>
                  <div className={cl("content")}>
                    <Form
                      firstName
                      lastName
                      email
                      password
                      repassword
                      valueButton="Đăng ký"
                      buttonCenter
                      handleDataForm={handleDataSingIn}
                    />
                  </div>
                </div>
              )}

              {isWait && (
                <div className={cl("loading")}>
                  <Loading />
                </div>
              )}

              {!isWait && isLoginSucsess && <a href="/" ref={anchorRef}></a>}
              {isLoginError && (
                <ModalAlert
                  error
                  title="Đăng nhập thất bại"
                  content="Vui Lòng Kiểm tra lại email, mật khẩu. Nếu chưa đăng ký hãy đăng ký để trở thành khách hàng của chúng tôi!"
                  valueButton="Xác nhận"
                  show={modalErrorLoginShow}
                  onHide={() => setModalErrorLoginShow(false)}
                />
              )}
              {isSignInSucsess && (
                <ModalAlert
                  title="Đăng ký thành công"
                  content="Chúc mừng bạn đã trở thành khách hàng của chúng tôi"
                  valueButton="Đăng nhập"
                  link={pathObj.logIn.path}
                  show={modalSignInSucsess}
                  onHide={() => setModalSignInSucsess(false)}
                />
              )}
              {isSignInDuplicateEmail && (
                <ModalAlert
                  error
                  title="Đăng ký thất bại"
                  content="Có vẻ như email này đã đước đăng ký trước đó vui lòng chọn email khác"
                  valueButton="Xác nhận"
                  show={modalSignInDuplicateEmail}
                  onHide={() => setModalSignInDuplicateEnail(false)}
                />
              )}
            </div>
          </div>
        </Container>
      </LayoutDefault>
    </div>
  );
}

Login.propTypes = {
  hasLogin: PropTypes.bool,
};
