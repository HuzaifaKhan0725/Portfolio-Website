import React from 'react'

const Aboutitems =[
    {
    title: "Project clone ",
    Number: 20,
    },
{
    title: "Year of experience",
    Number: 1,

    
}
]
export default function About() {
  return (
   <section id="about" className='section'>
    <div className="container"> 
        <div className="light-background ">
            <p className="mb-4 md:mb-8 md:text-xl">Welcome! I&apos;m Huzaifa, A professional web developer with the experience of three year.
            I specialize in creating stunning, highly functional websites that are both visually appealing and user-friendly.I have hands-on experience 
            with HTML, CSS, JavaScript,bootstrap, React and  Gsap and I am continuously expanding my expertise in modern frameworks and tools
             to stay ahead of the curve. If you're looking for someone who is dedicated to delivering pixel-perfect designs and seamless user experiences, you're in the right place!  </p>
            <div className="flex flex-wrap items-center gap-4 md:gap-7">
                {
                    Aboutitems.map((item,key) => (
                        <div className='about-item' key={key} >
                            <div className="flex items-center md:mb-2">
                            <p className="text-2xl font-semibold md:text-4xl">{item.Number}+</p>
                        </div>
                        <div>
                            <h2>{item.title}</h2>
                            </div>
                            </div>
                    ))
                }
            </div>
        </div>
    </div>
   </section>
  )
}
