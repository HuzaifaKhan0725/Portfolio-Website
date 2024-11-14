import React from 'react';


export default function Skill() {
    const SkillItems = [
        {
            imgSrc: "/html.svg",  // Corrected path
            label: "Html",
            desc: "Hypertext Markup Language",
        },
        {
            imgSrc: "/css.svg",   // Corrected path
            label: "Css",
            desc: "User interface"
        },
        {
            imgSrc: "/javascript.png",  // Corrected path
            label: "Javascript",
            desc: "Interaction"
        },
        {
            imgSrc: "/react.svg",  // Corrected path
            label: "React",
            desc: "Frontend JavaScript library"
        },
        {
            imgSrc: "/Gsap.png",   // Corrected path
            label: "Gsap",
            desc: "GreenSock Animation Platform is a JavaScript animation library"
        },

    ];

    return (
        <section className='section py-8 md:py-16'>
             <div className="container mx-auto px-4">
                <h2 className="heading-2 text-center md:text-left">My Skills And Essential tool I use</h2>
                <p className="text-lg text-zinc-400 mt-3 mb-8 max-w-[50ch] mx-auto md:mx-0 text-center md:text-left">I am a highly proficient web developer with experience in HTML, CSS, JavaScript, React and GreenSock Animation Platform.</p>
           
       
        <div className="grid gap-4 sm:gap-6  sm:grid-cols-2 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
            {SkillItems.map((skill,key) => {
                return (
                    <div className="flex items-center gap-4 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-950 ">
                    <div key={key}>
                        <img src={skill.imgSrc} width={40} height={40} alt={skill.label} />
                        <h3>{skill.label}</h3>
                        <p >{skill.desc}</p>
                    </div>
                    </div>
                );
            })}
        </div>
        </div>

</section>
    );
}
