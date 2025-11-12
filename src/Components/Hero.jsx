import image from "./../assets/home.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center text-[#755541] px-6 md:px-16 py-10 "
    >
      {/* LEFT TEXT SECTION */}
      <div className="text-center md:text-left md:w-1/2 mt-10 md:mt-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
          Baked with Love, Every Time 🍪
        </h2>
        <p className="text-base sm:text-lg mb-6">
          Delicious homemade cookies for every occasion
        </p>
        <a href="#flavors">
          <button className="bg-[#755541] px-6 py-3 rounded-full hover:bg-[#4a3426] text-white transition duration-300">
            Explore Our Cookies
          </button>
        </a>
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div className="flex justify-center md:justify-end md:w-1/2">
        <img
          className="w-[250px] sm:w-[300px] md:w-[450px] rounded-3xl shadow-lg object-cover"
          src={image}
          alt="Cookies display"
        />
      </div>
    </section>
  );
};

export default Hero;
