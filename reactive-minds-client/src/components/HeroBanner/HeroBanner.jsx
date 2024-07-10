import { useEffect, useRef, useState } from "react";
import "./HeroBanner.scss";

export default function HeroBanner({ title }) {
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const [heroHeight, setHeroHeight] = useState(0);
  const heroRef = useRef(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const position = window.scrollY;
  //     console.log("position:", position);
  //     setScrollPosition(position);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll();

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   const updateHeroHeight = () => {
  // const height = heroRef.current.offsetHeight;
  console.log(heroRef.current.offsetHeight);
  //     setHeroHeight(height);
  //   };
  //   window.addEventListener("resize", updateHeroHeight);
  //   updateHeroHeight();

  //   return () => {
  //     window.removeEventListener("resize", updateHeroHeight);
  //   };
  // }, []);

  // const shrinkHeight = heroHeight.valueOf() * 0.9;
  // console.log(shrinkHeight);

  return (
    <div
      className="page__hero"
      // className={`page__hero${
      //   scrollPosition > shrinkHeight ? "page__hero--shrink" : ""
      // }`}
      ref={heroRef}
    >
      <div className="page__title-container">
        <h1 className="page__title">{title}</h1>
      </div>
    </div>
  );
}
