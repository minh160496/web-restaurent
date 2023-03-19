import React from "react";
import classnames from "classnames/bind";
import { motion } from "framer-motion";

import styles from "./Slider.module.scss";
import Img from "Component/Img";
import MyButton from "Component/MyButton";
import { pathObj } from "Routers";

const cl = classnames.bind(styles);
export default function Slider() {
  return (
    <section className={cl("section-slider")}>
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: {
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          },
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <div className={cl("slider__img")}>
          <Img
            src="https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/slider_mb_1.jpg?1677232264471"
            width="100%"
            heigh="auto"
          />
        </div>
      </motion.div>
      <div className={cl("slider__desc") + " pos-absolute"}>
        <div className={cl("desc-wrapper")}>
          <motion.div
            className={cl("box") + " box"}
            initial={{ opacity: 0, translateX: "-100vw" }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{
              default: {
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
          >
            <div className={cl("desc__title")}>
              <h1>Dream Restaurant</h1>
            </div>
          </motion.div>

          <motion.div
            className="box"
            initial={{ opacity: 0, translateX: "100vw" }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{
              default: {
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
          >
            <div className={cl("desc__slogan")}>
              <span>Món ăn đa dạng</span>
            </div>
          </motion.div>

          <motion.div
            className="box"
            initial={{ opacity: 0, translateY: "800%" }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              default: {
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
          >
            <div className={cl("desc__button")}>
              <MyButton className={cl("btn")} link={pathObj.list.path}>
                Đặt món ngay
              </MyButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
