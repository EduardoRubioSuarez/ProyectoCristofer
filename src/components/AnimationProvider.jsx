"use client";
// Recovered from the exported application; handlers and rendered markup are preserved.
import * as ReactJSX from "react/jsx-runtime";
import * as React from "react";
import AOS from "aos";
function AnimationProvider({ children: e }) {
  return (
    React.useEffect(() => {
      AOS.init({
        duration: 700,
        easing: "ease-out-cubic",
        once: true,
        offset: 60,
        delay: 0,
      });
    }, []),
    (<ReactJSX.Fragment>{e}</ReactJSX.Fragment>)
  );
}
export default AnimationProvider;
