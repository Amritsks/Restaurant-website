import aboutusimg from '../assets/aboutbg.jpg';
import { Award, ShieldCheck } from "lucide-react";

function AboutUs() {
  return (
    <div className="relative min-h-screen flex justify-center pt-[90px] sm:pt-[100px] pb-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutusimg})` }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-10 max-w-4xl">
        {/* Story Section */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Our Story
        </h1>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8">
          Our journey began in the heart of the kitchen, where flavors come alive.
          We believe in serving dishes made with honesty, warmth, and a touch of home.
          Here, every plate tells a story meant to be shared. <br className="hidden sm:block" />
          We started with a simple love for food and a dream to share it with our community.
          Every recipe on our menu carries a story of tradition and passion.
          For us, dining is not just about meals—it’s about creating memories together.
        </p>

        {/* Core Values */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
          Our Core Values & Mission
        </h2>

        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-stretch gap-8 text-center">
          {/* Value 1 */}
          <div className="flex-1 p-4 sm:p-6 bg-black/40 rounded-xl hover:bg-black/50 transition">
            <div className="text-4xl mb-3">🌱</div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">
              Fresh Ingredients
            </h3>
            <p className="text-sm sm:text-base text-white leading-relaxed">
              We believe great food starts with the finest ingredients. Every dish is prepared
              with farm-fresh produce, hand-picked spices, and locally sourced essentials to ensure
              quality and flavor in every bite.
            </p>
          </div>

          {/* Value 2 */}
          <div className="flex-1 p-4 sm:p-6 bg-black/40 rounded-xl hover:bg-black/50 transition">
            <div className="text-4xl mb-3">🍲</div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">
              Authentic Recipes
            </h3>
            <p className="text-sm sm:text-base text-white leading-relaxed">
              Our recipes are crafted with love and tradition, preserving the authentic taste of
              heritage cuisines. Each plate is a celebration of flavors passed down through generations.
            </p>
          </div>

          {/* Value 3 */}
          <div className="flex-1 p-4 sm:p-6 bg-black/40 rounded-xl hover:bg-black/50 transition">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">
              Warm Hospitality
            </h3>
            <p className="text-sm sm:text-base text-white leading-relaxed">
              For us, food is more than just a meal—it’s an experience. From the moment you step in,
              our team is dedicated to creating a warm and welcoming atmosphere.
            </p>
          </div>
        </div>

        {/* Certifications Section */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-10 mb-4">
          Our Certifications & Achievements 🏆
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-white mb-8 max-w-2xl mx-auto">
          We take pride in maintaining the highest standards of quality, safety, and authenticity.
          From food safety certifications to culinary awards, our commitment is to serve you fresh,
          safe, and delicious meals every time you dine with us.
        </p>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {/* Certification 1 */}
          <div className="bg-black/40 p-6 rounded-xl hover:bg-black/60 transition">
            <ShieldCheck className="mx-auto h-12 w-12 text-green-500 mb-4" />
            <h3 className="font-semibold text-lg text-white">FSSAI Certified</h3>
            <p className="text-white text-sm sm:text-base mt-2">
              Approved by the Food Safety and Standards Authority of India for maintaining hygiene & quality.
            </p>
          </div>

          {/* Certification 2 */}
          <div className="bg-black/40 p-6 rounded-xl hover:bg-black/60 transition">
            <Award className="mx-auto h-12 w-12 text-yellow-400 mb-4" />
            <h3 className="font-semibold text-lg text-white">Culinary Excellence</h3>
            <p className="text-white text-sm sm:text-base mt-2">
              Our chefs have won awards at regional and international food festivals for authentic recipes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
