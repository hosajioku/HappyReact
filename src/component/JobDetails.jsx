import React from 'react'
import { Link, useParams, } from "react-router-dom";
import { Briefcase, MapPin, Clock, DollarSign, Bookmark } from "lucide-react";

const JobDetails = () => { 
   const { id } = useParams();

  // Example job data (keep here until you wire up a backend)
  const jobsData = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechNova",
      location: "Remote",
      type: "Full Time",
      category: "Engineering",
      salary: "$40k - $60k",
      description: "We are looking for a talented Frontend Developer...",
      requirements: [
        "3+ years experience in Frontend Development",
        "Strong knowledge of React and JavaScript",
        "Experience with REST APIs",
        "Good understanding of UI/UX principles",
      ],
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "PixelCraft",
      location: "Lagos",
      type: "Part Time",
      category: "Design",
      salary: "$30k - $50k",
      description: "PixelCraft is looking for a creative UI/UX Designer...",
      requirements: [
        "2+ years experience in UI/UX Design",
        "Proficiency in Figma or Adobe XD",
        "Strong visual and communication skills",
        "Ability to work in a team",
      ],
    },
  ];

  const job = jobsData.find((j) => j.id === parseInt(id, 10));

  if (!job) {
    return (
      <div className="w-full py-12 px-6 text-center">
        <h2 className="text-2xl font-bold">Job not found</h2>
        <Link to="/" className="mt-4 inline-block text-indigo-600">
          Back to Home
        </Link>
      </div>
    );
  }
     
  return (
    <div className="w-full min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white shadow-md rounded-2xl p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>
              <p className="text-gray-500 mt-1">
                {job.company} • {job.type}
              </p>

              <div className="flex items-center gap-4 mt-3 text-gray-600">
                <span className="flex items-center gap-1">
                  <MapPin size={16} /> {job.location}
                </span>
                <span className="flex items-center gap-1">
                  <DollarSign size={16} /> {job.salary}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={16} /> Posted recently
                </span>
              </div>
            </div>

            <button className="mt-4 md:mt-0 px-4 py-2 rounded-lg border border-indigo-500 text-indigo-600 font-medium hover:bg-indigo-50 flex items-center gap-2">
              <Bookmark size={18} /> Save Job
            </button>
          </div>

          <div className="mt-6">
            <button className="w-full md:w-auto px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-semibold">
              Apply Now
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-3">Job Description</h2>
              <p className="text-gray-600 leading-relaxed">{job.description}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Requirements</h2>
              <ul className="space-y-2 text-gray-600">
                {job.requirements.map((req, idx) => (
                  <li key={idx}>• {req}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-lg font-bold text-gray-800 mb-3">Company Info</h2>
              <p className="text-gray-600">{job.company}</p>
              <p className="text-gray-500 text-sm mt-2">
                {job.company} is a leading company in {job.category}.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-lg font-bold text-gray-800 mb-3">Safety Tips</h2>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Don’t pay for job applications.</li>
                <li>• Verify the company before applying.</li>
                <li>• Avoid sharing personal passwords.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default JobDetails