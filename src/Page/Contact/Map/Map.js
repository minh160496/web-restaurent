import React from "react";
import classNames from "classnames/bind";

import styles from "./Map.module.scss";

const cl = classNames.bind(styles);
export default function Map() {
  return (
    <div className={cl("map")}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.518170223409!2d106.65107481514757!3d10.771568592324835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec07488c543%3A0x7dc9617e924ddb50!2zNzAgTOG7ryBHaWEsIFBoxrDhu51uZyAxNSwgUXXhuq1uIDExLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmggNzAwMDAwLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1678447053654!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ borderRadius: 10 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
