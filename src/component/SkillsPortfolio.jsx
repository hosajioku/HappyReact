import React from 'react'

const skills = [
{ name: 'React', level: '90%' },
{ name: 'Tailwind CSS', level: '85%' },
{ name: 'JavaScript', level: '95%' },
{ name: 'HTML & CSS', level: '95%' },
{ name: 'Node.js', level: '70%' },
];

const SkillsPortfolio = () => {
  return (
    <section id="skills" className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20">
<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">Skills</h2>


<div className="w-full max-w-4xl space-y-6">
{skills.map((skill, index) => (
<div key={index} className="flex flex-col">
<div className="flex justify-between mb-1">
<span className="font-medium text-gray-700">{skill.name}</span>
<span className="text-gray-600">{skill.level}</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-4">
<div className="bg-sky-600 h-4 rounded-full transition-all duration-1000" style={{ width: skill.level }}></div>
</div>
</div>
))}
</div>
</section>
  )
}

export default SkillsPortfolio