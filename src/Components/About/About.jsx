import BgImg from '../../assets/btn/2.png';
import CardImg from '../../assets/btn/cardbag2 (1).png';
import CardImg2 from '../../assets/btn/card3.png';
import CardImg3 from '../../assets/btn/card4.png';
import CardImg4 from '../../assets/btn/card54.png';
import CarldName from '../../assets/svg file/cardlogo1.svg';
import Cardsvg from '../../assets/svg file/cardlogo2.svg';
import Cardsvg3 from '../../assets/svg file/cardlogo3.svg';
import Cardsvg4 from '../../assets/svg file/cardlogo4svg.svg';
import bgCad from '../../assets/Card/bg-3.png'
import BgAry from '../../assets/svg file/btn1.svg';

const About = () => {
    return (
        <div
            className="bg-cover bg-center h-[600px] rounded-xl mt-[-350px]"
            style={{
                backgroundImage: `url(${BgImg})`,
            }}
        >
            <div className="h-full w-full flex items-center justify-center text-white backdrop-brightness-50 rounded-xl">
                <p className='text-3xl text-gray-500 mt-[-440px]'>We are a full-service studio creating transformative <span className='text-white'>digital<br /> experiences and solutions.</span> specializing in <span className='text-white'>websites and web</span><br /> applications.</p>
            </div>
            <div className='md:mx-[230px] '>
                <div className='mt-[-400px]'>
                    <div className='relative'>
                        <img className='w-[266px] h-[314px] object-cover rounded-lg ' src={CardImg} />
                        <div>
                            <h2 className='mt-[-170px] mx-6 text-white font-bold '  >All-In-One (AIO) <br />Service</h2>
                            <img className='mt-[-58px] mx-52' src={BgAry}/>
                            <p className=' text-white mx-6 mt-8'>Our AIO solution tailors to your<br /> unique vision, crafting a website<br /> that truly reflects...</p>
                        </div>
                    </div>
                </div>
                <div className='absolute mt-[-256px] mx-4'>
                    <div className='w-10 h-10 flex items-center justify-center'>
                        <img className='w-10 h-10' src={CarldName} />
                    </div>
                </div>
            </div>
            <div className='relative mt-[-198px] md:mx-[495px]'>
                <div>
                    <img className='w-[260px] h-[314px] ' src={CardImg2} />
                    <h2 className='mt-[-170px] mx-6 text-white font-bold'  >All-In-One (AIO) <br />Service</h2>
                    <img className='mt-[-58px] mx-52' src={BgAry}/>
                    <p className=' text-white mx-6 mt-8'>Our AIO solution tailors to your<br /> unique vision, crafting a website<br /> that truly reflects...</p>
                </div>
            </div>
            <div className='absolute mt-[-260px] px-[510px]'>
                <div className='w-10 h-10 flex items-center justify-center'>
                    <img className='w-10 h-10 object-cover' src={Cardsvg} />
                </div>
            </div>
            <div className=''>
                <div className='relative md:ml-[756px] mt-[-340px]'>
                    <img className='w-[260px] h-[314px] ' src={CardImg3} />
                    <h2 className='mt-[-170px] mx-6 text-white font-bold'  >All-In-One (AIO) <br />Service</h2>
                    <img className='mt-[-58px] mx-52' src={BgAry}/>
                    <p className=' text-white mx-6 mt-8'>Our AIO solution tailors to your<br /> unique vision, crafting a website<br /> that truly reflects...</p>
                </div>
                <div className='absolute mt-[-250px] ml-[772px]'>
                    <div className='w-10 h-10 flex items-center justify-center'>
                        <img className='w-10 h-10' src={Cardsvg3} />
                    </div>
                </div>
            </div>
            <div>
                <div className='relative md:ml-[1016px] mt-[-340px]'>
                    <img className='w-[260px] h-[314px] ' src={CardImg4} />
                    <h2 className='mt-[-170px] mx-6 text-white font-bold'  >All-In-One (AIO) <br />Service</h2>
                    <img className='mt-[-58px] mx-52' src={BgAry}/>
                    <p className=' text-white mx-6 mt-8'>Our AIO solution tailors to your<br /> unique vision, crafting a website<br /> that truly reflects...</p>
                </div>
                <div className='absolute mt-[-253px] ml-[1030px]'>
                    <div className='w-10 h-10 flex items-center justify-center'>
                        <img className='w-10 h-10' src={Cardsvg4} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
