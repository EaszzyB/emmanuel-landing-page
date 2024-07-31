import { useEffect, useRef } from "react";

import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import gsap from "gsap";
import { components } from "..";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => { 
cost components = useRef(null);

useEffect(() => {
  let ctx = gsap.context(()=> {


  }, components);
  return () => ctx.revert();
  }, [])

const renderLettters = (name:KeyTextField, key:string) => {
  if (!name) return;
  return name.split("").map((letter, index) => (
    <span key={index} className={`name-animation name-animation-${key} inline-block 
    opacity-0`}>
      {letter}
    </span>
  ))
}



  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid min-h-[70vh] grid-cold-1 md:grid-cols-2 items-center">
        <div className="col-start-1 mid:row-start-1">
          <h1 className="mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none
          tracking-tighter" aria-label={slice.primary.first_name + " " + slice.primary.last_name}>
      <span className="block text-slate-300">
        {renderLettters(slice.primary.first_name, "first")}
        </span>
      <span className="-mt-[.2em] block text-slate-500">
        {renderLettters(slice.primary.last_name, "last")}
        </span>
        </h1>
        <span className="block bg-gradient-to-tr from-yellow-500 via-blue-700
        to-yellow-500 bg-clip-text text-2xl font-bold uppercase tracking-[.2em] 
        text-transparent opacity-100 md:text-4xl">
          {slice.primary.tag_line}
          </span>
       </div>
      </div>
    </section>
  );
};

export default Hero;
