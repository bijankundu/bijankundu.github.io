import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import ReactTooltip from "react-tooltip";

import "./Top.scss";

const Top = () => {
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  window.addEventListener("scroll", checkScrollTop);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showScroll && (
        <>
          <ReactTooltip />
          <button className="back-button" onClick={scrollTop} data-tip="Scroll to top">
            <div>
              <FaArrowUp color="#ffffff" />
            </div>
          </button>
        </>
      )}
    </>
  );
};

export default Top;
