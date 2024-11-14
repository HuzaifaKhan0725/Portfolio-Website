import React from 'react';
import ProjectCard from './ProjectCard';

export default function Work() {
    const workItems = [
        {
            imgSrc: "/Todo.jpg",
            title: "To-Do Today",
            ProjectLink: "https://huzaifatodo.netlify.app/",
            desc: "A simple To-Do app built with ReactJS and Firebase.",
        },
        // Add more work items as needed
    ];

    return (
        <section id="work" className="section py-8 md:py-16">
            <div className="container mx-auto px-4">
                <h2 className="heading-2 mb-8 text-center md:text-left">My Portfolio Highlight</h2>
                <div className=" grid gap-5 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {workItems.map((work, key) => (
                        <ProjectCard
                            key={key}
                            imgSrc={work.imgSrc}
                            label={work.title}
                            ProjectLink={work.ProjectLink}
                            desc={work.desc}
                            classes="additional-classes" // If you have specific styles, use this
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
