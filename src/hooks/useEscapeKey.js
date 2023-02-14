import React from "react";

const useEscapeKey = (callback) => {
  React.useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.code === "Escape") {
        typeof callback === 'function' && callback(event);
      }
    };
    window.addEventListener("keydown", handleEscapeKey);

    return () => window.removeEventListener("keydown", handleEscapeKey);
  }, [callback])
}

export default useEscapeKey;