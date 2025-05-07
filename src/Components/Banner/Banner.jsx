import banner from '../../assets/btn/banner322.png'
import Fixmyphone1 from '../../assets/svg file/FixMyPhone1.svg'
import verdant from '../../assets/svg file/Verdant.svg'
import duet from '../../assets/svg file/duet.svg'
import apex from '../../assets/svg file/apex.svg'
import lindholms from '../../assets/svg file/Lindholms.svg'

const Banner = () => {
    return (
        <div className="hero min-h-[602px] mt-[-116px] bg-[#0a0a0b]">
            <img className='w-[1560px] h-[600px]' src={banner} />
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="mt-[50px]">
                    <p className=" text-white text-6xl">
                        We Shape Your Ideas Into <br />
                        Awesome Digital<br /> Experience
                    </p>
                    <p className='text-white mt-6'>Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem.</p>
                    <button className="w-[231px] py-3 rounded-full bg-[#52a7f6] mt-10 text-white">Book a call with us</button>
                </div>
            </div>
            <div className='grid grid-cols-5 mt-[480px] gap-20'>
                <img src={Fixmyphone1} />
                <img src={verdant} />
                <img src={duet} />
                <img src={apex} />
                <img src={lindholms} />
            </div>
        </div>
    );
};

export default Banner;