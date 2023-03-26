import React, { useEffect, useState } from "react";
import classnames from "classnames/bind";
import { Container, Row, Col } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";

import EffectCard from "Component/EffectCard/index";
import Img from "Component/Img";
import Loading from "Component/Animation/Loading";
import { ReactComponent as IconDialog } from "assets/icon/dialog.svg";

import getAPIFeedBacks from "apiServices/apiFeedBacks";

import styles from "./FeedBack.module.scss";

const cl = classnames.bind(styles);
export default function FeedBack() {
  const [feedBacks, setFeedBacks] = useState(null);
  const [hasLoading, setHasLoading] = useState(true);

  useEffect(() => {
    async function getFeedBacksFromAPI() {
      const feedBacks = await getAPIFeedBacks();
      setFeedBacks(feedBacks);
    }

    getFeedBacksFromAPI();
  }, []);

  useEffect(() => {
    if (feedBacks) {
      setHasLoading(false);
    }
  }, [feedBacks]);
  return (
    <section className={cl("feed-back")}>
      <Container>
        <div className={cl("content")}>
          <div className={cl("wrapper")}>
            <Row>
              <Col className="col-10 col-sm-10 col-lg-6 col-xl-4">
                {!hasLoading && (
                  <EffectCard>
                    {feedBacks &&
                      feedBacks.map((feedBack) => (
                        <SwiperSlide key={feedBack.id}>
                          <div className={cl("item")}>
                            <div className={cl("item-top")}>
                              <div className={cl("user")}>
                                <div className={cl("user__img")}>
                                  <Img
                                    src={feedBack.thumbnail_src}
                                    width="100%"
                                    heigh="auto"
                                  />
                                </div>
                                <div className={cl("user__inf")}>
                                  <div className={cl("name")}>
                                    <span>{feedBack.name}</span>
                                  </div>
                                  <div className={cl("job")}>
                                    <span>{feedBack.job}</span>
                                  </div>
                                </div>
                              </div>
                              <div className={cl("item__icon")}>
                                <IconDialog
                                  fill="currentcolor"
                                  width={30}
                                  height={30}
                                />
                              </div>
                            </div>
                            <div className={cl("item-bottom")}>
                              <span>{feedBack.content}</span>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                  </EffectCard>
                )}
                {hasLoading && (
                  <div className={cl("loading")}>
                    <Loading />
                  </div>
                )}
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
}
