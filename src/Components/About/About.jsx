import BgImg from '../../assets/btn/2.png';
import CardImg from '../../assets/btn/cardbag2 (1).png';
import CardImg2 from '../../assets/btn/card3.png';
import CardImg3 from '../../assets/btn/card4.png';
import CardImg4 from '../../assets/btn/card54.png';
import CarldName from '../../assets/svg file/cardlogo1.svg';
import Cardsvg from '../../assets/svg file/cardlogo2.svg';
import Cardsvg3 from '../../assets/svg file/cardlogo3.svg';
import Cardsvg4 from '../../assets/svg file/cardlogo4svg.svg';
import bt1Bg from '../../assets/svg file/btn1.svg';

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
            <div className='relative mx-[240px] '>
                <div className='mt-[-400px]'>
                    <div className=''>
                        <img className='w-[266px] h-[314px] ' src={CardImg} />
                        <h2 className='mt-[-170px] mx-6 text-white font-bold '  >All-In-One (AIO) <br />Service</h2>
                        <img className='mt-[-62px] mx-48' src={bt1Bg}/>
                        <p className=' text-white mx-6 mt-8'>Our AIO solution tailors to your<br /> unique vision, crafting a website<br /> that truly reflects...</p>
                    </div>
                </div>
                <div className='absolute mt-[-255px] mx-4'>
                    <div className='w-10 h-10 flex items-center justify-center'>
                        <img className='w-10 h-10' src={CarldName} />
                    </div>
                </div>
            </div>
            <div className='relative mt-[-220px] mx-[505px]'>
                <div>
                    <img className='w-[260px] h-[314px] ' src={CardImg2} />
                    <h2 className='mt-[-170px] mx-6 text-white font-bold'  >All-In-One (AIO) <br />Service</h2>
                    <img className='mt-[-62px] mx-48' src={bt1Bg}/>
                    <p className=' text-white mx-6 mt-8'>Our AIO solution tailors to your<br /> unique vision, crafting a website<br /> that truly reflects...</p>
                </div>
            </div>
            <div className='absolute mt-[-255px] px-[516px]'>
                <div className='w-10 h-10 flex items-center justify-center'>
                    <img className='w-10 h-10' src={Cardsvg} />
                </div>
            </div>
            <div className='relative'>
                <div className='ml-[764px] mt-[-330px]'>
                    <img className='w-[260px] h-[314px] ' src={CardImg3} />
                    <h2 className='mt-[-170px] mx-6 text-white font-bold'  >All-In-One (AIO) <br />Service</h2>
                    <img className='mt-[-62px] mx-48' src={bt1Bg}/>
                    <p className=' text-white mx-6 mt-8'>Our AIO solution tailors to your<br /> unique vision, crafting a website<br /> that truly reflects...</p>
                </div>
                <div className='absolute mt-[-260px] ml-[784px]'>
                    <div className='w-10 h-10 flex items-center justify-center'>
                        <img className='w-10 h-10' src={Cardsvg3} />
                    </div>
                </div>
            </div>
            <div>
                <div className='relative ml-[1024px] mt-[-340px]'>
                    <img className='w-[260px] h-[314px] ' src={CardImg4} />
                    <h2 className='mt-[-170px] mx-6 text-white font-bold'  >All-In-One (AIO) <br />Service</h2>
                    <img className='mt-[-62px] mx-48' src={bt1Bg}/>
                    <p className=' text-white mx-6 mt-8'>Our AIO solution tailors to your<br /> unique vision, crafting a website<br /> that truly reflects...</p>
                </div>
                <div className='absolute mt-[-257px] ml-[1037px]'>
                    <div className='w-10 h-10 flex items-center justify-center'>
                        <img className='w-10 h-10' src={Cardsvg4} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
