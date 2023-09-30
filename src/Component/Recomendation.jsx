import starter from "../assets/Restarant/stater.png";
import Main from "../assets/Restarant/main.png";
import salad from "../assets/Restarant/salad.png";
import seaFood from "../assets/Restarant/seaFood.png";
const Recomendation = () => {
  return (
    <div className="bg-[#191b1b]">
      {/* here Food Recommendation Info */}
      <div className="relative -top-80 text-center">
        <h2 className=" text-white text-6xl font-extrabold font-serif">
          Our Chef <br /> Recommend
        </h2>
        <h4 className="mt-4 text-white font-sans tracking-wider">
          Exercitation photo booth stumptown tote bag Banksy, elit small batch <br />
          freegan sed. Craft beer elit seitan exercitation
        </h4>
      </div>

     
     <div className="relative -top-64 px-12 ">

     <div className="text-white grid lg:grid-cols-4 border-2 border-[#CA9C5E]  lg:w-full p-10  ">
      
      <div>
        <img src={starter} alt="" />
        <h3 className="text-[#CA9C5E] text-xl ml-10 mt-2 mb-2 font-sans font-semibold">Starters</h3>
        <h4>Baked fruit & spiced vanilla</h4>
      </div>
   
      <div>
        <img src={Main} alt="" />
        <h3 className="text-[#CA9C5E] text-xl ml-10 mt-2 mb-2 font-sans font-semibold">Main Course</h3>
        <h4>Food with a New Passion</h4>
      </div>
   
      <div>
        <img src={salad} alt="" />
        <h3 className="text-[#CA9C5E] text-xl ml-10 mt-2 mb-2 font-sans font-semibold">Salad</h3>
        <h4>Taste the Best that Surprise you</h4>
      </div>
   
      <div>
        <img src={seaFood} alt="" />
        <h3 className="text-[#CA9C5E] text-xl ml-10 mt-2 mb-2 font-sans font-semibold">Sea Food</h3>
        <h4>Excellence taste in Every Bite</h4>
      </div>
   
   
   
   
    </div>

     </div>
    </div>
  );
};

export default Recomendation;
