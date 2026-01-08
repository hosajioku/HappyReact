import React from 'react'


const groups = [
  {
    id: 1,
    name: "Frontend Developers",
    members: 1200,
    description: "Connect with frontend devs, share knowledge, and network.",
  },

  {
    id: 2,
    name: "UI/UX Designers",
    members: 900,
    description: "Discuss design trends, tools, and tips with fellow designers.",
  },

    {
    id: 3,
    name: "Digital Marketers",
    members: 750,
    description: "Share marketing strategies, campaigns, and ideas.",
  },
];

const CommunityPage = () => {

  return (
      <main className="w-full">
      {/* HERO SECTION */}
      <section className="bg-indigo-600 text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">Join the Community</h1>
          <p className="mt-4 text-lg opacity-90">
            Connect with like-minded professionals, discuss ideas, and grow together.
          </p>
        </div>
      </section>

       {/* FEATURED GROUPS */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Featured Groups</h2>
            <a href="#all-groups" className="text-sm text-indigo-600 hover:underline">
              View all groups
            </a>
          </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map((group) => (
              <article
                key={group.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md p-6 transition-colors cursor-default"
                aria-labelledby={`group-${group.id}-title`}
              >
                <h3 id={`group-${group.id}-title`} className="text-xl font-semibold text-gray-900">
                  {group.name}
                </h3>
                <p className="text-gray-600 mt-2">{group.description}</p>
                <p className="mt-4 text-sm text-indigo-600 font-semibold">{group.members.toLocaleString()} Members</p>
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                    aria-label={`Join ${group.name} group`}
                    onClick={() => {
                               /* placeholder: implement join action */
                      console.log("Join group", group.id);
                    }}
                  >
                    Join Group
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 px-6 bg-indigo-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold">Start Networking Today</h2>
          <p className="mt-3 opacity-90">Be part of a thriving professional community and boost your career.</p>
          <button
            type="button"
            className="mt-6 bg-white text-indigo-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
            onClick={() => {
                  /* placeholder: navigate to signup or groups listing */
              console.log("CTA: Join Now");
            }}
          >
            Join Now
          </button>
        </div>
      </section>
    </main>

  )
}

export default CommunityPage