import React from 'react'
import { Link } from 'react-router-dom'

const MarketingJob = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-8">
        <header className="mb-4">
          <h1 className="text-2xl font-bold text-gray-900">Marketing jobs</h1>
          <p className="text-sm text-gray-600 mt-1">Growth, content, social, and performance marketing positions.</p>
        </header>

        <section className="space-y-4">
          <p className="text-sm text-gray-700">Discover marketing roles across startups and enterprises — filter by remote, seniority and location.</p>

          <div className="mt-6">
            <Link to="/find-work" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              Browse Marketing Jobs
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

export default MarketingJob