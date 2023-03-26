import React, { useEffect } from "react";
import classnames from "classnames/bind";
import { Container } from "react-bootstrap";

import LayoutDefault from "Layout/LayoutDefault";
import Img from "Component/Img";

import { pathObj } from "Routers";

import styles from "./About.module.scss";

const cl = classnames.bind(styles);
export default function About() {
  useEffect(() => {
    document.title = pathObj.about.title;
  }, []);
  return (
    <LayoutDefault path={pathObj.about.path}>
      <main className={cl("about")}>
        <Container>
          <div className={cl("about__title")}>
            <h1>Giới thiệu</h1>
          </div>
          <div className={cl("about__desc")}>
            <span>
              DREAM RESTAURANT - Nhà hàng ẩm thực hiện đại kết hợp với truyền
              thống, tạo nên tính mới lạ cho thực khách. Được ra đời vào năm
              2021 với tiêu chí "Khách hàng là trên hết" nên chúng tôi luôn tự
              hào về cách phục vụ cũng như các món ăn mà chúng tôi làm ra. Nhà
              hàng chúng tôi luôn luôn đặt khách hàng lên hàng đầu, tận tâm phục
              vụ, mang lại cho khách hàng những trãi nghiệm tuyệt với nhất. Các
              món ăn với công thức độc quyền sẽ mang lại hương vị mới mẻ cho
              thực khách. Dola Restaurant xin chân thành cảm ơn.
            </span>
          </div>
          <div className={cl("about__img")}>
            <Img
              src="https://bizweb.dktcdn.net/100/469/097/files/bn-video.png?v=1666689777140"
              width="100%"
              heigh="auto"
            />
            <div className={cl("img-alt")}>
              <h2>HÃY ĐẾN DREAM RESTAURANT ĐỂ THƯỞNG THỨC NGAY BẠN NHÉ!</h2>
            </div>
          </div>
        </Container>
      </main>
    </LayoutDefault>
  );
}
