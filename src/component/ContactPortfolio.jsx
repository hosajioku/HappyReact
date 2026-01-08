import React from 'react'

const ContactPortfolio = () => {
  return (
    <section id="contact" className="min-h-screen bg-sky-50 flex items-center justify-center px-6 py-20">
<div className="w-full max-w-3xl bg-white shadow-2xl rounded-xl p-8">
<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Contact Me</h2>


<form className="flex flex-col gap-6">
<input
type="text"
placeholder="Your Name"
className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-sky-400"
/>
<input
type="email"
placeholder="Your Email"
className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-sky-400"
/>
<textarea
placeholder="Your Message"
rows={6}
className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-sky-400"
></textarea>
<button
type="submit"
className="bg-sky-600 text-white py-4 rounded-xl shadow hover:shadow-lg transition-all font-semibold"
>
Send Message
</button>
</form>
</div>
</section>
  )
}

export default ContactPortfolio