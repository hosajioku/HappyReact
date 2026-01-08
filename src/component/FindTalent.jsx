import React, { useState } from 'react'
import { Search } from "lucide-react";
import { Link } from 'react-router-dom';

const FindTalent = () => {
    const talentData = [
  {
    id: 1,
    name: "James Okoro",
    role: "Frontend Developer",
    location: "Remote",
    experience: "3 years",
    skills: ["React", "Tailwind", "JavaScript"],
    avatar: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Chiamaka Bello",
    role: "UI/UX Designer",
    location: "Lagos",
    experience: "2 years",
    skills: ["Figma", "Wireframing", "Prototyping"],
    avatar: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Daniel Musa",
    role: "Digital Marketer",
    location: "Abuja",
    experience: "4 years",
    skills: ["SEO", "Google Ads", "Content Strategy"],
    avatar: "https://via.placeholder.com/100",
  },
  {
    id: 4,
    name: "Aisha Ahmed",
    role: "Backend Developer",
    location: "Remote",
    experience: "5 years",
    skills: ["Node.js", "Express", "MongoDB"],
    avatar: "https://via.placeholder.com/100",
  },
];

 const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const filteredTalent = talentData.filter((talent) => {
    const matchesSearch =
      talent.name.toLowerCase().includes(search.toLowerCase()) ||
      talent.role.toLowerCase().includes(search.toLowerCase());
    const matchesLocation =
      locationFilter === "All" || talent.location === locationFilter;
    const matchesCategory =
      categoryFilter === "All" ||
      talent.skills.includes(categoryFilter);

    return matchesSearch && matchesLocation && matchesCategory;
  });

  return (
      <div className="w-full py-12 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Find Talent</h1>
          <p className="text-gray-600 mt-2">
            Browse skilled professionals and hire the perfect talent for your project.
          </p>
        </div>


        <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
          <div className="flex items-center w-full md:w-1/2 bg-white border rounded-lg px-4 py-2 shadow-sm">
            <svg className="w-5 h-5 text-gray-500 mr-2" viewBox="0 0 24 24" fill="none">
              <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <circle cx="11" cy="11" r="5" stroke="currentColor" strokeWidth="2" />
            </svg>
            <input
              type="text"
              placeholder="Search talent by name or role..."
              className="flex-1 px-3 py-2 focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="w-full md:w-1/4 border px-4 py-2 rounded-lg shadow-sm focus:outline-none"
          >
            <option>All</option>
            <option>Remote</option>
            <option>Lagos</option>
            <option>Abuja</option>
          </select>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full md:w-1/4 border px-4 py-2 rounded-lg shadow-sm focus:outline-none"
          >
            <option>All</option>
            <option>React</option>
            <option>Figma</option>
            <option>SEO</option>
            <option>Node.js</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTalent.length === 0 && (
            <p className="text-center text-gray-600 col-span-full">No matching talent found.</p>
          )}

          {filteredTalent.map((talent) => (
            <div key={talent.id} className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center">
              <img src={talent.avatar} alt={talent.name} className="w-20 h-20 rounded-full mb-4" />
              <h2 className="text-xl font-bold">{talent.name}</h2>
              <p className="text-gray-600">{talent.role}</p>
              <p className="text-sm text-gray-500 mt-1">{talent.location}</p>

              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {talent.skills.map((skill, index) => (
                  <span key={index} className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>

              <Link to={`/talent/${talent.id}`} className="mt-5 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                View Profile
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FindTalent