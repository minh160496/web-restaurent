import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import classnames from "classnames/bind";

import CountUpItem from "./CountUpItem";

import { getAPICountUp } from "apiServices/apiCountUp";

import styles from "./CountUp.module.scss";

const cl = classnames.bind(styles);
export default function CountUps() {
  const [restaurentInf, setRestaurentInf] = useState([]);
  useEffect(() => {
    async function getRestaurentInfFromAPI() {
      const restaurentInf = await getAPICountUp();
      setRestaurentInf(restaurentInf);
    }

    getRestaurentInfFromAPI();
  }, []);
  return (
    <section className={cl("count-up")}>
      <Container>
        <div className={cl("title")}>
          <h1 className="stylized title-big stylized-after">
            Hệ thống của chúng tôi
          </h1>
        </div>
        <Row>
          {restaurentInf.map((infItem) => (
            <Col className="col-6 col-md-6 col-lg-3" key={infItem.id}>
              <CountUpItem
                title={infItem.type}
                src={infItem.icon}
                end={infItem.current}
                duration={1.5}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
