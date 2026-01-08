import React from 'react'
import { Link } from 'react-router-dom'

const EngineeringJob = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-8">
        <header className="mb-4">
          <h1 className="text-2xl font-bold text-gray-900">Engineering jobs</h1>
          <p className="text-sm text-gray-600 mt-1">Frontend, Backend, DevOps and more — curated engineering roles.</p>
        </header>

        <section className="space-y-4">
          <p className="text-sm text-gray-700">Browse open engineering positions from top companies. Use filters to narrow by experience, remote, or salary.</p>

          <div className="mt-6">
            <Link to="/find-work" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              Browse Engineering Jobs
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

export default EngineeringJob