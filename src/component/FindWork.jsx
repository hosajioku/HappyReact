import React, { useMemo, useState } from 'react'
import JobCard from './JobCard'

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
    salary: "$70k - $95k",
  },

   {
    id: 2,
    title: "UI/UX Designer",
    company: "PixelCraft",
    companyLogo: "https://via.placeholder.com/80",
    location: "Lagos, Nigeria",
    type: "Part Time",
    category: "Design",
    skills: ["Figma", "Design Systems", "Prototyping"],
    salary: "$30/hr",
  },

  {
    id: 3,
    title: "Digital Marketer",
    company: "BrandHive",
    companyLogo: "https://via.placeholder.com/80",
    location: "Abuja, Nigeria",
    type: "Full Time",
    category: "Marketing",
    skills: ["SEO", "Social Media", "Google Ads"],
    salary: "$45k - $65k",
  },
  
    {
    id: 4,
    title: "Backend Developer",
    company: "CodeWorks",
    companyLogo: "https://via.placeholder.com/80",
    location: "Remote",
    type: "Full Time",
    category: "Engineering",
    skills: ["Node.js", "Express", "MongoDB"],
    salary: "$80k - $110k",
  },

    {
    id: 5,
    title: "Product Designer",
    company: "Bright Studio",
    companyLogo: "https://via.placeholder.com/80",
    location: "Remote",
    type: "Contract",
    category: "Design",
    skills: ["Figma", "UX Research", "Prototyping"],
    salary: "$50/hr",
  },

  {
    id: 6,
    title: "Growth Marketing Lead",
    company: "ScaleUp",
    companyLogo: "https://via.placeholder.com/80",
    location: "Lagos, Nigeria",
    type: "Hybrid",
    category: "Marketing",
    skills: ["Paid Ads", "Analytics", "SEO"],
    salary: "$60k - $90k",
  },
];

const categories = ["All", "Engineering", "Design", "Marketing"];
const types = ["All", "Full Time", "Part Time", "Contract", "Hybrid"];

const FindWork = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [jobType, setJobType] = useState("All");
  const [location, setLocation] = useState("");
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 6;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return jobsData.filter((job) => {
      if (category !== "All" && job.category !== category) return false;
      if (jobType !== "All" && job.type !== jobType) return false;
      if (location && !job.location.toLowerCase().includes(location.toLowerCase())) return false;
      if (!q) return true;
       return (
        job.title.toLowerCase().includes(q) ||
        job.company.toLowerCase().includes(q) ||
        (job.skills || []).some((s) => s.toLowerCase().includes(q))
      );
    });
  }, [query, category, jobType, location]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageJobs = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
 
  const resetFilters = () => {
    setQuery("");
    setCategory("All");
    setJobType("All");
    setLocation("");
    setPage(1);
  };

  return (
     <main className="min-h-screen bg-gray-50 py-12 px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 break-words">Find Work</h1>
          <p className="mt-2 text-gray-600 max-w-2xl">
            Browse curated job opportunities. Filter by category, type, location or search by title, company or skills.
          </p>
        </header>

        <section className="bg-white rounded-lg shadow p-4 md:p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="md:col-span-2 flex items-center gap-3 bg-gray-50 rounded px-3 py-2 border border-gray-100 min-w-0">
              <svg className="w-5 h-5 text-gray-400 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <circle cx="11" cy="11" r="5" stroke="currentColor" strokeWidth="2" />
              </svg>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by title, company or skill..."
                className="w-full bg-transparent outline-none text-sm min-w-0"
                aria-label="Search jobs"
              />
            </div>
               <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setPage(1);
              }}
              className="border rounded px-3 py-2 text-sm min-w-0 w-full md:w-auto"
              aria-label="Filter by category"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

              <select
              value={jobType}
              onChange={(e) => {
                setJobType(e.target.value);
                setPage(1);
              }}
              className="border rounded px-3 py-2 text-sm min-w-0 w-full md:w-auto"
              aria-label="Filter by job type"
            >
              {types.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            
             <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location (city or remote)"
              className="border rounded px-3 py-2 text-sm min-w-0 w-full"
              aria-label="Filter by location"
            />
          </div>

                    <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-gray-600">
              {filtered.length} {filtered.length === 1 ? "result" : "results"}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={resetFilters}
                className="text-sm text-gray-700 px-3 py-1 rounded hover:bg-gray-100"
              >
                Reset
              </button>
                </div>
          </div>
        </section>

         <section>
          {pageJobs.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <h3 className="text-lg font-semibold text-gray-900">No jobs found</h3>
              <p className="mt-2 text-sm text-gray-500">Try adjusting your filters or clearing the search.</p>
              <div className="mt-4">
                <button onClick={resetFilters} className="px-4 py-2 bg-indigo-600 text-white rounded-md">
                  Clear filters
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {pageJobs.map((job) => (
                  <div key={job.id} className="min-w-0">
                    <JobCard job={job} />
                  </div>
                ))}
              </div>

               <div className="mt-8 bg-white rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-sm text-gray-600">
                  Showing {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length}
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="px-3 py-1 border rounded disabled:opacity-50"
                  >
                    Prev
                  </button>

                   <div className="hidden sm:flex items-center gap-1">
                    {Array.from({ length: totalPages }).map((_, i) => {
                      const p = i + 1;
                        return (
                        <button
                          key={p}
                          onClick={() => setPage(p)}
                          className={`px-3 py-1 rounded ${p === page ? "bg-indigo-600 text-white" : "border"}`}
                        >
                          {p}
                        </button>
                      );
                    })}
                  </div>

                   <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="px-3 py-1 border rounded disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
                )}
        </section>
      </div>
    </main>

  )
}

export default FindWork