import redVelvet from "../assets/red-velvet.png";
import chocolate from "../assets/chocolate.png";
import basic from "../assets/basic-cookie.png";
import cheesCake from "../assets/cheese-cake.png";
import lotus from "../assets/lotus.png";
import marshmellow from "../assets/marshmellow.png";

const Flavors = () => {
  return (
    <div id="flavors" className="px-4 sm:px-8 md:px-0 py-10 overflow-hidden">
      {/* Title */}
      <div className="flex justify-center items-center my-10 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mr-4 text-[#755541]">
          OUR FLAVORS
        </h1>
        <span className="hidden md:block w-16 h-1 bg-amber-950"></span>
      </div>

      <div className="space-y-16">
        {/* 1. Basic Cookie */}
        <div
          data-aos="fade-right"
          className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 md:gap-0 mb-10"
        >
          <div className="flex items-center bg-[#755541] rounded-r-lg w-full md:w-[35%] md:h-[50] text-white relative p-10">
            <p className="w-full md:w-3/4 mx-auto md:mx-5 text-center md:text-left text-sm sm:text-base">
              Golden brown and chewy, loaded with gooey chocolate chips that melt in your mouth — a timeless favorite .
            </p>
            <img
              data-aos="fade-right"
              className="w-[120px] sm:w-36 md:w-36 h-[120px] sm:h-36 md:h-36 rounded-full object-cover shadow-md md:absolute md:right-[-70px] mt-5 md:mt-0 mx-auto"
              src={basic}
              alt=""
            />
          </div>

          <div
            data-aos="fade-left"
            className="flex items-center justify-center bg-[#755541] rounded-l-lg w-full md:w-[35%] md:h-[50] text-white relative p-10"
          >
            <img
              data-aos="fade-left"
              className="w-[120px] sm:w-36 md:w-36 h-[120px] sm:h-36 md:h-36 rounded-full object-cover shadow-md md:absolute md:left-[-70px] mt-5 md:mt-0 mx-auto"
              src={chocolate}
              alt=""
            />
            <p className="w-full md:w-3/4 mx-auto md:mx-5 text-center md:text-left text-sm sm:text-base">
              A simple yet irresistible chocolate cookie with a crisp edge and fudgy center — the true definition of comfort.
            </p>
          </div>
        </div>

        {/* 2. Red Velvet + Cheesecake */}
        <div
          data-aos="fade-right"
          className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 md:gap-0 mb-10"
        >
          <div className="flex items-center bg-[#755541] rounded-r-lg w-full md:w-[35%] md:h-[50] text-white relative p-10">
            <p className="w-full md:w-3/4 mx-auto md:mx-5 text-center md:text-left text-sm sm:text-base">
              A rich, velvety red cookie topped with smooth cream cheese frosting and a sprinkle of red velvet crumbs — a perfect mix of color and flavor.
            </p>
            <img
              data-aos="fade-right"
              className="w-[120px] sm:w-36 md:w-36 h-[120px] sm:h-36 md:h-36 rounded-full object-cover shadow-md md:absolute md:right-[-70px] mt-5 md:mt-0 mx-auto"
              src={redVelvet}
              alt=""
            />
          </div>

          <div
            data-aos="fade-left"
            className="flex items-center justify-center bg-[#755541] rounded-l-lg w-full md:w-[35%] md:h-[50] text-white relative p-10"
          >
            <img
              data-aos="fade-left"
              className="w-[120px] sm:w-36 md:w-36 h-[120px] sm:h-36 md:h-36 rounded-full object-cover shadow-md md:absolute md:left-[-70px] mt-5 md:mt-0 mx-auto"
              src={cheesCake}
              alt=""
            />
            <p className="w-full md:w-3/4 mx-auto md:mx-5 text-center md:text-left text-sm sm:text-base">
              Soft vanilla cookie filled with a swirl of creamy frosting and a heart of sweet strawberry jam — a fruity delight in every bite.
            </p>
          </div>
        </div>

        {/* 3. Lotus + Marshmallow */}
        <div
          data-aos="fade-right"
          className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 md:gap-0"
        >
           <div className="flex items-center bg-[#755541] rounded-r-lg w-full md:w-[35%] md:h-[50] text-white relative p-10">
            <p className="w-full md:w-3/4 mx-auto md:mx-5 text-center md:text-left text-sm sm:text-base">
              Caramelized, buttery, and lightly spiced, this Lotus-flavored cookie brings the signature Biscoff crunch and aroma everyone loves.
            </p>
            <img
              data-aos="fade-right"
              className="w-[120px] sm:w-36 md:w-36 h-[120px] sm:h-36 md:h-36 rounded-full object-cover shadow-md md:absolute md:right-[-70px] mt-5 md:mt-0 mx-auto"
              src={lotus}
              alt=""
            />
          </div>

          <div
            data-aos="fade-left"
            className="flex items-center justify-center bg-[#755541] rounded-l-lg w-full md:w-[35%] md:h-[50] text-white relative p-10"
          >
            <img
              data-aos="fade-left"
              className="w-[120px] sm:w-36 md:w-36 h-[120px] sm:h-36 md:h-36 rounded-full object-cover shadow-md md:absolute md:left-[-70px] mt-5 md:mt-0 mx-auto"
              src={marshmellow}
              alt=""
            />
            <p className="w-full md:w-3/4 mx-auto md:mx-5 text-center md:text-left text-sm sm:text-base">
              Soft and chewy with pockets of gooey marshmallow and a hint of vanilla — a melt-in-your-mouth experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flavors;
