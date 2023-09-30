import menuPic from "../assets/Restarant/image-from-rawpixel-id-2822722-png-874x1024.png";
import menuLeaf from "../assets/Restarant/image-from-rawpixel-id-2353079-png-785x1024.png";
import Recomendation from "./Recomendation";

const BestItem = () => {
  return (
    <div className="bg-[#191b1b] lg:relative lg:-top-72">
      <div className=" px-96">
   
   <div className="">
     <img className=" " src={menuLeaf} alt="" />
   </div>

   <div className="lg:relative lg:-top-[550px] lg:left-8">
     <img className="lg:w-[400px]" src={menuPic} alt="" />
   </div>
   
 </div>
 <Recomendation></Recomendation>
    </div>
  );
};

export default BestItem;
