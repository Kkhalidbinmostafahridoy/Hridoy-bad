import MobileCard from '../../assets/Card/1.png';
import blogCard from '../../assets/Card/2.png';
import statisticCard from '../../assets/Card/3.png';
import bgWork3 from '../../assets/Card/bg-3.png';
import bg123 from '../../assets/Card/bg-work-.png';
import card1 from '../../assets/Card/4.png'
import card2 from '../../assets/Card/5.png'
import card3 from '../../assets/Card/6.png'
import card4 from '../../assets/Card/7.png'
import card5 from '../../assets/Card/8.png'
import btncard from '../../assets/svg file/btn1.svg'
import btnAry from '../../assets/svg file/btn1.svg'

const Work = () => {
    return (
        <div
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#111517] bg-cover bg-center bg-no-repeat w-full min-h-screen min-h- p-6'
            style={{
                backgroundImage: `url(${bg123})`,
            }}
        >
            <div className='w-[750px] h-[100px]'>
                <img className='ml-[370px]' src={bgWork3} alt="" />
            </div>
            <div>
                <h2 className='text-4xl font-bold ml-12 mt-[50px]'>Our Most Recent Works</h2>
            </div>
            <div className='mt-[100px] ml-[-353px]'>
                <p>Lorem ipsum dolor sit amet<br /> <span className='ml-[-23px]'>consectetur. Eget at at nunc lorem.</span></p>
            </div>
            <div className='flex w-[1000px] h-[400px] ml-[240px] gap-[34px] mt-12 bg-[#0a0a0a]'>
                <div className='w-1/2 h-full'>
                    <div className="card card-compact  bg-[#0a0a0a] shadow-xl">
                        <figure><img className='w-full h-full object-cover' src={card1} alt="Shoes" /></figure>
                        <div className="card-body flex mt-[-10px]">
                            <div className='mx-4'>
                                <h2 className="card-title bg">Alcohol Tracker</h2>
                                <p>All-In-One (AIO) Service</p>
                            </div>
                            <div className="card-actions justify-end mt-[-48px] mx-[80px]">
                                <button className="rounded-3xl px-6 py-2 bg-[#181e22] text-white">Open</button>
                            </div>
                        </div>
                        <div>
                            <img className='mt-[-46px] mx-[360px] w-14 h-6' src={btnAry} />
                        </div>
                    </div>
                </div>
                <div className='w-1/2 h-full'>
                    <div className="card card-compact  bg-[#0a0a0a] shadow-xl">
                        <figure><img className='w-full h-full object-cover' src={card2} alt="Shoes" /></figure>
                        <div className="card-body flex mt-[-10px]">
                            <div className='mx-4'>
                                <h2 className="card-title bg">Alcohol Tracker</h2>
                                <p>All-In-One (AIO) Service</p>
                            </div>
                            <div className="card-actions justify-end mt-[-48px] mx-[80px]">
                                <button className="rounded-3xl px-6 py-2 bg-[#181e22] text-white">Open</button>
                            </div>
                        </div>
                        <div>
                            <img className='mt-[-46px] mx-[360px] w-14 h-6' src={btnAry} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 grid-cols-2 grid-cols-3 bg-[#0a0a0a] gap-72 mt-40'>
                <div className="card bg-[#0a0a0a] mx-[-260px] w-80  shadow-xl mt-[450px]">
                    <figure><img src={card3} alt="card" /></figure>
                    <div className="card-body  flex mt-[-24px]">
                        <div>
                            <h2 className="card-title bg">Alcohol Tracker</h2>
                            <p>All-In-One (AIO) Service</p>
                        </div>
                        <div className="card-actions justify-end mt-[-48px] mx-[-20px]">
                            <button className="rounded-3xl px-6 py-2 bg-[#181e22] text-white">Open</button>
                        </div>
                    </div>
                    <div>
                        <img className='mt-[-64px] mx-[266px] w-14 h-6' src={btnAry} />
                    </div>
                </div>
                <div className="card mx-[-205px] w-80 bg-base-100 shadow-xl mt-[450px] bg-[#0a0a0a]">
                    <figure><img src={card4} alt="card" /></figure>
                    <div className="card-body bg-[#0a0a0a] flex mt-[-24px]">
                        <div>
                            <h2 className="card-title bg">Alcohol Tracker</h2>
                            <p>All-In-One (AIO) Service</p>
                        </div>
                        <div className="card-actions justify-end mt-[-48px] mx-[-20px]">
                            <button className="rounded-3xl px-6 py-2 bg-[#181e22] text-white">Open</button>
                        </div>
                    </div>
                    <div>
                        <img className='mt-[-64px] mx-[266px] w-14 h-6' src={btnAry} />
                    </div>
                </div>
                <div className="card mx-[-150px] w-80 bg-base-100 shadow-xl mt-[450px] bg-[#0a0a0a]">
                    <figure><img src={card5} alt="card" /></figure>
                    <div className="card-body flex bg-[#0a0a0a] mt-[-24px]">
                        <div>
                            <h2 className="card-title bg">Alcohol Tracker</h2>
                            <p>All-In-One (AIO) Service</p>
                        </div>
                        <div className="card-actions justify-end mt-[-48px] mx-[-20px]">
                            <button className="rounded-3xl px-6 py-2 bg-[#181e22] text-white">Open</button>
                        </div>
                    </div>
                    <div>
                        <img className='mt-[-64px] mx-[266px] w-14 h-6' src={btnAry} />
                    </div>
                </div>
                <div className='mt-[-280px] mx-52 gap-2'>
                    <button className="w-[131px] py-3 rounded-full bg-[#52a7f6] text-white">View more <img className='mt-[-28px] mx-[100px] w-8 h-8' src={btnAry}/></button>
                </div>
            </div>
        </div>
    );
};

export default Work;