import bgWork3 from '../../assets/Card/bg-3.png';
import bg123 from '../../assets/Card/bg-work-.png';
const items = [
    "How to Protect Your Identity While Traveling",
    "How to Protect Your Identity While Traveling",
    "How to Protect Your Identity While Traveling",
    "How to Protect Your Identity While Traveling",
    "How to Protect Your Identity While Traveling",
];

const Faq = () => {
    return (
        <div className='grid grid-cols-1 mt-[-260px] md:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#111517] bg-cover bg-center bg-no-repeat w-full min-h-screen min-h- p-6'
            style={{
                backgroundImage: `url(${bg123})`,
            }}>
            <div className='w-[750px] h-[100px]'>
                <img className='ml-[400px]' src={bgWork3} alt="" />
            </div>
            <div>
                <h2 className='text-4xl font-bold ml-[130px] mt-[70px]'>Featured Insights</h2>
                <div className='mt-[10px] ml-[180px]'>
                    <p>Lorem ipsum dolor sit amet<br /> <span className='ml-[-23px]'>consectetur. Eget at at nunc lorem.</span></p>
                </div>
            </div>
            <div className="flex justify-center mt-60 ml-[-1000px]">
                <div className="bg-black text-white p-4 space-y-4">
                    {items.map((title, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between bg-gradient-to-r from-[#1e293b] to-black rounded-lg p-4 w-[1100px]"
                        >
                            <div className="flex items-center gap-4">
                                <div className="bg-gradient-to-b from-[#1e3a8a] to-[#1e40af] text-blue-400 font-bold text-lg w-12 h-12 flex items-center justify-center rounded-md">
                                    {String(index + 1).padStart(2, "0")}
                                </div>
                                <p className="text-lg font-semibold">{title}</p>
                            </div>
                            <a href="#" className="text-white text-2xl">
                                ↗
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;