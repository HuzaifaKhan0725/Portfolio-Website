import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function Navbar({ HeaderOpen }) {
  const first = useRef([]);
  const activebox = useRef(); 
  const smooth = useRef(); 

  useEffect(() => {
  
    if (HeaderOpen) {
      gsap.fromTo(
        first.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "elastic.out(1, 0.75)", stagger: 0.2 }
      );
      gsap.fromTo(
        smooth.current,{
        x:100, opacity: 0, duration:1
        },
        {x:0 , opacity: 1, duration:1.2}
      )

    } else {
      gsap.to(first.current, {
        x: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1
      });
gsap.to(smooth.current,{
  x:-100, opacity: 0, duration:1
})
    }
  }, [HeaderOpen]);


  const nav = [
    { name: "Home", link: "#home", className: "nav-link active" },
    { name: "About", link: "#about", className: "nav-link" },
    { name: "Work", link: "#work", className: "nav-link" },
    { name: "Contact", link: "#contact", className: "nav-link md:hidden" },
    { name: "Review", link: "#review", className: "nav-link" }
  ];

  return (
    <div className={`navbar ${HeaderOpen ? "active" : ""}`} ref={smooth}>
      {nav.map(({ name, className, link }, key) => (
        <a
          href={link}
          className={className}
          key={key}
          ref={(el) => (first.current[key] = el)} // Assigning ref to each nav link
        >
          {name}
        </a>
      ))}
      <div className="active-box" ref={activebox}></div>
    </div>
  );
}





  
  