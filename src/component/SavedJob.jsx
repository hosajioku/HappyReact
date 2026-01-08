import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Bookmark, Trash2, ExternalLink } from "lucide-react";


const STORAGE_KEY = "savedJobs";

/**
 * SavedJob page
 * - Loads saved jobs from localStorage (STORAGE_KEY)
 * - Allows removing individual saved jobs and clearing all
 * - Shows an empty state with CTA
 */

const SavedJob = () => {
     const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      setJobs(Array.isArray(parsed) ? parsed : []);
    } catch (err) {
      console.error("Failed to load saved jobs:", err);
      setJobs([]);
    } finally {
      setLoading(false);
    }
  }, []);

    const persist = (next) => {
    setJobs(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch (err) {
      console.error("Failed to save saved jobs:", err);
    }
  };

  const removeJob = (id) => {
    const next = jobs.filter((j) => j.id !== id);
    persist(next);
  };

    const clearAll = () => {
    if (!jobs.length) return;
    if (confirm("Remove all saved jobs?")) {
      persist([]);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
        <div className="text-gray-600">Loading saved jobs…</div>
      </main>
    );
  }

  if (!jobs.length) {


  
      return (
      <main className="min-h-screen p-6 bg-gray-50 flex items-center justify-center">
        <div className="max-w-lg w-full bg-white rounded-2xl shadow-md p-8 text-center">
          <div className="mx-auto w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-4">
            <Bookmark size={20} />
          </div>
          <h1 className="text-xl font-semibold text-gray-900">No saved jobs yet</h1>
          <p className="mt-2 text-sm text-gray-500">
            Save interesting jobs to review them later. Browse listings and tap the save icon.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link
              to="/find-work"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            >
              Browse jobs
            </Link>
            <Link
              to="/"
              className="px-4 py-2 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50 transition"
            >
              Home
               </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center">
              <Bookmark size={20} />
            </div>
               <div>
              <h2 className="text-2xl font-semibold text-gray-900">Saved jobs</h2>
              <p className="text-sm text-gray-500">{jobs.length} job{jobs.length > 1 ? "s" : ""} saved</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={clearAll}
              className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-md text-sm text-red-600 hover:bg-red-50 transition"
            >
              <Trash2 size={16} /> Clear all
            </button>
            <Link
              to="/find-work"
              className="px-3 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 transition"
            >
              Browse jobs
            </Link>
               </div>
        </header>

        <section className="grid gap-4">
          {jobs.map((job) => {
            const {
              id,
              title = "Untitled role",
              company = "Unknown company",
              companyLogo,
              location = "Remote",
              salary,
              tags = [],
            } = job;

            const initials = (company || "")
              .split(" ")
              .map((s) => s[0])
              .slice(0, 2)
              .join("")
              .toUpperCase();

                return (
              <article
                key={id}
                className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between gap-4 border border-gray-100"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                    {companyLogo ? (
                      <img src={companyLogo} alt={`${company} logo`} className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-indigo-600 font-semibold">{initials || "CP"}</div>
                    )}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 truncate">{title}</h3>
                    <p className="text-sm text-gray-500 truncate">
                      {company} • {location} {salary ? `• ${salary}` : ""}
                    </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                      {tags.slice(0, 4).map((t, i) => (
                        <span key={i} className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    to={id ? `/job/${id}` : "#"}
                    className="inline-flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-md text-sm text-gray-700 hover:bg-gray-50 transition"
                    aria-label={`View ${title}`}
                  >
                    <ExternalLink size={16} /> View
                  </Link>

                                    <button
                    type="button"
                    onClick={() => removeJob(id)}
                    className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-md text-sm text-red-600 hover:bg-red-50 transition"
                    aria-label={`Remove saved job ${title}`}
                  >
                    <Trash2 size={16} /> Remove
                  </button>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  )
}

export default SavedJob