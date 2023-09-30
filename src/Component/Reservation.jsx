import divideLeafe from '../assets/Restarant/divider.png'
import SideLeaf from '../assets/Restarant/sideLeaf.png'
import follow from '../assets/Restarant/follow.png'
import img1 from '../assets/Restarant/img1.jpg'
import img2 from '../assets/Restarant/img2.jpg'
import img3 from '../assets/Restarant/img3.jpg'
import img4 from '../assets/Restarant/img4.jpg'
import img5 from '../assets/Restarant/img5.jpg'
import img6 from '../assets/Restarant/img6.jpg'
const Reservation = () => {
    return (
        <div>
            
            <div  className='lg:flex justify-between'>
            <img className='lg:w-[470px] h-16' src={divideLeafe} alt="" />
            <img className='relative -top-72' src={SideLeaf} alt="" />
            
            </div>

        {/* welcome message */}
              
            <div className='flex justify-center items-center gap-3 font-sans relative -top-20'>
                <img className='w-24 h-4' src={follow} alt="" />
               <div className='flex items-center gap-3'>
               <h2 className='text-white text-6xl font-bold'>@Wilma</h2>
                <img className='w-24 h-4' src={follow} alt="" />

               </div>
         </div>
      
      {/* here Wilma Picture  */}


        <div className='grid lg:grid-cols-3 gap-4 px-12'>
        <img className='lg:h-72 w-full hover:shadow-xl transform hover:scale-110 transition duration-700' src={img1} alt="" />
        <img className='lg:h-72 w-full transform hover:scale-110 transition duration-700' src={img2} alt="" />
        <img className='lg:h-72 w-full transform hover:scale-110 transition duration-700' src={img3} alt="" />
        <img className='lg:h-72 w-full transform hover:scale-110 transition duration-700' src={img4} alt="" />
        <img className='lg:h-72 w-full transform hover:scale-110 transition duration-700' src={img5} alt="" />
        <img  className='lg:h-72 w-full transform hover:scale-110 transition duration-700' src={img6} alt="" />




        </div>


      
        </div>
    );
};

export default Reservation;