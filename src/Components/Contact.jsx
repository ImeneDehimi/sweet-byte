const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-[#FFF9F5] text-[#5A3E2B] py-20 px-6 md:px-20 overflow-hidden"
    >

      {/* Content */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-5xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg mb-10 text-[#755541]/90">
          Have a question, craving, or custom order in mind?  
          We’d love to hear from you! Fill out the form below or reach out directly.
        </p>

        {/* Contact form */}
        <form className="flex flex-col gap-6 bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="flex-1 border border-[#d1bfa8] rounded-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-[#755541]"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 border border-[#d1bfa8] rounded-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-[#755541]"
              required
            />
          </div>

          <textarea
            placeholder="Your Message"
            rows="5"
            className="border border-[#d1bfa8] rounded-2xl py-3 px-5 resize-none focus:outline-none focus:ring-2 focus:ring-[#755541]"
            required
          ></textarea>

          <button
            type="submit"
            className="self-center bg-[#755541] text-white px-8 py-3 rounded-full hover:bg-[#4a3426] transition cursor-pointer"
          >
            Send Message
          </button>
        </form>

        {/* Contact details */}
        <div className="mt-10 text-[#755541]/80">
          <p>Email: <span className="font-medium text-[#755541]">sweetbitecookies@gmail.com</span></p>
          <p>Phone: <span className="font-medium text-[#755541]">+213 555 123 456</span></p>
          <p>Location: Algiers, Algeria</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
