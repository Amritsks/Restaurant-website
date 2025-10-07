
import aboutusimg from '../assets/aboutbg.jpg';
import { Award, ShieldCheck, Star } from "lucide-react";

function AboutUs(){
    return(
  <div className="relative min-h-screen flex  justify-center pt-[100px]">
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${aboutusimg})` }} > </div>
       <div className="absolute inset-0 bg-black opacity-50"></div> {/* overlay */}
  
       <div className="relative z-10 text-center text-white px-8 max-w-3xl">
         <h1 className="text-4xl font-bold mb-4">Our Story</h1>
         <p className="text-lg leading-relaxed">
           Our journey began in the heart of the kitchen, where flavors come alive.
           We believe in serving dishes made with honesty, warmth, and a touch of home.
           Here, every plate tells a story meant to be shared.<br/>
           We started with a simple love for food and a dream to share it with our community.
           Every recipe on our menu carries a story of tradition and passion.
           For us, dining is not just about meals—it’s about creating memories together.
         </p>

         <h2 className="text-4xl font-bold text-white m-6">
          Our Core Values & Mission
        </h2>
        <div className="">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-2xl font-semibold mb-3">Fresh Ingredients</h3>
            <p className="text-white">
              We believe great food starts with the finest ingredients. 
              Every dish is prepared with farm-fresh produce, hand-picked spices, 
              and locally sourced essentials to ensure quality and flavor in every bite.
            </p>
          </div>
          <div className=" p-2 ">
            <div className="text-4xl mb-4">🍲</div>
            <h3 className="text-2xl font-semibold mb-3">Authentic Recipes</h3>
            <p className="text-white">
              Our recipes are crafted with love and tradition, preserving 
              the authentic taste of heritage cuisines. Each plate is a 
              celebration of flavors passed down through generations.
            </p>
          </div>
          <div className="p-2">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-2xl font-semibold mb-3">Warm Hospitality</h3>
            <p className="text-white">
              For us, food is more than just a meal—it’s an experience. 
              From the moment you step in, our team is dedicated to 
              creating a warm and welcoming atmosphere.
            </p>
          </div>

          <h2 className="text-3xl font-bold textwhite m-6">
          Our Certifications & Achievements 🏆
        </h2>
        <p className="text-white mb-2 max-w-2xl mx-auto">
          We take pride in maintaining the highest standards of quality, safety,
          and authenticity. From food safety certifications to culinary awards,
          our commitment is to serve you fresh, safe, and delicious meals every
          time you dine with us.
        </p>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Certification 1 */}
          <div className=" p-6">
            <ShieldCheck className="mx-auto h-12 w-12 text-green-600 mb-4" />
            <h3 className="font-semibold text-lg text-white">
              FSSAI Certified
            </h3>
            <p className="text-white text-sm mt-2">
              Approved by the Food Safety and Standards Authority of India for
              maintaining hygiene & quality.
            </p>
          </div>

          {/* Certification 2 */}
          <div className="p-6">
            <Award className="mx-auto h-12 w-12 text-yellow-500 mb-4" />
            <h3 className="font-semibold text-lg text-white">
              Culinary Excellence
            </h3>
            <p className="text-white text-sm mt-2">
              Our chefs have won awards at regional and international food
              festivals for authentic recipes.
            </p>
          </div>
          </div>

        </div>
  
  </div>

  );
}

export default AboutUs;