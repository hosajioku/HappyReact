import React from 'react'

const projects = [
{
title: 'Project One',
description: 'A brief description of project one.',
link: '#',
},

{
title: 'Project Two',
description: 'A brief description of project two.',
link: '#',
},

{
title: 'Project Three',
description: 'A brief description of project three.',
link: '#',
},

{
title: 'Project Four',
description: 'A brief description of project four.',
link: '#',
},
];

const ProjectsPortfolio = () => {
  return (
    <section id="projects" className="min-h-screen bg-sky-50 flex flex-col items-center justify-center px-6 py-20">
<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">Projects</h2>


<div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
{projects.map((project, index) => (
<div
key={index}
className="bg-white shadow-2xl rounded-xl p-6 flex flex-col transition-transform transform hover:-translate-y-2 hover:scale-105"
>
<h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
<p className="text-gray-600 mb-4">{project.description}</p>
<a
href={project.link}
className="mt-auto text-sky-600 font-semibold hover:underline"
>
View Project
</a>
</div>
))}
</div>
</section>
  )
}

export default ProjectsPortfolio