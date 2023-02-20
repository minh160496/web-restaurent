import React from "react";
import Tippy from "@tippyjs/react";
import PropTypes from "prop-types";
import "tippy.js/themes/light.css";

export default function Toolip({
  content,
  children,
  place = "bottom-start",
  visible,
  className = "",
}) {
  return (
    <div className={className + " tippy-toolip"}>
      <Tippy
        delay={0}
        duration={0}
        visible={visible}
        interactive
        placement={place}
        content={<span>{content}</span>}
        arrow={false}
        role="toolip"
        theme="light"
        zIndex={10000}
      >
        {children}
      </Tippy>
    </div>
  );
}

Toolip.propTypes = {
  content: PropTypes.node,
  children: PropTypes.node,
  place: PropTypes.string,
  visible: PropTypes.bool,
  className: PropTypes.string,
};
