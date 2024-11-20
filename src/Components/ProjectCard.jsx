import React from 'react';

export default function ProjectCard({
    imgSrc,
    label,
    ProjectLink,
    desc,
    classes,
}) {
    return (
        <div className={`relative p-4 rounded-2xl bg-zinc-900 h-[42.5rem] hover:bg-zinc-800/50 ${classes}  `}>
            <figure className="img-box aspect-square rounded-lg mb-4">
                <img src={imgSrc} alt={label} className="img-cover" loading="lazy" />
            </figure>
            <figcaption>
                <h3 className="title-Name mb-3 ">{label}</h3>
                <p className="best-desc text-zinc-400 text-sm grid items-center px-3 rounded-lg">{desc}</p>
            </figcaption>
            <a
                href={ProjectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mt-2 absolute bottom-4 right-4 inset-auto"
            >
             
                <span className="material-symbols-outlined h-11 w-11 rounded-lg grid place-items-center bg-sky-300 text-zinc-900 shrink-0 ">arrow_outward</span>
            </a>
          
        </div>
    );
}
// import React from 'react';

// export default function ProjectCard({
//     imgSrc,
//     label,
//     ProjectLink,
//     desc,
//     classes,
// }) {
//     return (
//         <div className={`relative p-4 rounded-2xl bg-zinc-900 hover:bg-zinc-800/50 ${classes} h-full sm:h-[32rem] md:h-[42.5rem]`}>
//             <figure className="img-box aspect-square rounded-lg mb-4 overflow-hidden">
//                 <img src={imgSrc} alt={label} className="w-full h-full object-cover rounded-lg" loading="lazy" />
//             </figure>
//             <figcaption>
//                 <h3 className="title-Name mb-3 text-lg font-semibold text-white">{label}</h3>
//                 <p className="text-zinc-400 text-sm px-3 rounded-lg">
//                     {desc}
//                 </p>
//             </figcaption>
//             <a
//                 href={ProjectLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center mt-2 absolute bottom-4 right-4"
//             >
//                 <span className="material-symbols-outlined h-11 w-11 rounded-lg grid place-items-center bg-sky-300 text-zinc-900">
//                     arrow_outward
//                 </span>
//             </a>
//         </div>
//     );
// }
