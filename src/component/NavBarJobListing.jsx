import React, { useEffect, useRef, useState } from 'react'
import { ChevronDown, Menu, X, Search} from "lucide-react";
import { Link } from 'react-router-dom';


const NavBarJobListing = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    const onEsc = (e) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
       document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  useEffect(() => {
    if (openDropdown && dropdownRef.current) {
      const firstLink = dropdownRef.current.querySelector("a, button");
      firstLink?.focus();
    }
  }, [openDropdown]);

  const DropDown = ({ title, items = [] }) => {
    const id = title.replace(/\s+/g, "-").toLowerCase();
    return (
      <div className="relative" onKeyDown={(e) => e.key === "Escape" && setOpenDropdown(null)}>
        <button
          aria-haspopup="true"
          aria-expanded={openDropdown === id}
          onClick={(e) => {
            e.stopPropagation();
            setOpenDropdown((v) => (v === id ? null : id));
          }}
           className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        >
          {title}
          <ChevronDown size={16} className="text-gray-500" />
        </button>

        {openDropdown === id && (
          <div
            ref={dropdownRef}
            role="menu"
            aria-label={title}
            className="absolute mt-2 w-56 bg-white border border-gray-100 rounded-lg shadow-lg py-2 z-50"
          >
            <ul className="divide-y divide-gray-100">
              {items.map((it) => (
                <li key={it.path || it.label} role="none">
                  <Link
                    role="menuitem"
                    to={it.path}
                    onClick={() => setOpenDropdown(null)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600 focus:outline-none"
                  >
                    {it.label}
                  </Link>
                    </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };


  return (
    <header ref={navRef} className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: branding + desktop nav */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 bg-indigo-600 text-white rounded-md flex items-center justify-center font-semibold">HJ</div>
              <span className="text-lg font-semibold text-gray-800">HappyJobs</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
              <DropDown
                title="Jobs"
                items={[
                  { label: "Find Work", path: "/find-work" },
                  { label: "Saved Jobs", path: "/saved-jobs" },
                  { label: "Post a Job", path: "/post-job" },
                ]}
              />
              <Link to="/find-talent" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition">
                Find Talent
              </Link>  

                 <Link to="/community" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition">
                Community
              </Link>
              <DropDown
                title="Categories"
                items={[
                  { label: "Engineering", path: "/categories/engineering" },
                  { label: "Design", path: "/categories/design" },
                  { label: "Marketing", path: "/categories/marketing" },
                ]}
              />
            </nav>
          </div>

            {/* Center: search */}
          <div className="flex-1 px-4">
            <form className="hidden md:flex items-center bg-gray-50 border border-gray-100 rounded-lg overflow-hidden shadow-sm">
              <button type="submit" aria-label="Search" className="px-3 text-gray-500">
                <Search size={18} />
              </button>
              <input
                type="search"
                placeholder="Search jobs, companies, locations..."
                className="w-full px-3 py-2 text-sm bg-transparent focus:outline-none"
                aria-label="Search jobs"
              />
            </form>
          </div>

          
          {/* Right: actions */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/signin"
                className="px-3 py-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-md hover:bg-gray-50 transition"
              >
                Sign in
              </Link>

              <Link
                to="/signup"
                className="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition"
              >
                Create account
              </Link>
            </div>

              <Link
              to="/post-job"
              className="hidden md:inline-flex items-center px-3 py-2 text-sm font-medium text-indigo-600 border border-indigo-200 rounded-md hover:bg-indigo-50 transition"
            >
              Post a job
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label="Toggle menu"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

          {/* Mobile panel */}
        {mobileOpen && (
          <div className="md:hidden mt-3 pb-4">
            <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-4 space-y-3">
              <form className="flex items-center bg-gray-50 rounded-md overflow-hidden">
                <button type="submit" className="px-3 text-gray-500">
                  <Search size={16} />
                </button>
                <input type="search" placeholder="Search jobs..." className="w-full px-3 py-2 text-sm bg-transparent focus:outline-none" />
              </form>

              <div className="flex flex-col gap-2">
                <Link to="/find-work" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">Find Work</Link>
                <Link to="/saved-jobs" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">Saved Jobs</Link>
                <Link to="/find-talent" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">Find Talent</Link>
                <Link to="/community" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">Community</Link>
                <Link to="/post-job" className="px-3 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 text-center">Post a Job</Link>
                <div className="flex gap-2">
                  <Link to="/signin" className="flex-1 px-3 py-2 text-sm text-center border border-gray-200 rounded-md">Sign in</Link>
                  <Link to="/signup" className="flex-1 px-3 py-2 text-sm text-center bg-indigo-600 text-white rounded-md">Sign up</Link>
                </div>
              </div>
               </div>
          </div>
        )}
      </div>
    </header>

        
  )
}

export default NavBarJobListing