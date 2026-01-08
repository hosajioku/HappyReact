import React from 'react'
import { Briefcase, Search, Users, Star } from "lucide-react";
import { Link } from 'react-router-dom';

const categories = [
  { title: "Engineering", icon: Briefcase, description: "Frontend, Backend, DevOps" },
  { title: "Design", icon: Star, description: "Product, UI/UX, Visual" },
  { title: "Marketing", icon: Users, description: "Growth, Content, Social" },
  { title: "Tech / IT", icon: Search, description: "Support, Sysadmin, IT Ops" },
];

const featuredJobs = [
  {
    id: 1,
    title: "Senior Frontend Engineer",
    company: "Acme Labs",
    location: "Remote",
    type: "Full time",
    salary: "$95k – $130k",
    tags: ["React", "TypeScript", "Remote"],
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Bright Studio",
    location: "New York, NY",
    type: "Full time",
    salary: "$80k – $110k",
    tags: ["Figma", "UX", "Portfolio"],
  },

    {
    id: 3,
    title: "Growth Marketing Lead",
    company: "ScaleUp",
    location: "London, UK",
    type: "Remote / Hybrid",
    salary: "$70k – $100k",
    tags: ["SEO", "Analytics", "Paid Ads"],
  },
];

const Stat = ({ value, label }) => (
  <div className="text-center ">
    <div className="text-2xl md:text-3xl font-semibold text-indigo-600">{value}</div>
    <div className="text-sm text-gray-500">{label}</div>
  </div>
);


const HomePageUI = () => {
  return (
     <div className="w-full text-gray-800">
      {/* HERO */}
      <section className="bg-black from-indigo-600 to-indigo-500 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Find the right job for your next chapter
            </h1>
            <p className="mt-4 text-lg opacity-95 max-w-2xl">
              Browse verified job listings from top companies — tailored roles, clear descriptions, and simple application flow.
            </p>

             <form
              role="search"
              className="mt-8 max-w-xl bg-white rounded-lg shadow-sm overflow-hidden flex"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Search jobs"
            >
              <div className="flex items-center px-4 text-gray-500">
                <Search size={18} />
              </div>
              <input
                aria-label="Search query"
                className="flex-1 px-4 py-3 text-sm focus:outline-none"
                placeholder="Search jobs, companies or locations..."
              />

                 <button
                type="submit"
                className="bg-indigo-600 text-white px-5 py-3 text-sm font-medium hover:bg-indigo-700 transition"
              >
                Search
              </button>
            </form>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                to="/post-job"
                className="inline-flex items-center gap-2 bg-white text-indigo-600 px-4 py-2 rounded-md font-medium shadow-sm hover:shadow-md"
              >
                Post a job
              </Link>

                <Link to="/find-work" className="text-sm text-white/90 hover:underline">
                Browse all jobs
              </Link>
            </div>
          </div>

        

          <div className="flex-1 hidden md:block">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="grid grid-cols-2 gap-4">
                <Stat value="12k+" label="Jobs posted" />
                <Stat value="6k+" label="Companies" />
              </div>
              <p className="mt-4 text-sm text-white/90">
                rusted by hiring teams and candidates worldwide — fast hiring, transparent process.
              </p>
            </div>
          </div>
        </div>
      </section>

        {/* CATEGORIES */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Popular categories</h2>
            <Link to="/categories" className="text-sm text-indigo-600 hover:underline">
              View all categories
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((c, i) => {
              const Icon = c.icon;
              return (
                <Link
                  key={i}
                  to={`/categories/${c.title.toLowerCase()}`}
                  className="bg-white hover:shadow-md transition rounded-lg p-5 flex flex-col items-start gap-3"
                >
                  <div className="w-12 h-12 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-medium">{c.title}</div>
                    <div className="text-xs text-gray-500">{c.description}</div>
                  </div>
                   </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED JOBS */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Featured jobs</h2>
            <Link to="/jobs" className="text-sm text-indigo-600 hover:underline">
              See all jobs
            </Link>
          </div>

             <div className="grid md:grid-cols-3 gap-6">
            {featuredJobs.map((job) => (
              <article
                key={job.id}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                      <div className="text-sm text-gray-500 mt-1">{job.company} • {job.location}</div>
                    </div>
                    <div className="text-sm text-indigo-600 font-medium">{job.type}</div>
                  </div>

                    <div className="mt-4 text-indigo-600 font-semibold">{job.salary}</div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((t) => (
                      <span key={t} className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                   <div className="mt-6 flex items-center justify-between">
                  <Link
                    to={`/job/${job.id}`}
                    className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 transition"
                  >
                    View
                  </Link>
                  <button
                    aria-label={`Save ${job.title}`}
                    className="text-sm text-gray-500 hover:text-indigo-600"
                    onClick={() => console.log("save", job.id)}
                  >
                    Save
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
         </section>

      {/* EMPLOYER CTA */}
      <section className="py-12 px-6 bg-indigo-600 text-white rounded-t-3xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">Hire great talent — faster</h3>
            <p className="mt-2 text-sm opacity-95 max-w-xl">
              Post jobs, screen candidates and manage interviews from a single dashboard.
            </p>
          </div>

            <div className="flex gap-4">
            <Link to="/post-job" className="inline-flex items-center px-5 py-3 bg-white text-indigo-600 rounded-md font-medium">
              Post a job
            </Link>
            <Link to="/signup" className="px-5 py-3 border border-white rounded-md text-white hover:bg-white/10">
              Create account
            </Link>
          </div>
        </div>
      </section>
    </div>

  
  )
}

export default HomePageUI