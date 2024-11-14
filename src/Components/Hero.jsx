import React from 'react';
import { Button, ButtonOutline } from './Button';



const Hero = () => {
  return (
    <>
      <section className="hero-main pt-15 lg:pt-30 "  id="home">
        <div className='container lg:grid lg:grid-cols-2 items-center lg:gap-4'>
          <div>
            <h1 className='heading-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch]  mb-6'>Building Scalable Modern Website For the Future</h1>
        <div className="flex items-center gap-3">

            <Button className="best-btn" label="Download CV" icon="download"/>
            <ButtonOutline className="best-btn" href="about" label="Scroll-down" icon="south"/>
        </div>
              </div>
          <div className="img-box pr-7 lg:block">
            <div className='w-full max-w-[480px] ml-auto bg-gradient-to-t from-emerald-400 rounded-[60px] overflow-hidden mix-blend-lighten'>
              <img 
                src="/file.png" 
                alt="Khizar" 
                width={650} 
                height={800} 
                id="Hero"
                className="Huzaifa.pic"
                />
                </div>
            </div>
          </div>
      </section>
    </>
  );
}

export default Hero;
