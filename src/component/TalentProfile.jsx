import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { User, Briefcase, MapPin, Star, ArrowLeft } from "lucide-react";


const sampleData = {
  "1": {
    name: "John Doe",
    profession: "Graphic Designer",
    location: "Lagos, Nigeria",
    rating: 4.8,
    bio: "Creative graphic designer with 4+ years experience in branding, UI/UX and social media design. Strong visual sense and user-centred approach.",
    skills: ["Photoshop", "Illustrator", "Figma", "Branding"],
    portfolio: [
      "https://via.placeholder.com/600x400?text=Portfolio+1",
      "https://via.placeholder.com/600x400?text=Portfolio+2",
      "https://via.placeholder.com/600x400?text=Portfolio+3",
    ],

      },
  "2": {
    name: "Jane Smith",
    profession: "Frontend Engineer",
    location: "Remote",
    rating: 4.6,
    bio: "Frontend engineer specialising in React and performance-focused interfaces. Experienced with TypeScript and modern testing tools.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Jest"],
    portfolio: [
      "https://via.placeholder.com/600x400?text=Project+1",
      "https://via.placeholder.com/600x400?text=Project+2",
    ],
  },
};

const TalentProfile = () => {
      const { id } = useParams();
  const talent = id ? sampleData[id] : null;

  if (!talent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="max-w-lg w-full bg-white rounded-lg shadow-md p-6 text-center">
          <p className="text-lg font-semibold text-gray-700 mb-4">Talent profile not found.</p>
          <p className="text-sm text-gray-500 mb-6">The profile you're looking for doesn't exist or has been removed.</p>
          <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md">
            <ArrowLeft size={16} /> Back to home
          </Link>
        </div>
      </div>
    );
  }


  return (
      <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-md p-6 md:flex md:items-center md:gap-6">
          <div className="flex-shrink-0">
            <div className="w-28 h-28 md:w-32 md:h-32 bg-gray-100 rounded-full flex items-center justify-center text-indigo-600">
              <User size={48} />
            </div>
          </div>

             <div className="mt-4 md:mt-0 flex-1">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{talent.name}</h1>
                <p className="text-sm text-gray-600 mt-1 flex items-center gap-3">
                  <Briefcase size={14} /> {talent.profession}
                  <span className="mx-2 text-gray-300">•</span>
                  <MapPin size={14} /> {talent.location}
                </p>
              </div>

              <div className="text-right">
                <div className="inline-flex items-center gap-2 bg-yellow-50 px-3 py-1 rounded-full">
                  <Star size={14} className="text-yellow-600" />
                  <span className="text-sm font-semibold text-yellow-700">{talent.rating}</span>
                  <span className="text-xs text-gray-500">/ 5</span>
                </div>
                <div className="mt-2">
                  <Link to="/contact" className="text-sm px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Contact</Link>
                </div>

                   </div>
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-800">About</h2>
              <p className="mt-2 text-gray-600 leading-relaxed">{talent.bio}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <section className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {talent.skills.map((s, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm">
                  {s}
                </span>
              ))}
            </div>
          </section>

              <section className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Portfolio</h3>
            <div className="grid grid-cols-2 gap-3">
              {talent.portfolio.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${talent.name} portfolio ${i + 1}`}
                  className="w-full h-36 object-cover rounded-md"
                  loading="lazy"
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>

   
  )
}

export default TalentProfile