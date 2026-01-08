import React, { useEffect, useState } from 'react'
import JobCard from '../component/JobCard'


const JobsList = () => {
   const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1); // pagination state
  const [loading, setLoading] = useState(false);

  const FetchData = async () => {
    setLoading(true);


      const url = `https://jsearch.p.rapidapi.com/search?query=developer%20jobs%20in%20chicago&page=${page}&num_pages=1&country=us&date_posted=all`;

    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'd417747eeamshfd6e4877d15e9c8p103285jsn9b4232a34594',
        'x-rapidapi-host': 'jsearch.p.rapidapi.com'
      }
    };

        try {
      const response = await fetch(url, options);
      const result = await response.json();
      setJobs(result.data || []);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

   useEffect(() => {
    FetchData();
  }, [page]); // refetch when page changes

  const jobsData = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechNova",
      companyLogo: "https://via.placeholder.com/80",
      location: "Remote",
      type: "Full Time",
      category: "Engineering",
      skills: ["React", "Tailwind", "JavaScript"],
    },

     {
      id: 2,
      title: "UI/UX Designer",
      company: "PixelCraft",
      companyLogo: "https://via.placeholder.com/80",
      location: "Lagos",
      type: "Part Time",
      category: "Design",
      skills: ["Figma", "Prototyping", "Design Systems"],
    },

       {
        id: 3,
      title: "Digital Marketer",
      company: "BrandHive",
      companyLogo: "https://via.placeholder.com/80",
      location: "Abuja",
      type: "Full Time",
      category: "Marketing",
      skills: ["SEO", "Content Marketing", "Ads"],
    },
  ];

  
  const filteredJobs = jobsData.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = category === "All" || job.category === category;

    return matchesSearch && matchesCategory;
  });

  const displayedJobs = jobs.length === 0 ? filteredJobs : jobs;

  return (
    <div className="w-full py-12 px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* PAGE HEADER */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold break-words">Find Your Next Job</h1>
          <p className="text-gray-600 mt-2">
            Browse thousands of available job opportunities.
          </p>
        </div>

        {/* FILTERS */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
          <div className="flex items-center w-full md:w-1/2 bg-white border rounded-lg px-4 py-2 shadow-sm min-w-0">
            <svg
              className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <circle cx="11" cy="11" r="5" stroke="currentColor" strokeWidth="2" />
            </svg>
            <input
              type="text"
              placeholder="Search by job title or company..."
              className="flex-1 px-3 py-2 focus:outline-none min-w-0 w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full md:w-1/4 border px-4 py-2 rounded-lg shadow-sm focus:outline-none min-w-0"
          >
            <option>All</option>
            <option>Engineering</option>
            <option>Design</option>
            <option>Marketing</option>
          </select>
        </div>

        {/* JOB LISTINGS */}
        {loading ? (
          <p className="text-center text-gray-500">Loading jobs...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedJobs.length === 0 ? (
              <p className="text-center text-gray-600 col-span-full">No jobs found.</p>
            ) : (
              displayedJobs.map((job, index) => (
                <div key={job.id ?? index} className="min-w-0">
                  <JobCard job={job} />
                </div>
              ))
            )}
          </div>
        )}

        {/* PAGINATION */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          {/* PREV */}
          <button
            className={`px-4 py-2 border rounded-md ${
              page === 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"
            }`}
            onClick={() => page > 1 && setPage(page - 1)}
          >
            Prev
          </button>

          {/* CURRENT PAGE */}
          <button className="px-4 py-2 border rounded-md bg-indigo-600 text-white">
            {page}
          </button>

          {/* NEXT */}
          <button
            className="px-4 py-2 border rounded-md hover:bg-gray-100"
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default JobsList