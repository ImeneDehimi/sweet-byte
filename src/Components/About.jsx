import image from "../assets/hero-image.png"

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-[#FFF9F5] text-[#5A3E2B] py-20 px-6 md:px-20 overflow-hidden"
    >
      {/* Content */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10"
      >
        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={image}// replace with your own image
            alt="About our cookies"
            className="w-[300px] h-[300px] object-cover rounded-full shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-5xl font-bold mb-6">ABOUT US</h2>
          <p className="text-lg leading-relaxed mb-4">
            At <span className="font-semibold text-[#755541]">Dear Ones Cookies</span>, 
            we believe every cookie should tell a story — made with love, passion, 
            and the finest ingredients. Each bite brings warmth, nostalgia, 
            and a moment of pure joy.
          </p>
          <p className="text-lg leading-relaxed">
            What started as a small kitchen experiment turned into a 
            full-fledged passion project. Today, we bake fresh cookies 
            daily with premium butter, Belgian chocolate, and a sprinkle 
            of creativity to craft flavors that melt hearts.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
