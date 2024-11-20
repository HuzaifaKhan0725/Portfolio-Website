import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar'
import gsap from 'gsap';
import { useState, useRef } from 'react'

const Header = () => {
  const Huzaifa = useRef([])

  useEffect(() => {
    gsap.fromTo(
      Huzaifa.current,
      { opacity: 0, y: 50, delay: 1, duration: 3 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, delay: 0.5, repeat: -1, yoyo: true, color: 'black' },
    );
  }, [])

  const [HeaderOpen, SetHeaderOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        SetHeaderOpen(false);
      } else if (window.innerWidth >= 768) {
        SetHeaderOpen(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-10 bg-white bg-opacity-30 backdrop-blur-md text-black shadow-lg">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1 className=" text-2xl font-bold ">
          {
            "Huzaifa".split("").map((letter, index) => {
              return (
                <span key={`${letter}-${index}`} ref={el => Huzaifa.current[index] = el}>
                  {letter}
                </span>
              )
            })
          }
        </h1>
        <div className="relative md:justify-self-center">
          <button className="button-position text-2xl font-bold menu-btn md:hidden" onClick={() => SetHeaderOpen((prev) => !prev)}>
            <span>
              <FontAwesomeIcon
                className={`${HeaderOpen ? "close" : "menu"} `}
                icon={HeaderOpen ? faXmark : faBars}
              />
            </span>
          </button>
          <Navbar HeaderOpen={HeaderOpen} />
        </div>
        <a href="#contact" className='btn btn-primary max-md:hidden md:justify-self-end'>
          Contact me
        </a>
      </div>
    </header>
  )
}

export default Header;
