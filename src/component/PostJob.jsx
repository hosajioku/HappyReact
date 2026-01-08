import React, { useState } from 'react'
import NavBarJobListing from './NavBarJobListing';
import { useNavigate } from 'react-router-dom'

const initialData = {
  title: "",
  company: "",
  location: "",
  type: "",
  category: "",
  salary: "",
  description: "",
  tags: [],
};

const PostJob = () => {
   const [formData, setFormData] = useState(initialData);
  const [tagInput, setTagInput] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate ()

  const validate = (data) => {
    const e = {};
    if (!data.title.trim()) e.title = "Job title is required";
    if (!data.company.trim()) e.company = "Company name is required";
    if (!data.location.trim()) e.location = "Location is required";
    if (!data.type) e.type = "Please select a job type";
    if (!data.category) e.category = "Please select a category";
    if (!data.description.trim() || data.description.length < 30)
      e.description = "Provide a description (min 30 characters)";
    return e;
  };

   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const addTag = () => {
    const tag = tagInput.trim();
    if (!tag) return;
    if (!formData.tags.includes(tag)) {
      setFormData((s) => ({ ...s, tags: [...s.tags, tag] }));
    }
    setTagInput("");
  };

  const removeTag = (t) => {
    setFormData((s) => ({ ...s, tags: s.tags.filter((x) => x !== t) }));
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    const eobj = validate(formData);
    setErrors(eobj);
    if (Object.keys(eobj).length) return;

    setSubmitting(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 700));
    
       const job = { ...formData, postedAt: new Date().toISOString() };

    setSubmitting(false);
    setSuccess({
      message: "Job posted successfully",
      job,
    });

    // reset form locally
    setFormData(initialData);
    setTagInput("");
    setErrors({});

      // navigate to homepage and pass posted job in location state (so Home can prefill or show message)
    setTimeout(() => {
      navigate('/', { state: { postedJob: job, message: 'Job posted successfully' } });
    }, 600);

    // hide success after a bit (optional)
    setTimeout(() => setSuccess(null), 5000);
  };


  return (
      <>

      <main className="min-h-screen bg-gray-50 py-12">
        <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 sm:p-10">
          <header className="mb-6">
            <h1 className="text-3xl font-semibold text-gray-900">Post a job</h1>
            <p className="mt-1 text-sm text-gray-600">
              Create a clear, compelling job post to attract the right talent.
                    </p>
          </header>

          {success && (
            <div className="mb-6 rounded-md border-l-4 border-green-500 bg-green-50 p-4">
              <p className="text-sm font-medium text-green-800">{success.message}</p>
            </div>

              )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Job title</label>
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. Senior Frontend Engineer"
                  className={`mt-1 block w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 ${
                    errors.title ? "border-red-300 focus:ring-red-200" : "border-gray-200 focus:ring-indigo-300"
                  }`}
                />
                {errors.title && <p className="mt-1 text-xs text-red-600">{errors.title}</p>}
              </div>

                 <div>
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company name"
                  className={`mt-1 block w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 ${
                    errors.company ? "border-red-300 focus:ring-red-200" : "border-gray-200 focus:ring-indigo-300"
                  }`}
                />
                {errors.company && <p className="mt-1 text-xs text-red-600">{errors.company}</p>}
              </div>

                <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Remote / City, Country"
                  className={`mt-1 block w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 ${
                    errors.location ? "border-red-300 focus:ring-red-200" : "border-gray-200 focus:ring-indigo-300"
                  }`}
                />
                {errors.location && <p className="mt-1 text-xs text-red-600">{errors.location}</p>}
              </div>

               <div>
                <label className="block text-sm font-medium text-gray-700">Job type</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 ${
                    errors.type ? "border-red-300 focus:ring-red-200" : "border-gray-200 focus:ring-indigo-300"
                  }`}
                >
                  <option value="">Select type</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
                {errors.type && <p className="mt-1 text-xs text-red-600">{errors.type}</p>}
              </div>
            </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 ${
                    errors.category ? "border-red-300 focus:ring-red-200" : "border-gray-200 focus:ring-indigo-300"
                  }`}
                >
                  <option value="">Select category</option>
                  <option>Software Development</option>
                  <option>Design</option>
                  <option>Marketing</option>
                  <option>Sales</option>
                  <option>HR</option>
                </select>
                {errors.category && <p className="mt-1 text-xs text-red-600">{errors.category}</p>}
              </div>

                <div>
                <label className="block text-sm font-medium text-gray-700">Salary (optional)</label>
                <input
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  placeholder="e.g. $60k - $80k"
                  className="mt-1 block w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 border-gray-200 focus:ring-indigo-300"
                />
                <p className="mt-1 text-xs text-gray-500">Provide salary range or leave empty to encourage more applicants.</p>
              </div>
            </div>

              <div>
              <label className="block text-sm font-medium text-gray-700">Job description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe responsibilities, qualifications, benefits..."
                rows={6}
                className={`mt-1 block w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 ${
                  errors.description ? "border-red-300 focus:ring-red-200" : "border-gray-200 focus:ring-indigo-300"
                }`}
              />
              <div className="flex justify-between mt-1 text-xs text-gray-500">
                <span>{formData.description.length} / 2000</span>
                {errors.description ? <span className="text-red-600">{errors.description}</span> : <span>Tip: include required skills and seniority level</span>}
              </div>
            </div>

              <div>
              <label className="block text-sm font-medium text-gray-700">Required skills / tags</label>
              <div className="mt-1 flex gap-2">
                <input
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                  placeholder="Press Enter to add"
                  className="flex-1 px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 border-gray-200 focus:ring-indigo-300"
                />
                <button type="button" onClick={addTag} className="px-4 py-2 bg-indigo-600 text-white rounded-md">Add</button>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {formData.tags.map((t) => (
                  <span key={t} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm">
                    {t}
                    <button type="button" onClick={() => removeTag(t)} className="text-indigo-500 hover:text-indigo-800">&times;</button>
                  </span>
                ))}
              </div>
            </div>

              <div className="flex items-center justify-between gap-4">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center px-6 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition disabled:opacity-60"
              >
                {submitting ? "Posting..." : "Post job"}
              </button>

              <button
                type="button"
                onClick={() => {
                  setFormData(initialData);
                  setTagInput("");
                  setErrors({});
                }}
                className="px-4 py-2 rounded-md border border-gray-200 text-sm text-gray-700 hover:bg-gray-50"
              >
                Reset
              </button>

                <button
                type="button"
                onClick={() => navigate('/', { state: { prefill: formData } })}
                className="px-4 py-2 rounded-md border border-transparent text-sm text-indigo-600 hover:bg-indigo-50"
              >
                Go home
              </button>
              
            </div>
          </form>
        </section>
       </main>
    </>
  )
}

export default PostJob