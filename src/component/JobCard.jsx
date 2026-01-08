import React, { useState } from 'react'
import { MapPin, Briefcase, Clock } from "lucide-react";
import { Link } from 'react-router-dom';

const JobCard = ({job}) => {
  //  const {
  //   id,
  //   title = "Untitled role",
  //   company = "Unknown company",
  //   companyLogo,
  //   location = "Remote",
  //   category = "—",
  //   type = "—",
  //   skills = [],
  // } = job;

  const [imgError, setImgError] = useState(false);

  // const initials = (company || "")
  //   .split(" ")
  //   .map((s) => s[0])
  //   .slice(0, 2)
  //   .join("")
  //   .toUpperCase();

  return (
    <Link
      to={`/job/${job.id}`}
      aria-label={`View job ${job.job_title} at ${job.employer_name}`}
      className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-5 border border-gray-100"
    >
      <div className="flex items-center gap-4 mb-4">
        {job.employer_logo && !imgError ? (
             <img
            src={job.employer_logo}
            alt={`${job.employer_name} logo`}
            loading="lazy"
            className="w-20 h-20 object-cover rounded-lg border bg-gray-100"
            onError={(e) => {
              e.currentTarget.onerror = null;
              setImgError(true);
            }}
          />
        ) : (
          <div className="w-20 h-20 rounded-lg border bg-gray-100 flex items-center justify-center text-indigo-600 font-semibold">
            {"CP"}
          </div>
        )}

        <div className="min-w-0">
          <h2 className="text-lg font-semibold text-gray-900 truncate">{job.job_title}</h2>
          <p className="text-sm text-gray-500 truncate">{job.employer_name}</p>
        </div>
         </div>

      <div className="flex flex-col gap-2 text-sm text-gray-600">
        <p className="flex items-center gap-2">
          <MapPin size={16} /> <span className="truncate">{job?.job_country}</span>
        </p>

        <p className="flex items-center gap-2">
          <Briefcase size={16} /> <span className="truncate">{job?.job_is_remote?"Remote":"Fulltime"}</span>
        </p>

        <p className="flex items-center gap-2">
          {/* <Clock size={16} /> <span className="truncate">{type}</span> */}
        </p>
      </div>

      {/* <div className="flex flex-wrap gap-2 mt-4">
        {skills?.slice(0, 3).map((skill, index) => (
          <span key={index} className="bg-blue-50 text-blue-600 px-3 py-1 text-xs rounded-full">
            {skill}
          </span>
             ))}
      </div> */}
    </Link>
  )
}

export default JobCard