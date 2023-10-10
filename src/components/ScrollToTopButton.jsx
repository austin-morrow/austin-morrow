import React, { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Check if the user is scrolling up
      setIsVisible(currentScrollPos < prevScrollPos && currentScrollPos > 0);

      // Update the previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-4 right-4 bg-yellow-400 text-primary-black p-2 rounded-full shadow-md"
          onClick={handleScrollToTop}
        >
          <ArrowUpIcon className="w-6 h-6" />
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;
