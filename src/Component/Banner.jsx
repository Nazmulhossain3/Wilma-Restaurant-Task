import leftLaef from "../assets/Restarant/home-leaf-right.png";
import RightLeaf from "../assets/Restarant/image-from-rawpixel-id-23573832-png.png";

const Banner = () => {
  return (
    <div className="bg-[#191b1b]">
      <div className="grid lg:grid-cols-3 ">
        <div>
          <img className="lg:w-[300px] mt-10" src={leftLaef} alt="" />
        </div>
        <div className="mt-64 text-center text-white w-full">
          <h3 className="font-sans text-xl tracking-widest ">
            MORE FLAVOR FOR LESS
          </h3>
        </div>

        <div>
          <img className="lg:w-full " src={RightLeaf} alt="" />
        </div>
      </div>

      <h1 className=' text-center relative -top-96 text-white text-8xl font-semibold font-serif '>Good food and</h1>
      <h1 className=' text-center relative -top-96 text-white text-8xl font-semibold font-serif'> Great vibes</h1>
      
    </div>
  );
};

export default Banner;
